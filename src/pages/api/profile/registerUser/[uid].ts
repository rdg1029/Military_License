import type { NextApiRequest, NextApiResponse } from 'next'
import { registerUser, initFirebase } from "@/utils/FirebaseUtil";
import { API_DATA } from "@/utils/DataClass";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<API_DATA>
) {
  const { uid } = req.query;

  initFirebase();
  let data = await registerUser(uid!.toString(), []);
  res.send(data);
}
