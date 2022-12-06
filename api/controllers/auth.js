import User from "../models/User.js";
import { createError } from "../utils/error.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

export const register = async (req, res, next) => {
    try {

        //cripto la password con la libreria bcrypt installata con npm add bcryptjs
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
        })
        await newUser.save();
        res.status(201).send("Utente creato")
    } catch (error) {
        next(error);
    }
}

export const login = async (req, res, next) => {
    try {

        const user = await User.findOne({username:req.body.username});
        if(!user) return next(createError(404, "Utente non trovato"));

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);

        if(!isPasswordCorrect) return next(createError(404, "Password o username errato"));

        //se l'utente è loggato creo un cookie con jsonwebtoken la seconda è una chiave segreta  (ho installato anche cookieparser)
        const token = jwt.sign({id:user.id, isAdmin: user.isAdmin}, process.env.JWT)

        //ottengo la password, isadmin dall utente separatamente dal resto dei dati (la uso per mostrare tutti i dati tranne quei 2 dati sensibili)
        const {password, isAdmin, ...otherDetails} = user._doc;

        res.cookie("access_token", token, {httpOnly:true,}).status(201).json({...otherDetails})
    } catch (error) {
        next(error);
    }
}