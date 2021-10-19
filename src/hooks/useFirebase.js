import {
    getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged,
    createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile 
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializitionFirebase from "../firebase/firebase.init";

initializitionFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState("")
    const [isLoading, setLoading] = useState(true)
    const auth = getAuth();

    // google sign in 
    const signInUsingGoogle = () => {
        setLoading(true);
        const googlePovider = new GoogleAuthProvider();
        return signInWithPopup(auth, googlePovider)
            .then((result) => {
                console.log(result?.user);
                setUser(result?.user);
                setLoading(false);
            }).finally(() => {
                setLoading(false);
            })
    }

    // ***************By email Register in************* 
    const registration = (email, password, name) => {
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password)
       
            .then(() => {
                updateProfile(auth.currentUser, {displayName: name})
                  .catch(error => {
                    setError(error.massage)
                  })
                  setLoading(false);
            })
            .catch((error) => {
                setError(error.massage)
                // ..
            }).finally(() => {
                setLoading(false);
            })
    }

    //*********************By email Log In*************/
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                console.log(result?.user);
                // setUser(result?.user);
                // ...
                
            })
            .catch((error) => {
                setError(error.massage)
            }).finally(() => {
                setLoading(false);
            })
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth).then(() => {
            // Sign-out successful.
            setUser({})
            setLoading(false);
        }).catch((error) => {
            setError(error.massage);
        }).finally(() => {
            setLoading(false);
        })

    }

    //*********User State Observer**********
    useEffect(() => {
        return onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                setUser(user)
                // ...
            } else {
                setUser({})
            }
            setLoading(false);
        })
    }, [])
    return {
        signInUsingGoogle,
        user,
        logOut,
        registration,
        logIn,
        error,
        isLoading
    }
}
export default useFirebase;