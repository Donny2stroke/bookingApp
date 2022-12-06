import User from "../models/User.js";
import { createError } from "../utils/error.js";

export const createUser = async (req, res, next) => {
    const newUser = new User(req.body);
    try {
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (error) {
        //res.status(500).json(error);
        next(error);
    }
}

export const updateUser = async (req, res, next) => {
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true});  //new:true serve per restituire il record aggiornato e non il precedente
        res.status(200).json(updateUser);
    } catch (error) {
        //res.status(500).json(error);
        next(error);
    }
}

export const deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User cancellato correttamente");
    } catch (error) {
        //res.status(500).json(error);
        next(error);
    }
}

export const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user);
    } catch (error) {
        //res.status(500).json(error);
        next(error);
    }
}

export const getUsers = async (req, res, next) => {
    try {
        const user = await User.find();
        res.status(200).json(user);
    } catch (error) {
        next(error);
        //next(createError(401, "Non sei autenticato")); //errore costruito custom
    }
}