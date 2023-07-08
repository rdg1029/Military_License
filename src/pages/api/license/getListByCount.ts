import type { NextApiRequest, NextApiResponse } from 'next'
import { getLicenseListByCount, initFirebase } from "@/utils/FirebaseUtil";
import { API_DATA } from "@/utils/DataClass";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<API_DATA>
) {
    initFirebase();
    res.send(await getLicenseListByCount());
}