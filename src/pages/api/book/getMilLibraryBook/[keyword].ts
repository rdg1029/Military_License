import type { NextApiRequest, NextApiResponse } from 'next'
import {getMilLibraryBookList, initFirebase} from "@/utils/FirebaseUtil";
import {API_DATA} from "@/utils/DataClass";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<API_DATA>
) {
  const { keyword } = req.query;

  initFirebase();
  let data = await getMilLibraryBookList(keyword![0]);
  res.send(data);
}
