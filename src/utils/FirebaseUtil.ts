import {collection, doc, Firestore, getDoc, getDocs, getFirestore} from "@firebase/firestore";
import {FirebaseApp, FirebaseOptions, initializeApp} from "@firebase/app";
import {API_DATA, BOOK_DATA, LIST_DATA} from "@/utils/DataClass";

import dotenv from "dotenv";

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

export const getMilLibraryBookList = async (keyword: string) => {
    const RESULT_DATA: API_DATA = {
        RESULT_CODE: 0,
        RESULT_MSG: "Ready",
        RESULT_DATA: {}
    }

    const fbDocument = await getDocs(collection(firebaseDB, "Book"));
    if(fbDocument.empty){
        RESULT_DATA.RESULT_CODE = 100;
        RESULT_DATA.RESULT_MSG = "No Such Database";
        return RESULT_DATA;
    }

    try{
        let RESULT_DATA_LIST: LIST_DATA;

        let cntData = 0;
        let listBook: Array<BOOK_DATA> = [];

        fbDocument.forEach((curDoc) => {
            if(curDoc.get("marc_title").indexOf(keyword) > 0) {
                cntData++;
                listBook.push({
                    author: curDoc.get("marc_author"),
                    publisher: curDoc.get("marc_publisher"),
                    title: curDoc.get("marc_title")
                });
            }
        });

        RESULT_DATA_LIST = {
            data: listBook
        };

        RESULT_DATA.RESULT_CODE = 200;
        RESULT_DATA.RESULT_MSG = "Success";
        RESULT_DATA.RESULT_DATA = RESULT_DATA_LIST;
    }catch(error){
        RESULT_DATA.RESULT_CODE = 100;
        RESULT_DATA.RESULT_MSG = error as string;
    }

    return RESULT_DATA;
}

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