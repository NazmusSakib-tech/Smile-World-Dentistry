import {
    getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged,
    createUserWithEmailAndPassword, signInWithEmailAndPassword
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializitionFirebase from "../firebase/firebase.init";

initializitionFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState(" ")
    const auth = getAuth();

    // google sign in 
    const signInUsingGoogle = () => {
        const googlePovider = new GoogleAuthProvider();
        return signInWithPopup(auth, googlePovider)
            .then((result) => {
                console.log(result?.user);
                setUser(result?.user);

            })
    }

    // ***************By email Register in************* 
    const registration = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed UP
                console.log(result?.user);
                // setUser(result?.user);
                // ...
            })
            .catch((error) => {
                setError(error.massage)
                // ..
            });
    }

    //*********************By email Log In*************/
    const logIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                console.log(result?.user);
                // setUser(result?.user);
                // ...
            })
            .catch((error) => {
               setError(error.massage);
            });
    }

    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({})
        }).catch((error) => {
            // An error happened.
        });

    }

    //*********User State Observer**********
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                setUser(user)
                // ...
            } else {
                setUser({})
            }
        })
    }, [])
    return {
        signInUsingGoogle,
        user,
        logOut,
        registration,
        logIn
    }
}
export default useFirebase;