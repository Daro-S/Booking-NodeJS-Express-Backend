import express from "express"
import { createUser, deleteUser, getSpecificUser, updateUser, getUsers } from "../controller/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req,res,next)=>{
//     res.send("You are authenticated")
// })

// router.get("/checkuser/:id",verifyUser, (req,res,next)=>{
//     res.send("Hello user, you are logged in and you can delete your account ")
// })

// router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
//     res.send("Hello admin, you are logged in and you can delete all accounts ")
// })



//create
router.post("/add",verifyUser, createUser);
//update
router.put("/update/:id",verifyUser, updateUser);

//delete
router.delete("/delete/:id",verifyUser, deleteUser);

//Get by id
router.get("/find/:id",verifyAdmin, getSpecificUser);

//Get all
router.get("/all",verifyAdmin, getUsers);
export default router