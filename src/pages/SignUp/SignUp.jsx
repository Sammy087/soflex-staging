import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUp } from "../../component/Icons/ArrowUp";
import { firestore } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { setDoc, doc, collection } from "firebase/firestore";
import { Paths } from "../../AppConstants";
import { GlobalContext } from "../../contexts/GlobalContext";
import Loading from "../Loading/Loading";
import { UserContext } from "../../contexts/UserContext";

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

const SignUp = () => {
  const { auth } = useContext(UserContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState(auth?.email);
  const [password, setPassword] = useState(auth?.password);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [alert, setAlert] = useState({
    message: "",
    type: "success",
  });
  const { loading, setLoading } = useContext(GlobalContext);

  const handleBackClick = () => {
    navigate(Paths.HOME);
  };

  const validate = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }
    if (!password) newErrors.password = "Password is required";
    if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    return newErrors;
  };

  const handleSignUp = async () => {
    setLoading(true);
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        const {
          uid,
          metadata: { createdAt, lastLoginAt },
        } = user;

        localStorage.setItem("uid", JSON.stringify(uid));

        await sendEmailVerification(user);

        const userProfile = doc(collection(firestore, "users"), user?.uid);
        await setDoc(userProfile, {
          uid,
          email,
          name,
          provider: "Email",
          password,
          created_at: createdAt,
          last_login_at: lastLoginAt,
        });

        setAlert({
          message: "User created successfully",
          type: "success",
        });
        setShowModal(true);
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          setAlert({
            message: "Email is already in use. Please sign in.",
            type: "error",
          });
        } else {
          setAlert({
            message: error.message,
            type: "error",
          });
        }
        setShowModal(true);
      }
    }
    setLoading(false);
  };

  const handleSignIn = () => {
    navigate(Paths.SIGNIN);
  };

  if (loading) return <Loading />;

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gray-100">
      <div className="w-full max-w-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4 cursor-pointer" onClick={handleBackClick}>
          <ArrowUp className="absolute left-0 mt-5 ml-5" />
        </div>
        <img
          className="mx-auto h-1/2 w-1/2 mt-10"
          alt="Logo"
          src="static/img/image-1.png"
        />
      </div>
      <div className="p-8 w-full max-w-md flex-none">
        <div className="text-center mb-6">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-[#50B498]">
            Welcome to Med
          </h2>
          <p className="mt-2 text-center text-sm text-black">
            Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
          </p>
        </div>
        <div className="mb-6">
          <InputField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
          {errors.name && (
            <div className="text-red-500 text-xs italic">{errors.name}</div>
          )}
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
          <InputField
            label="Confirm Password"
            value={confirmPassword}
            placeholder="Confirm your password"
            type={showConfirmPassword ? "text" : "password"}
            onChange={(e) => setConfirmPassword(e.target.value)}
            icon="static/img/eye-svgrepo-com-1.svg"
            onIconClick={() => setShowConfirmPassword(!showConfirmPassword)}
          />
          {errors.confirmPassword && (
            <div className="text-red-500 text-xs italic">
              {errors.confirmPassword}
            </div>
          )}
        </div>
        <div className="flex items-center justify-center mb-4 cursor-pointer bg-[#50B498] text-white py-1 px-4 rounded ">
          <button
            className="bg-[#50B498] hover:bg-[#50B498] text-white font-bold py-1 px-6 rounded-full focus:outline-none focus:shadow-outline"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </div>
        <p className="mt-2 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <button
            className="text-[#50B498] hover:text-[#50B498] cursor-pointer font-bold bg-transparent border-none p-0"
            onClick={handleSignIn}
          >
            Sign In
          </button>
        </p>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md text-center">
            <h2 className="text-2xl font-bold mb-4">
              {alert.type === "success" ? "Success!" : "Error!"}
            </h2>
            <p className="mb-4">{alert.message}</p>
            <button
              className="bg-[#50B498] hover:bg-[#50B498] text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
              onClick={() => {
                setShowModal(false);
                navigate(Paths.SIGNIN);
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
