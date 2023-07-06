import type { NextApiRequest, NextApiResponse } from 'next'
import { verifyUser, initFirebase } from "@/utils/FirebaseUtil";
import { API_DATA } from "@/utils/DataClass";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<API_DATA>
) {
  const { token } = req.query;

  initFirebase();
  let data = await verifyUser(token!.toString());
  res.send(data);
}
