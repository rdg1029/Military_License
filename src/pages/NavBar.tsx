import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faIdCard,
  faRankingStar,
  faRightToBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="flex flex-row justify-evenly items-center w-full h-16 bg-df-orange-opacity fixed bottom-0">
      <Link href="/Main">
        <div className="flex flex-col justify-center items-center cursor-pointer">
          <FontAwesomeIcon icon={faHouse} size="1x" color="#E86A33" />
          <p className="text-df-orange font-bold">메인</p>
        </div>
      </Link>

      <Link href="/LicenseList">
        <div className="flex flex-col justify-center items-center cursor-pointer">
          <FontAwesomeIcon icon={faIdCard} size="1x" color="#E86A33" />
          <p className="text-df-orange font-bold">자격증</p>
        </div>
      </Link>

      <Link href="/RankList">
        <div className="flex flex-col justify-center items-center cursor-pointer">
          <FontAwesomeIcon icon={faRankingStar} size="1x" color="#E86A33" />
          <p className="text-df-orange font-bold">랭킹</p>
        </div>
      </Link>
      <Link href="/UserProfile">
        <div className="flex flex-col justify-center items-center cursor-pointer">
          <FontAwesomeIcon icon={faUser} size="1x" color="#E86A33" />
          <p className="text-df-orange font-bold">프로필</p>
        </div>
      </Link>
    </div>
  );
};

export default NavBar;
