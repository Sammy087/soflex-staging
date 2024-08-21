import * as admin from "firebase-admin";
import * as httpFunctions from "./http/test";
import * as firestoreTriggers from "./firestore/trigger/firestoreTriggers";
import * as firestoreMessages from "./firestore/functions/messages/firestoreMessages";
import * as firestoreWeightes from "./firestore/functions/weights/firestoreWeights";
import * as firestoreMedicines from "./firestore/functions/medicines/firestoreMedicines";
import * as firestoreShots from "./firestore/functions/shots/firestoreShots";
import * as firestoreAuth from "./firestore/functions/auth/firestoreAuth";
import * as authenticationTriggers from "./auth/authenticationTriggers";

admin.initializeApp();

// HTTP Function
export const { helloWorld } = httpFunctions;

// Firestore Trigger
export const { onUserCreate } = firestoreTriggers;

// Authentication Trigger
export const { sendWelcomeEmail } = authenticationTriggers;

// Firestore Function
export const { addMessage } = firestoreMessages;
export const { checkHealthConnection, getUserWeights, mutationUserWeights } =
  firestoreWeightes;
export const { getAllMedicines } = firestoreMedicines;
export const {
  getUserShots,
  getOptionalShotInfo,
  createOrUpdateShotsInfo,
  mutationShotsInfoTimes,
} = firestoreShots;
export const { resetPassword } = firestoreAuth;
