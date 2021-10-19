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
        setError("");
        const googlePovider = new GoogleAuthProvider();
        return signInWithPopup(auth, googlePovider)
            .then((result) => {
                console.log(result?.user);
                setUser(result?.user);
                setLoading(false);
            }).catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    // ***************By email Register in************* 
    const registration = (email, password, name) => {
        setLoading(true);
        setError("");
        return createUserWithEmailAndPassword(auth, email, password)

            .then(() => {
                setUser({});
                updateProfile(auth.currentUser, { displayName: name })
                    .catch(error => {
                        setError(error.massage)
                    });
                logOut();
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
        setError("");
        return signInWithEmailAndPassword(auth, email, password)
            .catch((error) => {
                setError(error.massage)
            }).finally(() => {
                setLoading(false);
            })
    }

    const logOut = () => {
        setLoading(true);
        setError("");
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

                setUser(user)

            } else {
                setUser({})
            }
            setLoading(false);
        })
    }, [auth]);

    useEffect(() => {
        if (error === "Firebase: Error (auth/user-not-found).") {
            setError("There is no account with this Email");
        }
        if (error === "Firebase: Error (auth/email-already-in-use).") {
            setError("This email already have an account.");
        }
        if (error === "Firebase: Error (auth/wrong-password).") {
            setError("You have entered wrong Password.");
        }
    }, [error]);
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