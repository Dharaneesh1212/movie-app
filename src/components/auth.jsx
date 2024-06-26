import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
// Firebase
import {
  signInWithGooglePopUp,
  signInAuthUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  movieAuth,
} from "../utils/firebase";
// Signup , signin
import { updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

const defaultFormFields = {
  email: "",
  password: "",
};

// Google click function
const signInWithGoogle = async (e) => {
  e.preventDefault();
  const { user } = await signInWithGooglePopUp();
  const userDocRef = await createUserDocumentFromAuth(user);
  console.log(user.displayName, user.email, user.uid);
  // getUserProfileInfoFromFirestore(uid);
};

const signInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
};

const AuthContainer = () => {
  const [activeTab, setActiveTab] = useState("sign-up");
  const navigate = useNavigate();

  const handleTabToggle = () => {
    setActiveTab(activeTab === "sign-up" ? "sign-in" : "sign-up");
  };

  // Signup functionalities
  const [signupUserName, setSignupUserName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createAuthUserWithEmailAndPassword(
        signupEmail,
        signupPassword
      );
      console.log("User Credential:", userCredential);
      const user = userCredential.user;

      await updateProfile(user, { displayName: signupUserName });
      await createUserDocumentFromAuth(user);

      console.log("Signed up successfully");
      toast.success("Signed up successfully");
      setSignupUserName("");
      setSignupEmail("");
      setSignupPassword("");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        console.log(error);
        toast.error(
          "This email address is already in use. Please sign in or use a different email."
        );
      } else if (error.code === "auth/weak-password") {
        console.log("Error occurred while signing up:", error);
        alert(
          "password should be strong and it should be more than 6 characters."
        );
      } else {
        console.error("Error occurred while signing up:", error);
        toast.error("Error occurred while signing up. Please try again.");
      }
    }
  };

  // Signup functionalities
  const [signinEmail, setSigninEmail] = useState("");
  const [signinPassword, setSigninPassword] = useState("");

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      const { user } = await signInWithEmailAndPassword(
        movieAuth,
        signinEmail,
        signinPassword
      );
      if (user) {
        toast.success("signed in successfully");
        setSigninEmail("");
        setSigninPassword("");
      }
      navigate("/");
    } catch (error) {
      console.error("Error occurred while signing in:", error);
      toast.error("Email or password might be wrong.", error);
    }
  };

  return (
    <main id="auth" className="flex items-center justify-center bg-white m-8">
      <div className="flex items-center justify-center flex-row bg-white rounded-3xl shadow-[0_5px_15px_rgba(0,0,0,0.35)]">
        <div
          className={`flex items-center justify-center ${
            activeTab === "sign-up" ? "" : "hidden"
          }`}
        >
          <form
            id="signupform"
            className="flex items-center justify-center flex-col gap-8 w-[23rem]"
          >
            <h1 className="animate__animated animate__zoomIn text-2xl font-semibold font-mono">
              Create Account
            </h1>
            <input
              onChange={(e) => setSignupUserName(e.target.value)}
              value={signupUserName}
              type="text"
              placeholder="Name"
              name="username"
              id="inputone"
              className="animate__animated animate__zoomIn h-8 w-72 bg-slate-100 p-1 rounded-md font-sans font-medium text-lg outline-none"
            />
            <input
              onChange={(e) => setSignupEmail(e.target.value)}
              value={signupEmail}
              type="email"
              placeholder="Email"
              name="email"
              id="inputtwo"
              className="animate__animated animate__zoomIn h-8 w-72 bg-slate-100 p-1 rounded-md font-sans font-medium text-lg outline-none"
            />
            <input
              onChange={(e) => setSignupPassword(e.target.value)}
              value={signupPassword}
              type="password"
              placeholder="Password"
              name="password"
              id="inputthree"
              className="animate__animated animate__zoomIn h-8 w-72 bg-slate-100 p-1 rounded-md font-sans font-medium text-lg outline-none"
            />
            <button
              onClick={handleSignup}
              className="animate__animated animate__zoomIn flex items-center justify-center h-10 w-[10rem] bg-gradient-to-r from-indigo-500 to-pink-400 hover:from-pink-500 hover:to-indigo-500 rounded-md font-sans font-medium text-lg"
            >
              Sign Up
            </button>
            <button
              className="animate__animated animate__zoomIn flex items-center justify-center h-10 w-[10rem] bg-cyan-500 rounded-md font-mono font-medium text-xl"
              onClick={signInWithGoogle}
            >
              <FcGoogle />
            </button>
          </form>
        </div>
        <div
          className={`flex items-center justify-center ${
            activeTab === "sign-in" ? "" : "hidden"
          }`}
        >
          <form
            id="signinform"
            className="flex items-center justify-center flex-col gap-10 w-[23rem]"
          >
            <h1 className="animate__animated animate__zoomIn text-2xl font-semibold font-mono">
              Sign In
            </h1>
            <input
              onChange={(e) => setSigninEmail(e.target.value)}
              value={signinEmail}
              type="email"
              placeholder="Email"
              name="email"
              id="inputfour"
              className="animate__animated animate__zoomIn h-8 w-72 bg-slate-100 p-1 rounded-md font-sans font-medium text-lg outline-none"
            />
            <input
              onChange={(e) => setSigninPassword(e.target.value)}
              value={signinPassword}
              type="password"
              placeholder="Password"
              name="password"
              id="inputfive"
              className="animate__animated animate__zoomIn h-8 w-72 bg-slate-100 p-1 rounded-md font-sans font-medium text-lg outline-none"
            />
            <button
              onClick={handleSignin}
              className="animate__animated animate__zoomIn flex items-center justify-center h-10 w-[10rem] bg-gradient-to-r from-pink-500 to-indigo-500 hover:from-indigo-500 hover:to-pink-400 rounded-md font-sans font-medium text-lg"
            >
              Sign In
            </button>
          </form>
        </div>
        <div>
          <div className="flex items-center justify-center flex-row">
            <div
              id="signin"
              className={`bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500 h-[30rem] w-[25rem] rounded-3xl flex justify-center items-center flex-col p-2 gap-4 ${
                activeTab === "sign-in" ? "" : "hidden"
              }`}
            >
              <h1 className="animate__animated animate__zoomIn text-3xl font-semibold font-mono">
                Welcome Back !
              </h1>
              <p className="animate__animated animate__zoomIn text-xl font-small font-mono">
                Enter your personal details to use all site features
              </p>
              <button
                className="animate__animated animate__zoomIn flex items-center justify-center h-10 w-[8rem] bg-transparent rounded-md font-sans font-medium text-lg text-white shadow-[0_5px_15px_rgba(0,0,0,0.35)]"
                onClick={handleTabToggle}
              >
                Sign Up
              </button>
            </div>
            <div
              id="signup"
              className={`bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 h-[30rem] w-[25rem] rounded-3xl flex justify-center items-center flex-col p-2 gap-4 ${
                activeTab === "sign-up" ? "" : "hidden"
              }`}
            >
              <h1 className="animate__animated animate__zoomIn text-3xl font-semibold font-mono">
                Welcome Friend !
              </h1>
              <p className="animate__animated animate__zoomIn text-xl font-small font-mono">
                Enter your personal details to use all site features
              </p>
              <button
                className="animate__animated animate__zoomIn flex items-center justify-center h-10 w-[8rem] bg-transparent rounded-md font-sans font-medium text-lg text-white shadow-[0_5px_15px_rgba(0,0,0,0.35)]"
                onClick={handleTabToggle}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AuthContainer;
