import type { NextApiRequest, NextApiResponse } from 'next'
import {API_DATA, BOOK_DATA} from "@/utils/DataClass";

import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<API_DATA>
) {
  const { keyword } = req.query;

  const RESULT_DATA: API_DATA = {
    RESULT_CODE: 0,
    RESULT_MSG: "Ready",
    RESULT_DATA: {}
  }

  const NAVER_API_URL = `https://openapi.naver.com/v1/search/book.json?display=30&start=1&query=${keyword}`
  const NAVER_API_HEADER = {
    "X-Naver-Client-Id": process.env.NEXT_PUBLIC_NAVER_API_ID,
    "X-Naver-Client-Secret": process.env.NEXT_PUBLIC_NAVER_API_SECRET
  };

  await axios.get(NAVER_API_URL, {
    headers: NAVER_API_HEADER
  }).then((axiosRes)=>{
      let listBook: Array<BOOK_DATA> = [];

      axiosRes.data["items"].forEach((book: BOOK_DATA) => {
          let tmpBook: BOOK_DATA = {
            author: book["author"],
            publisher: book["publisher"],
            title: book["title"]
          }
          listBook.push(tmpBook);
      });

      RESULT_DATA.RESULT_CODE = 200;
      RESULT_DATA.RESULT_MSG = "Success";
      RESULT_DATA.RESULT_DATA = {data: listBook};
  }).catch((error)=>{
      RESULT_DATA.RESULT_CODE = 100;
      RESULT_DATA.RESULT_MSG = error as string;
  });

  res.send(RESULT_DATA);
}
