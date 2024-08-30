import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { ArrowUp } from "../../component/Icons/ArrowUp";
import {
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { firestore } from "../../firebase";
import { FirebaseErrorMessages, Paths } from "../../AppConstants";
import { GlobalContext } from "../../contexts/GlobalContext";
import Loading from "../Loading/Loading";
import { UserContext } from "../../contexts/UserContext";
import { checkHealthConnection } from "../../firebaseApis/healthApis";

const InputField = ({
  label,
  value,
  type = "text",
  icon,
  onChange,
  placeholder,
  onIconClick,
}) => (
  <div className="mb-4">
    <label className="block text-black text-sm font-bold mb-2">{label}</label>
    <div className="relative">
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="shadow appearance-none border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline focus:border-[#50B498]"
      />
      {icon && (
        <img
          className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
          alt={label}
          src={icon}
          onClick={onIconClick}
        />
      )}
    </div>
  </div>
);

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();
  const { loading, setLoading } = useContext(GlobalContext);
  const { setUid, setAuth } = useContext(UserContext);

  const handleBackClick = () => {
    navigate(Paths.HOME);
  };

  const validate = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }
    if (!password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSignIn = async () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        setLoading(true);
        const { user } = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const userProfile = doc(collection(firestore, "users"), user?.uid);
        await updateDoc(userProfile, {
          last_login_at: serverTimestamp(),
        });
        const { data } = await checkHealthConnection({
          uid: user?.uid,
        });
        setUid(user?.uid);
        sessionStorage.setItem("uid", user?.uid);
        setLoading(false);
        if (data.result) {
          navigate(Paths.USER_INFO);
        } else {
          navigate(Paths.WELCOME);
        }
      } catch (error) {
        const errorMessage = FirebaseErrorMessages[error.code];
        setAlertMessage(errorMessage);
        setShowAlert(true);
        setLoading(false);
      }
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const { user } = result;
      const userProfile = doc(collection(firestore, "users"), user?.uid);

      await updateDoc(userProfile, {
        last_login_at: serverTimestamp(),
      });

      const { data } = await checkHealthConnection({
        uid: user?.uid,
      });

      setUid(user?.uid);
      sessionStorage.setItem("uid", user?.uid);
      setLoading(false);
      if (data.result) {
        navigate(Paths.MANAGEMENT);
      } else {
        navigate(Paths.WELCOME);
      }
    } catch (error) {
      if (FirebaseErrorMessages[error.code]) {
        const errorMessage = FirebaseErrorMessages[error.code];
        setAlertMessage(errorMessage);
      } else {
        setAlertMessage("No user found with this email.");
      }
      setShowAlert(true);
      setLoading(false);
    }
    setLoading(false);
  };

  const handleSignUp = () => {
    navigate(Paths.SIGNUP);
  };

  if (loading) return <Loading />;

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gray-100">
      <div className="w-full max-w-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4 cursor-pointer" onClick={handleBackClick}>
          <ArrowUp className="absolute left-0 mt-5 ml-5" />
        </div>
        <img
          className="mx-auto h-3/5 w-3/5 mt-10"
          alt="Logo"
          src="static/img/image-1.png"
        />
      </div>
      <div className="p-8 w-full max-w-md flex-none">
        <div className="text-center mb-6">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-[#50B498]">
            Welcome to Med
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
          </p>
        </div>
        <div className="mb-4">
          <InputField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            icon="static/img/email-com.svg"
          />
          {errors.email && (
            <div className="text-red-500 text-xs italic">{errors.email}</div>
          )}
          <InputField
            label="Password"
            value={password}
            placeholder="Enter your password"
            type={showPassword ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
            icon="static/img/eye-svgrepo-com-1.svg"
            onIconClick={() => setShowPassword(!showPassword)}
          />
          {errors.password && (
            <div className="text-red-500 text-xs italic">{errors.password}</div>
          )}
          <div className="text-right">
            <button
              className="text-black hover:text-blue-700 cursor-pointer underline bg-transparent border-none p-0"
              onClick={() => navigate(Paths.FORGOT_PASSWORD)}
            >
              Forgot Password?
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center mb-4 cursor-pointer bg-[#50B498] text-white py-1 px-4 rounded">
          <button
            className="bg-[#50B498] hover:bg-[#50B498] text-white font-bold py-1 px-6 rounded-full focus:outline-none focus:shadow-outline"
            onClick={handleSignIn}
          >
            Sign In
          </button>
        </div>
        <div
          className="flex items-center justify-center mb-4 cursor-pointer bg-[#50B498] text-white py-2 px-4 rounded"
          onClick={handleGoogleSignIn}
        >
          <img
            className="h-6 w-6 mr-2"
            alt="Continue with Google"
            src="static/img/google-svgrepo-com.svg"
          />
          <div className="text-[16px]">Continue with Google</div>
        </div>
        <p className="mt-2 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <button
            className="text-[#50B498] hover:text-[#50B498] cursor-pointer font-bold bg-transparent border-none p-0"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </p>
      </div>
      {showAlert && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">Error</h2>
            <p>{alertMessage}</p>
            <div className="flex justify-between mt-4">
              <button
                className="bg-red-500 text-white py-2 px-4 rounded"
                onClick={() => {
                  setAuth({ email, password });
                  navigate(Paths.SIGNUP);
                }}
              >
                Sign Up
              </button>
              <button
                className="bg-red-500 text-white py-2 px-4 rounded"
                onClick={() => setShowAlert(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignIn;
