import { signInWithEmailAndPassword, getIdToken } from "firebase/auth";
import {authFirebase} from "../auth/index.cjs"

const logIn = async (req, res) => {
    const { email, password } = req.body;
    
    try {
        const userCredential = await signInWithEmailAndPassword(
            authFirebase,
            email,
            password
        );
    
        const user = userCredential.user
        const token = await user.getIdToken()

        return res.status(200).json({
            message: 'Login successful',
            token: token,
            error: false,
        });
    } catch (error) {
        return res.status(500).json({
            message: 'An error occurred!',
            error: error.message,
        });
    }
};

const logInRequest = {
    logIn
};

export default logInRequest;