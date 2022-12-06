import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js";
import hotelsRoutes from "./routes/hotels.js";
import roomsRoutes from "./routes/rooms.js";
import usersRoutes from "./routes/users.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connesso al db")
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", () =>{
    console.log("Database disconnesso")
})

//middlewares
app.use(cookieParser()); //abilita cookieparser
app.use(express.json()); //consente di accettare json
app.use("/api/auth", authRoutes);
app.use("/api/hotels", hotelsRoutes);
app.use("/api/rooms", roomsRoutes);
app.use("/api/users", usersRoutes);

//middleware per gestione degli errore
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.errorMessage || "Qualcosa è andato storto";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});


app.listen(8800, () =>{
    connect();
    console.log("Connect!");
})
