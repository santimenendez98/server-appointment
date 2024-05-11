import User from "../schema/user.js";
import {authFirebase} from "../auth/index.cjs";
import { createUserWithEmailAndPassword } from "firebase/auth";

const createUsers = async (req, res) => {
    const { name, lastName, email, dni } = req.body;
    let firebaseUid;
    let date = new Date();

    try {
        const newUserCredential = await createUserWithEmailAndPassword(
            authFirebase,
            email,
            req.body.password
        );
        
        firebaseUid = newUserCredential.user.uid;

        const user = new User({
            firebaseUid,
            name,
            lastName,
            dni,
            email,
            date
        });
        
        const userSaved = await user.save();

        return res.status(201).json({
            message: 'User created',
            data: userSaved,
            error: false,
        });
    } catch (error) {
        return res.status(500).json({
            message: 'An error occurred!',
            error: error.message,
        });
    }
};

const getAllUser = (req, res) => {
    User.find()
      .then((user) =>
        res.status(200).json({
          message: "All Users",
          data: user,
          error: false,
        })
      )
      .catch((error) =>
        res.status(400).json({
          message: error,
          error: true,
        })
      );
  };

const userRequest = {
    createUsers,
    getAllUser
};

export default userRequest;
