import type { NextApiRequest, NextApiResponse } from 'next'
import { registerUser, initFirebase } from "@/utils/FirebaseUtil";
import { API_DATA } from "@/utils/DataClass";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<API_DATA>
) {
  const { uid } = req.query;
  const userData = req.body;

  userData.license_list = [];
  userData.mp = 0;

  initFirebase();
  let data = await registerUser(uid!.toString(), userData);
  res.send(data);
}
