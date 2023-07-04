import {doc, Firestore, getDoc, getFirestore} from "@firebase/firestore";
import {FirebaseApp, FirebaseOptions, initializeApp} from "@firebase/app";

import dotenv from "dotenv";
import {API_DATA} from "@/utils/DataClass";

dotenv.config();
const firebaseConfig: FirebaseOptions = {
    apiKey: process.env.NEXT_PUBLIC_FB_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FB_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FB_PROJECT_ID,
    appId: process.env.NEXT_PUBLIC_FB_APP_ID
};

let firebaseApp: FirebaseApp;
let firebaseDB: Firestore;

export const initFirebase = () => {
    if(firebaseApp === undefined || firebaseDB === undefined) {
        firebaseApp = initializeApp(firebaseConfig);
        firebaseDB = getFirestore();
    }
};

const getFirebaseDB = async (collectionID: string, documentID: string) => {
    const RESULT_DATA: API_DATA = {
        RESULT_CODE: 0,
        RESULT_MSG: "Ready",
        RESULT_DATA: {}
    }

    const fbDocument = await getDoc(doc(firebaseDB, collectionID, documentID));
    if(!fbDocument.exists()){
        RESULT_DATA.RESULT_CODE = 100;
        RESULT_DATA.RESULT_MSG = "No Such Database";
        return RESULT_DATA;
    }

    try{
        RESULT_DATA.RESULT_CODE = 200;
        RESULT_DATA.RESULT_MSG = "Success";
        RESULT_DATA.RESULT_DATA = fbDocument.data();
    }catch(error){
        RESULT_DATA.RESULT_CODE = 100;
        RESULT_DATA.RESULT_MSG = error as string;
    }

    return RESULT_DATA;
};