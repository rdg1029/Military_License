import { credential } from "firebase-admin";
import { initializeApp } from 'firebase-admin/app';
import { getAuth } from "firebase-admin/auth";

export const initFirebaseAuth = () => {
    let serviceAccount = require("firebase-admin-account.json");
    // let serviceAccount = require("D:\\Projects\\Web\\ECOmunity-BE\\firebase-admin-account.json");
    initializeApp({
        credential: credential.cert(serviceAccount)
    });
}

export const verifyToken = (strToken: string): string | number => {
    getAuth()
        .verifyIdToken(strToken)
        .then((decodedToken) => {
            return decodedToken.uid;
        })
        .catch((error) => {
            console.log(error);
        });
    return -1;
}