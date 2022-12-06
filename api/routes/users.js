import express from "express";
import { createUser, deleteUser, getUser, getUsers, updateUser } from "../controllers/User.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();


//esempio controllo token
/*router.get("/checkauthentication", verifyToken, (req, res, next)=>{
    res.send("Ciao, ora sei loggato");
})

router.get("/checkuser/:id", verifyUser, (req, res, next)=>{
    res.send("Ciao, ora sei loggato e puoi cancellare il tuo account");
})

router.get("/checkadmin/:id", verifyAdmin, (req, res, next)=>{
    res.send("Ciao admin puoi cancellare tutti gli account");
})*/

//CREATE
router.post("/", verifyUser, createUser);
//UPDATE
router.put("/:id", verifyUser, updateUser);
//DELETE
router.delete("/:id", deleteUser);
//GET
router.get("/:id", verifyUser, getUser);
//GET ALL
router.get("/", verifyAdmin, getUsers);


export default router 