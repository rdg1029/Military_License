import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { SignInGoogle, initFirebase } from "@/utils/FirebaseUtil";

const clickHandler = () => {
  initFirebase();
  SignInGoogle();
};

const LoginWithGoogle = () => {
  return (
    <div>

      <button
        className="w-72 h-20 bg-df-orange-opacity text-df-green rounded-2xl drop-shadow-md"
        onClick={clickHandler}
      >
        <div className="w-full h-full flex flex-row justify-evenly items-center">
          <FontAwesomeIcon icon={faGoogle} size="2x" color="#E86A33"/>
          <p className="font-extrabold text-2xl text-df-orange">구글 계정으로 로그인</p>
        </div>
      </button>
    </div>
  );
};

export default LoginWithGoogle;
