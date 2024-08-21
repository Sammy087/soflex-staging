//Firestore Functions

import * as admin from "firebase-admin";
import { DateTime } from "luxon";
import { defaultFunctions } from "../../../handlers";

export const checkHealthConnection = defaultFunctions.https.onCall(
  async (data: { uid: string }) => {
    const { uid } = data;
    const user = await admin.firestore().collection("weights").doc(uid).get();
    if (user.exists) {
      return {
        result: user.exists,
        data: user.data(),
      };
    }
    return { result: user.exists };
  }
);

export const getUserWeights = defaultFunctions.https.onCall(
  async (data: {uid: string}) => {
    const { uid } = data;
    const user = await admin.firestore().collection("weights").doc(uid).get();
    if (user.exists) {
      return { result: user.exists, data: user.data() };
    }
    return { result: user.exists };
  }
)

export const mutationUserWeights = defaultFunctions.https.onCall(
  async (data: { uid: string; key: string; value: number }) => {
    const now = DateTime.now().setZone("America/Chicago");
    const timestamp = now.valueOf();
    const { uid, key, value } = data;
    const weightsRef = admin.firestore().collection("weights").doc(uid);
    // Get the document
    const weights = await weightsRef.get();
    if (weights.exists) {
      // If the document exists, update it
      if (key === "current_weight" || key === "today_weight") {
        // Update CurrentWeight and add a new object to the TodayWeight array
        await weightsRef.set(
          {
            current_weight: value,
            today_weight: admin.firestore.FieldValue.arrayUnion({
              value,
              timestamp,
            }),
          },
          { merge: true }
        );
      } else {
        await weightsRef.set({ [key]: value }, { merge: true });
      }

      return {
        result: weights.exists,
        data: await weightsRef.get().then((doc) => doc.data()),
      };
    } else {
      // If the document does not exist, create it
      await weightsRef.set({ [key]: value, uid });
      return { result: true, data: { [key]: value } };
    }
  }
);
