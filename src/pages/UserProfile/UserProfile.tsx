import React from "react";
import UserInformation from "./UserInformation";
import UserLicenseList from "./UserLicenseList";

const UserProfile = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-start pt-20">
        <UserInformation />
        <h1 className="text-df-orange text-3xl font-extrabold">
          취득한 자격증
        </h1>
        <UserLicenseList />
      </div>
    </div>
  );
};

export default UserProfile;
