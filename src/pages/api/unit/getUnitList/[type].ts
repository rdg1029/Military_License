import type { NextApiRequest, NextApiResponse } from 'next'
import { getUnitList, initFirebase } from "@/utils/FirebaseUtil";
import { API_DATA } from "@/utils/DataClass";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<API_DATA>
) {
    const { type } = req.query;

    initFirebase();
    res.send(await getUnitList(type!.toString()));
}