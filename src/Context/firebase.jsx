import { createContext, useContext} from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection,  } from "firebase/firestore";
import { getStorage, ref,getDownloadURL, } from "firebase/storage";

const FirebaseContext = createContext(null);

const firebaseConfig = {
    apiKey: "AIzaSyCe2OR-xOzLeOcUf2v1fXZB4zJoNbzD35E",
    authDomain: "skillshareindia-admin.firebaseapp.com",
    projectId: "skillshareindia-admin",
    storageBucket: "skillshareindia-admin.appspot.com",
    messagingSenderId: "343570437474",
    appId: "1:343570437474:web:f631609587cc30b6b0c83b"
};

const FirebaseApp = initializeApp(firebaseConfig);
const FireStore = getFirestore(FirebaseApp);
const storage = getStorage(FirebaseApp);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {

    const getImageURL = async (path) => {
        try {
            return await getDownloadURL(ref(storage, path));
        } catch (error) {
            console.error('Error in getImageURL: ', error);
        }
    };

    const getArticles = async () => {
        try {
            const schoolsInfo = getDocs(collection(FireStore, "school"));
            console.log("schooolfinnnfo", schoolsInfo)
            return await schoolsInfo
        } catch (error) {
            console.error("Error in getArticles: ", error);
        }
    };

    const getStudentsBySchool = async (schoolName) => {
        try {
            // Get a reference to the 'school' collection and apply a filter for the school name
            const studentsCollectionRef = collection(FireStore, "school");
            const querySnapshot = await getDocs(studentsCollectionRef);
    
            // Filter students whose school name matches the provided schoolName
            const students = querySnapshot.docs
                .map((doc) => ({ id: doc.id, ...doc.data() }))
                .filter((student) => student.school === schoolName);
    
            return students;
        } catch (error) {
            console.error("Error fetching students by school:", error);
            return [];
        }
    };


    return (
        <FirebaseContext.Provider
            value={{
                getArticles,
                getStudentsBySchool,
                getImageURL,
            }}
        >
            {props.children}
        </FirebaseContext.Provider>
    );
};
