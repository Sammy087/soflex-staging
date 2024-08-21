// HTTP Function

import * as functions from "firebase-functions";
import { corsHandler, defaultFunctions } from "../handlers";

export const helloWorld = defaultFunctions.https.onRequest(
  (request: functions.https.Request, response: functions.Response) => {
    corsHandler(request, response, () => {
      functions.logger.info("Hello logs!", { structuredData: true });
      response.send("Hello from Firebase!");
    });
  }
);