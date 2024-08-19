import { httpsCallable } from "firebase/functions";
import { functions } from "../firebase";

export const checkHealthConnection = httpsCallable(
  functions,
  "checkHealthConnection"
);

export const getAllMedicines = httpsCallable(functions, "getAllMedicines");

export const getUserWeights = httpsCallable(functions, "getUserWeights");

export const mutationUserWeights = httpsCallable(
  functions,
  "mutationUserWeights"
);

export const getUserShots = httpsCallable(functions, "getUserShots");

export const createShotsInfo = httpsCallable(functions, "createShotsInfo");

export const mutationShotsInfo = httpsCallable(functions, "mutationShotsInfo");
