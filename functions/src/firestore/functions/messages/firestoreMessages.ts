// Firestore Function

import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { defaultFunctions } from "../../../handlers";

export const addMessage = defaultFunctions.https.onCall(
  async (data: { text: string }, context: functions.https.CallableContext) => {
    const { text } = data;
    const writeResult = await admin
      .firestore()
      .collection("messages")
      .add({ text });
    return { result: `Message with ID: ${writeResult.id} added.` };
  }
);
