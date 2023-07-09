import React, { useState, useEffect } from "react";
import UserInformation from "./UserInformation";
import UserLicenseList from "./UserLicenseList";
import { USER_DATA } from "@/utils/DataClass";
import axios from "axios";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initFirebase } from "@/utils/FirebaseUtil";

const UserProfile = () => {
  const sampleData = "sample"; //홍길동씨
  const [userData, setUserData] = useState<USER_DATA>({
    comment: "",
    email: "",
    license_list: [],
    military_rank: "",
    military_type: "",
    mp: 0,
    name: "",
    phone: "",
    unit: "",
  });

  useEffect(() => {
    const req = axios.create();
    initFirebase();
    onAuthStateChanged(getAuth(), user => {
      req
        .get(`/api/profile/getUserData/${user?.uid}`)
        .then((res) => {
          // console.log(res.data.RESULT_DATA);
          setUserData(res.data.RESULT_DATA);
      })
      .catch((err) => console.log(err));
    });
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-start pt-20">
        <UserInformation props={userData} />
        <h1 className="text-df-orange text-3xl font-extrabold pt-7">
          취득한 자격증
        </h1>
        <UserLicenseList list={userData.license_list}/>
      </div>
    </div>
  );
};

export default UserProfile;
