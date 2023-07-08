import React, { SetStateAction } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { SignInGoogle, initFirebase } from "@/utils/FirebaseUtil";

const LoginWithGoogle = () => {

  const clickHandler = async () => {
    //firebase 관련 함수를 사용하기 전에 init이 필요함.
    initFirebase();
    const userCredential = await SignInGoogle();
    const metaData = userCredential.user.metadata;

    if (metaData.creationTime !== metaData.lastSignInTime) {
      window.location.replace("/");
      return;
    }
  };

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
