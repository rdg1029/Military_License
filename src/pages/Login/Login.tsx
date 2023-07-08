import React, { useEffect } from "react";
import LoginWithGoogle from "./LoginWithGoogle";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initFirebase } from "@/utils/FirebaseUtil";

const Login = () => {
  useEffect(() => {
    initFirebase();
    onAuthStateChanged(getAuth(), user => {
      if (user?.uid) window.location.replace("/UserProfile");
    });
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="w-83 pb-3">
        <p className="text-lg text-center text-df-green font-extrabold">
          <span className="text-df-orange">밀리센스</span>에 로그인하여 내게 맞는 자격증을 추천 받고,<br/>자격증을 취득하여 다른 장병들과 경쟁하세요.
        </p>
      </div>
      <LoginWithGoogle/>
    </div>
  );
};

export default Login;
