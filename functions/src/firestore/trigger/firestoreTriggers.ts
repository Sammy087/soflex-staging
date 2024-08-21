// Firestore Trigger

import * as functions from "firebase-functions";
import { defaultFunctions } from "../../handlers";


export const onUserCreate = defaultFunctions.firestore
  .document("users/{userId}")
  .onCreate(
    (
      snap: functions.firestore.QueryDocumentSnapshot,
      context: functions.EventContext
    ) => {
      const newValue = snap.data();
      const name = newValue.name as string;
      functions.logger.info(`New user created: ${name}`, {
        structuredData: true,
      });
      return null;
    }
  );