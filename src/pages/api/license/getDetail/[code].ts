import type { NextApiRequest, NextApiResponse } from 'next'
import { getLicenseDetail, initFirebase } from "@/utils/FirebaseUtil";
import { API_DATA } from "@/utils/DataClass";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<API_DATA>
) {
    const { code } = req.query;

    initFirebase();
    res.send(await getLicenseDetail(code!.toString()));
}
