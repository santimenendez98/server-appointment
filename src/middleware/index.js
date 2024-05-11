import {authAdmin} from "../auth/index.cjs";

const verifyToken = async (req, res, next) => {
    const { token } = req.headers;
    if (!token) {
        return res.status(400).json({
            message: 'Provide a Token',
            data: undefined,
            error: true,
        });
    }
    try {
        const decodedToken = await authAdmin.verifyIdToken(token);
        req.headers.firebaseUid = decodedToken.user_id;
        return next();
    } catch (error) {
        console.log(error)
        return res.status(401).json({
            message: 'Invalid Token',
            data: undefined,
            error: error,
        });
    }
};

export default verifyToken;
