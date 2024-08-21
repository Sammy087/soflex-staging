//Firestore functions

import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import { defaultFunctions } from "../../../handlers";

export const getAllMedicines = defaultFunctions.https.onCall(
  async (data, context) => {
    try {
      const medicinesSnapshot = await admin
        .firestore()
        .collection("medicines")
        .get();
      const medicines = medicinesSnapshot.docs.map((doc) => ({
        name: doc.id,
        ...doc.data(),
      }));
      return { result: true, data: medicines };
    } catch (error) {
      functions.logger.error("Error fetching medicines:", error);
      throw new functions.https.HttpsError(
        "unknown",
        "Failed to fetch medicines",
        error
      );
    }
  }
);
