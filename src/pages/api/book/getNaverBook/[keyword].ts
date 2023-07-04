import type { NextApiRequest, NextApiResponse } from 'next'
import {API_DATA} from "@/utils/DataClass";

import dotenv from "dotenv";

dotenv.config();

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<API_DATA>
) {
  const { keyword } = req.query;

  const RESULT_DATA: API_DATA = {
    RESULT_CODE: 0,
    RESULT_MSG: "Ready",
    RESULT_DATA: {}
  }

  const NAVER_API_URL = `https://openapi.naver.com/v1/search/book.xml?display=10&start=1&query=${keyword![0]}`
  const NAVER_API_REQ = {
    "X-Naver-Client-Id": process.env.NEXT_PUBLIC_NAVER_API_ID,
    "X-Naver-Client-Secret": process.env.NEXT_PUBLIC_NAVER_API_SECRET
  };

  res.send(RESULT_DATA);
}
