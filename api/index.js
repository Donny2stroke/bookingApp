import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js";
import hotelsRoutes from "./routes/hotels.js";
import roomsRoutes from "./routes/rooms.js";
import usersRoutes from "./routes/users.js";

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
app.use("/api/auth", authRoutes);
app.use("/api/hotels", hotelsRoutes);
app.use("/api/rooms", roomsRoutes);
app.use("/api/users", usersRoutes);


app.listen(8800, () =>{
    connect();
    console.log("Connect!");
})


