export const REACT_APP_FIREBASE_API_KEY =
  process.env.REACT_APP_FIREBASE_API_KEY;
export const REACT_APP_FIREBASE_AUTH_DOMAIN =
  process.env.REACT_APP_FIREBASE_AUTH_DOMAIN;
export const REACT_APP_FIREBASE_PROJECT_ID =
  process.env.REACT_APP_FIREBASE_PROJECT_ID;
export const REACT_APP_FIREBASE_STORAGE_BUCKET =
  process.env.REACT_APP_FIREBASE_STORAGE_BUCKET;
export const REACT_APP_FIREBASE_MESSAGING_SENDER_ID =
  process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID;
export const REACT_APP_FIREBASE_APP_ID = process.env.REACT_APP_FIREBASE_APP_ID;
export const REACT_APP_FIREBASE_MEASUREMENT_ID =
  process.env.REACT_APP_FIREBASE_MEASUREMENT_ID;

export const Paths = {
  WELCOME: "/",
  USER_INFO: "/a1b2c3d4",
  REMINDER: "/e5f6g7h8",
  WEIGHT_LOSS: "/i9j0k1l2",
  COMMUNITY: "/m3n4o5p6",
  HEALTH_CONNECT: "/q7r8s9t0",
  START_WEIGHT: "/u1v2w3x4",
  CURRENT_WEIGHT: "/y5z6a7b8",
  DREAM_WEIGHT: "/c9d0e1f2",
  CHECK_CURRENT_WEIGHT: "/g3h4i5j6",
  TODAY_WEIGHT: "/k7l8m9n0",
  MEDICINE_NAME: "/o1p2q3r4",
  MEDICINE_DOSAGE: "/s5t6u7v8",
  LAST_SHOT: "/w9x0y1z2",
  SHOTS_FREQUENCY: "/a3b4c5d6",
  LAST_REMINDER: "/e7f8g9h0",
  FORGOT_PASSWORD: "/i1j2k3l4",
  MANAGEMENT: "/m5n6o7p8",
  HOME: "/q9r0s1t2",
  SIGNUP: "/u3v4w5x6",
  SIGNIN: "/y7z8a9b0",
  CHANGE_PASSWORD: "/c1d2e3f4",
  PRIVACY_POLICY: "/g5h6i7j8",
  TERMS_OF_USE: "/k9l0m1n2",
};

export const ShotUnits = ["mg", "ml", "gr"];

export const Frequency = ["Daily", "Weekly", "Monthly", "Yearly"];

// export const FrequencyCheckForm = [
//   { title: "At Regular Intervals", value: "Daily" },
//   { title: "On Specific Days of the Week", value: "Weekly" },
//   { title: "As Needed", value: "Monthly" },
// ];

export const FrequencyCheckForm = [
  { title: "Daily", value: "Daily" },
  { title: "Weekly", value: "Weekly" },
  { title: "Monthly", value: "Monthly" },
];

