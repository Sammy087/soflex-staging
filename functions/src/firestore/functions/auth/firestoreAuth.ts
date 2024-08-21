//Firestore function

import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import { defaultFunctions } from "../../../handlers";

export const resetPassword = defaultFunctions.https.onCall(
  async (data: { email: string }, context: functions.https.CallableContext) => {
    const email = data.email;
    try {
      await admin.auth().generatePasswordResetLink(email);
      functions.logger.info(`Password reset email sent to ${email}`);
      return { result: `Password reset email sent to ${email}` };
    } catch (error: any) {
      functions.logger.error(
        `Error sending password reset email to ${email}: ${error.message}`
      );
      throw new functions.https.HttpsError(
        "internal",
        "Unable to send password reset email"
      );
    }
  }
);
