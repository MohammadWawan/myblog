import {initializeApp} from "firebase/app";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyCatssL16IgD8a3e0XkNjEF2IEkQ9z2N78",
    authDomain: "myblog0910-f6ec1.firebaseapp.com",
    projectId: "myblog0910-f6ec1",
    storageBucket: "myblog0910-f6ec1.appspot.com",
    messagingSenderId: "671745817758",
    appId: "1:671745817758:web:ae3472bdf8f727d6134f8f"
};

export const app=initializeApp(firebaseConfig);
export const storage=getStorage(app);


