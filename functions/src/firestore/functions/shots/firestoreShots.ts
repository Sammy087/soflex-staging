//Firestore functions

import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import { defaultFunctions } from "../../../handlers";

type IShotedDate = {
  date: string;
  times: { time: string; shoted: boolean }[];
};

type Shot = {
  shot_name: string;
  shot_start_date: string;
  dosage: number;
  dosage_unit: string;
  frequency: string;
  last_shot_date: string;
  times: string[];
  shoted_dates: IShotedDate[];
};

export const getUserShots = defaultFunctions.https.onCall(
  async (data: { uid: string }) => {
    const { uid } = data;
    const shots = await admin
      .firestore()
      .collection("shots_info")
      .doc(uid)
      .get();
    return { result: shots.exists, data: shots.data() };
  }
);

export const getOptionalShotInfo = defaultFunctions.https.onCall(
  async (data: { uid: string; shot_name: string }) => {
    const { uid, shot_name } = data;
    const shotsInfoRef = admin.firestore().collection("shots_info").doc(uid);
    try {
      const shotsInfoDoc = await shotsInfoRef.get();
      if (!shotsInfoDoc.exists) {
        throw new functions.https.HttpsError(
          "not-found",
          "User shots info not found"
        );
      }

      const shotsInfo = shotsInfoDoc.data();
      const shots: Shot[] = shotsInfo?.shots || [];
      const shot = shots.find((s) => s.shot_name === shot_name);

      if (!shot) {
        throw new functions.https.HttpsError(
          "not-found",
          "Shot with the specified name not found"
        );
      }

      return { shot };
    } catch (error) {
      console.error("Error retrieving shot info:", error);
      throw new functions.https.HttpsError(
        "unknown",
        "Failed to retrieve shot info",
        error
      );
    }
  }
);

export const createOrUpdateShotsInfo = defaultFunctions.https.onCall(
  async (data: { uid: string; newShot: Shot }) => {
    const { uid, newShot } = data;
    const shotsInfoRef = admin.firestore().collection("shots_info").doc(uid);
    try {
      const shotsInfoDoc = await shotsInfoRef.get();
      let shots: Shot[] = [];

      if (shotsInfoDoc.exists) {
        const existingData = shotsInfoDoc.data();
        shots = existingData?.shots || [];
        const existingIndex = shots.findIndex(
          (shot) => shot.shot_name === newShot.shot_name
        );

        if (existingIndex !== -1) {
          // Update existing shot
          shots[existingIndex] = { ...shots[existingIndex], ...newShot };
        } else {
          // Add new shot
          shots.push(newShot);
        }

        await shotsInfoRef.update({ shots });
        return {
          status: "success",
          message: "Shots info updated successfully.",
        };
      } else {
        // Create new document with the new shot
        await shotsInfoRef.set({ uid, shots: [newShot] });
        return {
          status: "success",
          message: "New shots info created with initial shot.",
        };
      }
    } catch (error) {
      console.error("Error accessing Firestore:", error);
      throw new functions.https.HttpsError(
        "unknown",
        "Failed to create or update shots info",
        error
      );
    }
  }
);

export const mutationShotsInfoTimes = defaultFunctions.https.onCall(
  async (data: {
    uid: string;
    shot_name: string;
    time: string | string[]; // Accept either a string or an array of strings
    last_shot_date: string;
    shoted: boolean;
  }) => {
    const { uid, shot_name, time, last_shot_date } = data;
    const shoted = data.shoted ?? false;
    // Convert time to an array if it's a string
    const times = Array.isArray(time) ? time : [time];
    const shotsInfoRef = admin.firestore().collection("shots_info").doc(uid);
    try {
      const shotsInfoDoc = await shotsInfoRef.get();
      if (!shotsInfoDoc.exists) {
        console.error("Document does not exist");
        throw new functions.https.HttpsError(
          "not-found",
          "Document does not exist"
        );
      }

      const existingData = shotsInfoDoc.data();
      const shots: Shot[] = existingData?.shots || [];
      const shotIndex = shots.findIndex((shot) => shot.shot_name === shot_name);

      if (shotIndex === -1) {
        // Initialize new shot if it doesn't exist
        const newShot: Shot = {
          shot_name: shot_name,
          last_shot_date: last_shot_date,
          shoted_dates: [
            {
              date: last_shot_date,
              times: times.map((time) => ({
                time,
                shoted,
              })),
            },
          ],
          times: times,
          shot_start_date: last_shot_date,
          dosage: 0,
          dosage_unit: "",
          frequency: "",
        };
        shots.push(newShot);
      } else {
        // Update existing shot
        shots[shotIndex].last_shot_date = last_shot_date;

        // Initialize times array if it doesn't exist
        if (!shots[shotIndex].times) {
          shots[shotIndex].times = [];
        }

        // Add new times that aren't already in the array
        for (const time of times) {
          if (!shots[shotIndex].times.includes(time)) {
            shots[shotIndex].times.push(time);
          }
        }

        // Initialize shoted_dates array if it doesn't exist
        if (!shots[shotIndex].shoted_dates) {
          shots[shotIndex].shoted_dates = [];
        }

        const dateIndex = shots[shotIndex].shoted_dates.findIndex(
          (date) => date.date === last_shot_date
        );
        if (dateIndex !== -1) {
          for (const time of times) {
            const timeEntryIndex = shots[shotIndex].shoted_dates[
              dateIndex
            ].times.findIndex((t) => t.time === time);
            if (timeEntryIndex !== -1) {
              shots[shotIndex].shoted_dates[dateIndex].times[
                timeEntryIndex
              ].shoted = shoted;
            } else {
              shots[shotIndex].shoted_dates[dateIndex].times.push({
                time,
                shoted,
              });
            }
          }
        } else {
          shots[shotIndex].shoted_dates.push({
            date: last_shot_date,
            times: times.map((time) => ({ time, shoted })),
          });
        }
      }

      // Save the updated shots array back to Firestore
      await shotsInfoRef.update({ shots });
      console.log("Update successful");
      return {
        status: "success",
        message: "Shot information updated successfully.",
      };
    } catch (error: any) {
      console.error("Error updating shot information:", error);
      throw new functions.https.HttpsError(
        "internal",
        "Failed to update shot information",
        { message: error.message, stack: error.stack }
      );
    }
  }
);
