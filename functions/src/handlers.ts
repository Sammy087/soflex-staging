import * as functions from "firebase-functions";
import * as cors from "cors";

// Initialize functions with a specific default region
export const defaultFunctions = functions.region("us-central1");
// Initialize cors with default options
export const corsHandler = cors({ origin: true });