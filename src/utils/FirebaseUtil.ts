import { collection, doc, Firestore, getDoc, getDocs, getFirestore, orderBy, query, where, setDoc} from "@firebase/firestore";
import { FirebaseApp, FirebaseOptions, initializeApp } from "@firebase/app";

import { API_DATA, BOOK_DATA, LICENSE_LIST_DATA, RANK_BRANCH_DATA, RANK_UNIT_DATA, RANK_USER_DATA, USER_DATA } from "@/utils/DataClass"
import { initFirebaseAuth, verifyToken } from "@/utils/AuthUtil";

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
    if(firebaseApp === undefined || firebaseDB === undefined){
        firebaseApp = initializeApp(firebaseConfig);
        firebaseDB = getFirestore(firebaseApp);
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

export const getRankFromUnit = async (unit: string) => {
    const RESULT_DATA: API_DATA = {
        RESULT_CODE: 0,
        RESULT_MSG: "Ready",
        RESULT_DATA: {}
    }

    const fbDocument = await getDocs(query(collection(firebaseDB, "User"), where("unit", "==", unit), orderBy("mp", "desc")));
    if(fbDocument.empty){
        RESULT_DATA.RESULT_CODE = 100;
        RESULT_DATA.RESULT_MSG = "No Such Database";
        return RESULT_DATA;
    }

    try{
        let listUser: Array<RANK_USER_DATA> = [];

        fbDocument.forEach((curDoc) => {
            listUser.push({
                name: curDoc.get("name"),
                mp: curDoc.get("mp")
            });
        });

        RESULT_DATA.RESULT_CODE = 200;
        RESULT_DATA.RESULT_MSG = "Success";
        RESULT_DATA.RESULT_DATA = {data: listUser};
    }catch(error){
        RESULT_DATA.RESULT_CODE = 100;
        RESULT_DATA.RESULT_MSG = error as string;
    }

    return RESULT_DATA
}

export const getRankByBranch = async () => {
    const RESULT_DATA: API_DATA = {
        RESULT_CODE: 0,
        RESULT_MSG: "Ready",
        RESULT_DATA: {}
    }

    const fbDocument = await getDocs(collection(firebaseDB, "Unit"));
    if(fbDocument.empty){
        RESULT_DATA.RESULT_CODE = 100;
        RESULT_DATA.RESULT_MSG = "No Such Database";
        return RESULT_DATA;
    }

    try{
        let listBranch: Array<RANK_BRANCH_DATA> = []

        let idx = 0;
        fbDocument.forEach((curDoc) => {
            listBranch.push({name: curDoc.id.toString(), mp: 0});

            let tmpList = curDoc.get("list");
            tmpList.forEach((curUnit: RANK_BRANCH_DATA) => {
                listBranch[idx].mp += curUnit.mp;
            })
            idx++;
        });

        listBranch.sort((unitA, unitB) => {
            if(unitA.mp == unitB.mp){
                if(unitA.name > unitB.name){
                    return 1;
                }else{
                    return -1;
                }
            }
            return unitB.mp - unitA.mp;
        });

        RESULT_DATA.RESULT_CODE = 200;
        RESULT_DATA.RESULT_MSG = "Success";
        RESULT_DATA.RESULT_DATA = {data: listBranch};
    }catch(error){
        RESULT_DATA.RESULT_CODE = 100;
        RESULT_DATA.RESULT_MSG = error as string;
    }

    return RESULT_DATA
}

export const getRankByUnit = async () => {
    const RESULT_DATA: API_DATA = {
        RESULT_CODE: 0,
        RESULT_MSG: "Ready",
        RESULT_DATA: {}
    }
    
    const fbDocument = await getDocs(collection(firebaseDB, "Unit"));
    if(fbDocument.empty){
        RESULT_DATA.RESULT_CODE = 100;
        RESULT_DATA.RESULT_MSG = "No Such Database";
        return RESULT_DATA;
    }

    try{
        let listUnit: Array<RANK_UNIT_DATA> = []

        fbDocument.forEach((curDoc) => {
            let tmpList = curDoc.get("list");
            tmpList.forEach((curUnit: RANK_UNIT_DATA) => {
                listUnit.push({
                    name: curUnit.name,
                    mp: curUnit.mp
                });
            })
        });

        listUnit.sort((unitA, unitB) => {
            if(unitA.mp == unitB.mp){
                if(unitA.name > unitB.name){
                    return 1;
                }else{
                    return -1;
                }
            }
            return unitB.mp - unitA.mp;
        });

        RESULT_DATA.RESULT_CODE = 200;
        RESULT_DATA.RESULT_MSG = "Success";
        RESULT_DATA.RESULT_DATA = {data: listUnit};
    }catch(error){
        RESULT_DATA.RESULT_CODE = 100;
        RESULT_DATA.RESULT_MSG = error as string;
    }

    return RESULT_DATA
}

export const getUserData = async (uid: string) => {
    return getFirebaseDB("User", uid);
}

export const registerUser = async (uid: string, userData: USER_DATA) => {
    setFirebaseDB("User", uid, userData);

    return getUserData(uid);
}

export const verifyUser = async (token: string) => {
    const RESULT_DATA: API_DATA = {
        RESULT_CODE: 0,
        RESULT_MSG: "Ready",
        RESULT_DATA: {}
    }
    
    initFirebaseAuth();
    let uid = verifyToken(token);
    if(uid == -1){
        RESULT_DATA.RESULT_CODE = 100;
        RESULT_DATA.RESULT_MSG = "No Such User";
        return RESULT_DATA;
    }

    return getUserData(uid.toString());
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

const setFirebaseDB = async (collectionID: string, documentID: string, userData: USER_DATA) => {
    const RESULT_DATA: API_DATA = {
        RESULT_CODE: 0,
        RESULT_MSG: "Ready",
        RESULT_DATA: {}
    }

    const fbDocument = doc(firebaseDB, collectionID, documentID);

    try{
        RESULT_DATA.RESULT_CODE = 200;
        RESULT_DATA.RESULT_MSG = "Success";

        await setDoc(fbDocument, userData);
    }catch(error){
        RESULT_DATA.RESULT_CODE = 100;
        RESULT_DATA.RESULT_MSG = error as string;
    }

    return RESULT_DATA;
};