export const FirebaseErrorMessages = {
  "auth/invalid-credential": "The email or password is not valid.",
  "auth/user-disabled": "The user account has been disabled.",
  "auth/user-not-found": "No user found with this email.",
  "auth/wrong-password": "Incorrect password. Please try again.",
  "auth/email-already-exists":
    "The provided email is already in use by an existing user. Each user must have a unique email.",
  "auth/id-token-expired": "The provided Firebase ID token is expired.",
  "auth/id-token-revoked": "The Firebase ID token has been revoked.",
  "auth/insufficient-permission":
    "The credential used to initialize the Admin SDK has insufficient permission to access the requested Authentication resource.",
  "auth/internal-error":
    "The Authentication server encountered an unexpected error while trying to process the request.",
  "auth/invalid-argument":
    "An invalid argument was provided to an Authentication method.",
  "auth/invalid-claims":
    "The custom claim attributes provided to setCustomUserClaims() are invalid.",
  "auth/invalid-continue-uri": "The continue URL must be a valid URL string.",
  "auth/invalid-creation-time":
    "The creation time must be a valid UTC date string.",
  "auth/invalid-disabled-field":
    "The provided value for the disabled user property is invalid. It must be a boolean.",
  "auth/invalid-display-name":
    "The provided value for the displayName user property is invalid. It must be a non-empty string.",
  "auth/invalid-dynamic-link-domain":
    "The provided dynamic link domain is not configured or authorized for the current project.",
  "auth/invalid-email":
    "The provided value for the email user property is invalid. It must be a string email address.",
  "auth/invalid-email-verified":
    "The provided value for the emailVerified user property is invalid. It must be a boolean.",
  "auth/invalid-hash-algorithm":
    "The hash algorithm must match one of the strings in the list of supported algorithms.",
  "auth/invalid-hash-block-size": "The hash block size must be a valid number.",
  "auth/invalid-hash-derived-key-length":
    "The hash derived key length must be a valid number.",
  "auth/invalid-hash-key": "The hash key must be a valid byte buffer.",
  "auth/invalid-hash-memory-cost":
    "The hash memory cost must be a valid number.",
  "auth/invalid-hash-parallelization":
    "The hash parallelization must be a valid number.",
  "auth/invalid-hash-rounds": "The hash rounds must be a valid number.",
  "auth/invalid-hash-salt-separator":
    "The hashing algorithm salt separator field must be a valid byte buffer.",
  "auth/invalid-id-token":
    "The provided ID token is not a valid Firebase ID token.",
  "auth/invalid-last-sign-in-time":
    "The last sign-in time must be a valid UTC date string.",
  "auth/invalid-page-token":
    "The provided next page token in listUsers() is invalid. It must be a valid non-empty string.",
  "auth/invalid-password":
    "The provided value for the password user property is invalid. It must be a string with at least six characters.",
  "auth/invalid-password-hash":
    "The password hash must be a valid byte buffer.",
  "auth/invalid-password-salt":
    "The password salt must be a valid byte buffer.",
  "auth/invalid-phone-number":
    "The provided value for the phoneNumber is invalid. It must be a non-empty E.164 standard compliant identifier string.",
  "auth/invalid-photo-url":
    "The provided value for the photoURL user property is invalid. It must be a string URL.",
  "auth/invalid-provider-data":
    "The providerData must be a valid array of UserInfo objects.",
  "auth/invalid-provider-id":
    "The providerId must be a valid supported provider identifier string.",
  "auth/invalid-oauth-responses":
    "Only exactly one OAuth responseType should be set to true.",
  "auth/invalid-session-cookie-duration":
    "The session cookie duration must be a valid number in milliseconds between 5 minutes and 2 weeks.",
  "auth/invalid-uid":
    "The provided uid must be a non-empty string with at most 128 characters.",
  "auth/invalid-user-import": "The user record to import is invalid.",
  "auth/maximum-user-count-exceeded":
    "The maximum allowed number of users to import has been exceeded.",
  "auth/missing-android-pkg-name":
    "An Android Package Name must be provided if the Android App is required to be installed.",
  "auth/missing-continue-uri":
    "A valid continue URL must be provided in the request.",
  "auth/missing-hash-algorithm":
    "Importing users with password hashes requires that the hashing algorithm and its parameters be provided.",
  "auth/missing-ios-bundle-id": "The request is missing a Bundle ID.",
  "auth/missing-uid": "A uid identifier is required for the current operation.",
  "auth/missing-oauth-client-secret":
    "The OAuth configuration client secret is required to enable OIDC code flow.",
  "auth/operation-not-allowed":
    "The provided sign-in provider is disabled for your Firebase project. Enable it from the Sign-in Method section of the Firebase console.",
  "auth/phone-number-already-exists":
    "The provided phoneNumber is already in use by an existing user. Each user must have a unique phoneNumber.",
  "auth/project-not-found":
    "No Firebase project was found for the credential used to initialize the Admin SDKs.",
  "auth/reserved-claims":
    "One or more custom user claims provided to setCustomUserClaims() are reserved.",
  "auth/session-cookie-expired":
    "The provided Firebase session cookie is expired.",
  "auth/session-cookie-revoked":
    "The Firebase session cookie has been revoked.",
  "auth/too-many-requests":
    "The number of requests exceeds the maximum allowed.",
  "auth/uid-already-exists":
    "The provided uid is already in use by an existing user. Each user must have a unique uid.",
  "auth/unauthorized-continue-uri":
    "The domain of the continue URL is not whitelisted. Whitelist the domain in the Firebase Console.",
};
