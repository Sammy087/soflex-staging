// Authentication Trigger

import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import { defaultFunctions } from "../handlers";

export const sendWelcomeEmail = defaultFunctions.auth
  .user()
  .onCreate((user: admin.auth.UserRecord) => {
    const email = user.email;
    // const displayName = user.displayName;
    if (email) {
      functions.logger.info(`Sending welcome email to ${email}`);
    }
    return null;
  });