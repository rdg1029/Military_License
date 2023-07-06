import { collection, doc, Firestore, getDoc, getDocs, getFirestore } from "@firebase/firestore";
import { FirebaseApp, FirebaseOptions, initializeApp } from "@firebase/app";
import {API_DATA, BOOK_DATA, LICENSE_LIST_DATA, USER_DATA} from "@/utils/DataClass";

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

export const getLicenseDetail = async (code: string) => {
    const RESULT_DATA: API_DATA = {
        RESULT_CODE: 0,
        RESULT_MSG: "Ready",
        RESULT_DATA: {}
    }
    
    let resultData = {
        content: "",
        schedule: [],
        strGualgbcd: "",
        strGualgbnm: "",
        strJmfldnm: "",
        strMdobligfldcd: "",
        strMdobligfldnm: "",
        strObligfldcd: "",
        strObligfldnm: "",
        strSeriescd: "",
        strSeriesnm: "",
    }

    let fbDocument = await getDoc(doc(firebaseDB, "License", code));
    if(!fbDocument.exists()){
        RESULT_DATA.RESULT_CODE = 100;
        RESULT_DATA.RESULT_MSG = "No Such Database";
        return RESULT_DATA;
    }
    
    try{
        resultData.strGualgbcd = fbDocument.get("strGualgbcd");
        resultData.strGualgbnm = fbDocument.get("strGualgbnm");
        resultData.strJmfldnm = fbDocument.get("strJmfldnm");
        resultData.strMdobligfldcd = fbDocument.get("strMdobligfldcd");
        resultData.strMdobligfldnm = fbDocument.get("strMdobligfldnm");
        resultData.strObligfldcd = fbDocument.get("strObligfldcd");
        resultData.strObligfldnm = fbDocument.get("strObligfldnm");
        resultData.strSeriescd = fbDocument.get("strSeriescd");
        resultData.strSeriesnm = fbDocument.get("strSeriesnm");
    }catch(error){
        RESULT_DATA.RESULT_CODE = 100;
        RESULT_DATA.RESULT_MSG = error as string;
        return RESULT_DATA;
    }

    fbDocument = await getDoc(doc(firebaseDB, "LicenseContent", code));
    if(!fbDocument.exists()){
        RESULT_DATA.RESULT_CODE = 100;
        RESULT_DATA.RESULT_MSG = "No Such Database";
        return RESULT_DATA;
    }

    try{
        resultData.content = fbDocument.get("content");
        resultData.schedule = fbDocument.get("schedule");
        RESULT_DATA.RESULT_DATA = resultData;
    }catch(error){
        RESULT_DATA.RESULT_CODE = 100;
        RESULT_DATA.RESULT_MSG = error as string;
        return RESULT_DATA;
    }

    return RESULT_DATA;
}

export const getLicenseListAll = async () => {
    const RESULT_DATA: API_DATA = {
        RESULT_CODE: 0,
        RESULT_MSG: "Ready",
        RESULT_DATA: {}
    }

    const fbDocument = await getDocs(collection(firebaseDB, "License"));
    if(fbDocument.empty){
        RESULT_DATA.RESULT_CODE = 100;
        RESULT_DATA.RESULT_MSG = "No Such Database";
        return RESULT_DATA;
    }

    try{
        let listLicense: Array<LICENSE_LIST_DATA> = [];

        fbDocument.forEach((curDoc) => {
            let tmpData = {
                strGualgbcd: curDoc.get("strGualgbcd"),
                strGualgbnm: curDoc.get("strGualgbnm"),
                strJmfldnm: curDoc.get("strJmfldnm"),
                strMdobligfldcd: curDoc.get("strMdobligfldcd"),
                strMdobligfldnm: curDoc.get("strMdobligfldnm"),
                strObligfldcd: curDoc.get("strObligfldcd"),
                strObligfldnm: curDoc.get("strObligfldnm"),
                strSeriescd: curDoc.get("strSeriescd"),
                strSeriesnm: curDoc.get("strSeriesnm")
            }
            listLicense.push(tmpData);
        });

        RESULT_DATA.RESULT_CODE = 200;
        RESULT_DATA.RESULT_MSG = "Success";
        RESULT_DATA.RESULT_DATA = {data: listLicense};
    }catch(error){
        RESULT_DATA.RESULT_CODE = 100;
        RESULT_DATA.RESULT_MSG = error as string;
    }

    return RESULT_DATA
}

export const getLicenseListByCode = async (code: string) => {
    const RESULT_DATA: API_DATA = {
        RESULT_CODE: 0,
        RESULT_MSG: "Ready",
        RESULT_DATA: {}
    }

    const fbDocument = await getDocs(collection(firebaseDB, "License"));
    if(fbDocument.empty){
        RESULT_DATA.RESULT_CODE = 100;
        RESULT_DATA.RESULT_MSG = "No Such Database";
        return RESULT_DATA;
    }

    try{
        let listLicense: Array<LICENSE_LIST_DATA> = [];

        fbDocument.forEach((curDoc) => {
            if(curDoc.get("strObligfldcd") == code){
                let tmpData = {
                    strGualgbcd: curDoc.get("strGualgbcd"),
                    strGualgbnm: curDoc.get("strGualgbnm"),
                    strJmfldnm: curDoc.get("strJmfldnm"),
                    strMdobligfldcd: curDoc.get("strMdobligfldcd"),
                    strMdobligfldnm: curDoc.get("strMdobligfldnm"),
                    strObligfldcd: curDoc.get("strObligfldcd"),
                    strObligfldnm: curDoc.get("strObligfldnm"),
                    strSeriescd: curDoc.get("strSeriescd"),
                    strSeriesnm: curDoc.get("strSeriesnm")
                }
                listLicense.push(tmpData);
            }
        });

        RESULT_DATA.RESULT_CODE = 200;
        RESULT_DATA.RESULT_MSG = "Success";
        RESULT_DATA.RESULT_DATA = {data: listLicense};
    }catch(error){
        RESULT_DATA.RESULT_CODE = 100;
        RESULT_DATA.RESULT_MSG = error as string;
    }

    return RESULT_DATA
}

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

        RESULT_DATA.RESULT_CODE = 200;
        RESULT_DATA.RESULT_MSG = "Success";
        RESULT_DATA.RESULT_DATA = {data: listBook};
    }catch(error){
        RESULT_DATA.RESULT_CODE = 100;
        RESULT_DATA.RESULT_MSG = error as string;
    }

    return RESULT_DATA;
}

export const getUserData = async (uid: string) => {
    const RESULT_DATA: API_DATA = {
        RESULT_CODE: 0,
        RESULT_MSG: "Ready",
        RESULT_DATA: {}
    }

    return RESULT_DATA;
}

export const registerUser = async (uid: string, userData: USER_DATA) => {
    const RESULT_DATA: API_DATA = {
        RESULT_CODE: 0,
        RESULT_MSG: "Ready",
        RESULT_DATA: {}
    }

    return RESULT_DATA;
}

export const verifyUser = async (token: string) => {
    const RESULT_DATA: API_DATA = {
        RESULT_CODE: 0,
        RESULT_MSG: "Ready",
        RESULT_DATA: {}
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