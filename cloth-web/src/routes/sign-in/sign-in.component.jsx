import React from "react";
// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils.js";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component.jsx";

const SignIn = () => {
  //FIXME: No data returned from google redirected page
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await getRedirectResult(auth);
  //       if (response) {
  //         const { user } = response;
  //         await createUserDocumentFromAuth(user);
  //       }
  //     } catch (error) {
  //       console.error("Error handling redirect result:", error);
  //     }
  //   }
  //   fetchData();
  // }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>I am the signIn page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      {/*TODO:*/}
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign In with Google Redirect
      </button> */}
      <SignUpForm />
    </div>
  );
};

export default SignIn;
