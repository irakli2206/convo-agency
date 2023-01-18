import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut as firebaseSignOut } from "firebase/auth";
import { auth } from "../firebase";



export const createUser = async (email: string, password: string) => {
    await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode, errorMessage)
        });

}

export const logIn = async (email: string, password: string) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)

        if (!userCredential) throw new Error('Error trying to log in')

        const user = userCredential.user;
        const token = await user.getIdToken()
        localStorage.setItem('token', token)
        localStorage.setItem('userEmail', user.email!)
    } catch (error: any) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage)
    }

}

export const signOut = async () => {
    localStorage.clear()
    await firebaseSignOut(auth).then(() => {
        console.log('signed out')

        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}

