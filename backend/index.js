import express, { response } from "express";
import { PORT, mongourl } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import { Book } from "./models/bookmodel.js";
import cors from "cors";

//express
const app = express();
// const cors = require('cors');
app.use(express.json());
//CORS Policy 
app.use(cors())
// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
// }))
app.get('/', (req, res) => {
    console.log(req)
    return response.status(200).send("Welcome to MERN stack Project")
});

app.use('/books', booksRoute)



//Route to save a new book

//Mongoose
mongoose
    .connect(mongourl)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });