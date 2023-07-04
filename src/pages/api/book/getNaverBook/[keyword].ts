import type { NextApiRequest, NextApiResponse } from 'next'
import {API_DATA} from "@/utils/DataClass";

type Data = {
  name: string
}

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

  res.send(RESULT_DATA);
}
