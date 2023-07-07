import type { NextApiRequest, NextApiResponse } from 'next'
import { getUserData, initFirebase } from "@/utils/FirebaseUtil";
import { API_DATA } from "@/utils/DataClass";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<API_DATA>
) {
  const { uid } = req.query;

  initFirebase();
  let data = await getUserData(uid!.toString());
  res.send(data);
}