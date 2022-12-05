import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";

export const createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body);
    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    } catch (error) {
        //res.status(500).json(error);
        next(error);
    }
}

export const updateHotel = async (req, res, next) => {
    try {
        const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true});  //new:true serve per restituire il record aggiornato e non il precedente
        res.status(200).json(updateHotel);
    } catch (error) {
        //res.status(500).json(error);
        next(error);
    }
}

export const deleteHotel = async (req, res, next) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel cancellato correttamente");
    } catch (error) {
        //res.status(500).json(error);
        next(error);
    }
}

export const getHotel = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel);
    } catch (error) {
        //res.status(500).json(error);
        next(error);
    }
}

export const getHotels = async (req, res, next) => {
    try {
        const hotels = await Hotel.find();
        res.status(200).json(hotels);
    } catch (error) {
        next(error);
        //next(createError(401, "Non sei autenticato")); //errore costruito custom
    }
}