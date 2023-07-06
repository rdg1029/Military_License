import type { NextApiRequest, NextApiResponse } from 'next'
import { getRankMain, initFirebase } from "@/utils/FirebaseUtil";
import { API_DATA } from "@/utils/DataClass";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<API_DATA>
) {
  initFirebase();
  let data = await getRankMain();
  res.send(data);
}
