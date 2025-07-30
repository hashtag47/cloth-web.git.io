import React from "react";
// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component.jsx";
import SignInForm from "../../components/sign-in-form/sign-in-form.component.jsx";

import { AuthenticationContainer } from "./authentication.styles.jsx";

const Authentication = () => {
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

  return (
    <AuthenticationContainer>
      <SignInForm />
      {/*TODO:*/}
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign In with Google Redirect
      </button> */}
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
