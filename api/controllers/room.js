import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";
import {createError} from "../utils/error.js";

export const createRoom = async (req, res, next) =>{
    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body);

    try {
        const savedRoom = await newRoom.save();
        try{
            await Hotel.findByIdAndUpdate(hotelId, {
                $push: {rooms: savedRoom._id}
            });
        }catch(err){
            next(err);
        }
        res.status(200).json(savedRoom);
    }catch(err){
        next(err)
    }
}


export const updateRoom = async (req, res, next) => {
    try {
        const updateRoom= await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true});  //new:true serve per restituire il record aggiornato e non il precedente
        res.status(200).json(updateRoom);
    } catch (error) {
        //res.status(500).json(error);
        next(error);
    }
}

export const deleteRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid;
    try {
        await Room.findByIdAndDelete(req.params.id)
        try{
            await Hotel.findByIdAndUpdate(hotelId, {
                $pull: {rooms: req.params.id}
            });
        }catch(err){
            next(err);
        }
        res.status(200).json("Stanza cancellata correttamente");
    } catch (error) {
        //res.status(500).json(error);
        next(error);
    }
}

export const getRoom = async (req, res, next) => {
    try {
        const room = await Room.findById(req.params.id)
        res.status(200).json(room);
    } catch (error) {
        //res.status(500).json(error);
        next(error);
    }
}

export const getRooms = async (req, res, next) => {
    try {
        const rooms = await Room.find();
        res.status(200).json(rooms);
    } catch (error) {
        next(error);
        //next(createError(401, "Non sei autenticato")); //errore costruito custom
    }
}