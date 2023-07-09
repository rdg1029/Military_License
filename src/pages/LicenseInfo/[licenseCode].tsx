import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { BOOK_DATA, LICENSE_DATA } from "@/utils/DataClass";
import axios from "axios";

interface Props {
  licenseName: string;
  licenseType: string;
  licenseCode: string;
}

const SubTitle = (props: { children: React.ReactNode }) => {
  return (
    <div className="w-fit text-xl text-df-orange font-bold pt-5 pb-1">
      {props.children}
    </div>
  );
};

const Content = (props: { children: React.ReactNode }) => {
  return (
    <div className="w-fit text-sm text-df-green font-semibold bg-df-orange-opacity rounded drop-shadow-md p-1 mb-2">
      {props.children}
    </div>
  );
};

const BookContent = (props: {
  title: string;
  publisher: string;
  author: string;
}) => {
  return (
    <div className="flex flex-col grow-0 shrink-0 w-32 bg-df-orange-opacity rounded drop-shadow-md p-1 m-1.5">
      <div className="text-df-green font-bold pb-2">{props.title}</div>
      <div className="text-df-green text-sm">출판사: {props.publisher}</div>
      <div className="text-df-green text-sm">저자: {props.author}</div>
    </div>
  );
};

const LicenseInfo = (props: Props) => {
  const router = useRouter();
  const { licenseCode } = router.query;
  const [licenseInfo, setLicenseInfo] = useState<LICENSE_DATA>({
    content: "",
    licenseCode: "",
    schedule: [""],
    strGualgbcd: "",
    strGualgbnm: "",
    strJmfldnm: "",
    strMdobligfldcd: "",
    strMdobligfldnm: "",
    strObligfldcd: "",
    strObligfldnm: "",
    strSeriescd: "",
    strSeriesnm: ""
  });
  const [bookList, setBookList] = useState<BOOK_DATA[]>([]);

  useEffect(() => {
    const req = axios.create();
    req
      .get(`/api/license/getDetail/${licenseCode}`)
      .then((res) => {
        setLicenseInfo(res.data.RESULT_DATA);
      })
      .catch((err) => console.log(err));
    req
      .get(`/api/book/getMilLibraryBook/${licenseInfo.strMdobligfldnm}`)
      .then(res => {
        setBookList(res.data.RESULT_DATA.data);
      })
      .catch(err => console.log(err));
  }, [licenseCode, licenseInfo]);

  return (
    <>
      <div className="flex flex-col w-full pt-16 pl-5 pr-5">
        <div className="flex flex-row w-full border-b border-df-gren">
          <h1 className="grow text-3xl text-df-orange font-bold self-center">
            {licenseInfo.strJmfldnm}
          </h1>
          <div className="grow-0 flex flex-col">
            <p className="text-sm text-df-orange font-bold leading-none">MP</p>
            <p className="text-lg text-df-green font-bold leading-none">20</p>
          </div>
        </div>

        <SubTitle>종목</SubTitle>
        <Content>{licenseInfo.strObligfldnm}</Content>

        <SubTitle>자격증 정보</SubTitle>
        <Content>
          {licenseInfo.content}
        </Content>

        <SubTitle>시험 일정</SubTitle>
        {
          (licenseInfo.schedule !== undefined) ?
            licenseInfo.schedule.map((items, index) => {
              return(<Content key={index}>{items}</Content>)
            }) :
            (<></>)
        }

        <SubTitle>관련 서적</SubTitle>
      </div>
      <div className="flex flex-nowrap w-full overflow-x-scroll pl-5 pr-5">
      {
        (bookList != undefined) ?
          bookList.map((items, index) => {
            return(<BookContent key={index} title={items.title} publisher={items.publisher} author={items.author}></BookContent>)
          }) :
          (<></>)
      }
      {bookList.length === 0 && <p className="text-df-green">국방대학교 도서 정보를 찾을 수 없습니다.</p>}
      </div>
    </>
  );
};

export default LicenseInfo;
