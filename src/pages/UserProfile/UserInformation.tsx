import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonRifle } from "@fortawesome/free-solid-svg-icons";
import { USER_DATA } from "@/utils/DataClass";

interface Props {
  props: USER_DATA;
}
const UserInformation = ({ props }: Props) => {
  if (props !== undefined){
    return (
    <div className="-mt-10">
      {/*프로필 이미지 */}
      <div className="flex justify-center items-center w-36 h-36 bg-df-green rounded-full relative top-14 -left-1 z-10">
        <FontAwesomeIcon icon={faPersonRifle} size="5x" />
      </div>
      <div>
        {/*유저 정보 */}
        <div className="flex justify-center items-center w-85 h-80 bg-df-orange-opacity rounded-2xl drop-shadow-md absoulte -z-10">
          <div className="flex flex-col justify-around items-start w-full h-4/5 pl-5 pt-7">
            {/*유저 부대 정보 및 계급 */}
            <div className="flex flex-col justify-between w-36">
              <p className="text-lg font-extrabold text-df-orange">
                {props.unit}
              </p>
              <div className="flex flex-row justify-between items-center">
                <p className="text-3xl font-extrabold text-df-green">
                  {props.military_rank}
                </p>
                <p className="text-3xl font-extrabold text-df-green">
                  {props.name}
                </p>
              </div>
            </div>

            {/*mp 및 취급 자격증 수, 한 줄 소개 */}
            <div className="flex flex-row justify-between items-center w-72">
              {/*MP */}
              <div className="flex flex-col justify-start">
                <p className="text-lg font-extrabold text-df-orange">MP</p>
                <p className="text-3xl font-extrabold text-df-green">
                  {props.mp}
                </p>
              </div>

              {/*취득 자격증 수 */}
              <div className="flex flex-col justify-start">
                <p className="text-base font-extrabold text-df-orange">
                  취득 자격증 수
                </p>
                <p className="text-3xl font-extrabold text-df-green">
                  {props.license_list ? props.license_list.length : 0}
                </p>
              </div>
            </div>

            {/*한줄소개*/}
            <div className="flex flex-col justify-start">
              <p className="text-lg font-extrabold text-df-orange">한줄 소개</p>
              <p className="text-lg font-extrabold text-df-green">
                &quot;{props.comment}&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  }else{
    return (<></>);
  }
  
};

export default UserInformation;
