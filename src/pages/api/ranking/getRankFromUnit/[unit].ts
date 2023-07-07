import type { NextApiRequest, NextApiResponse } from 'next'
import { getRankFromUnit, initFirebase } from "@/utils/FirebaseUtil";
import { API_DATA } from "@/utils/DataClass";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<API_DATA>
) {
  const { unit } = req.query;

  initFirebase();
  let data = await getRankFromUnit(unit!.toString());
  res.send(data);
}
