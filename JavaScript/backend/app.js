import express from 'express';
import { join } from 'path';
import dotenv from 'dotenv';
import posts from './routes/posts.js';
import logger from './middleware/logger.js';
import errorHandler from './middleware/error.js';
import cors from 'cors';

const app = express();

//Body parser middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(logger);

//For using .env variables
dotenv.config();

//Declaring port and file path
const port = process.env.PORT || 8080;
//const dirPath = "C:/Users/samba/Documents/Git_Personal/Full-Stack-Practice";

app.get("/", (req, res) => {
    res.status(200).send("This is the initial backend")
})

//Routes
app.use('/posts', posts);

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
})

//Error Handling
app.use(errorHandler);

app.get("/health", (req,res) => {
    try {
        res.send("The server says hello!");
        console.log("Successfully entered the server.");
    }
    catch (err) {
        res.send("Faced an error", err);
        console.error("Faced an error: ", err);
    }
})

app.listen(port, () => {
    console.log(`The server is listening on PORT ${port}`);
}).on("error", (error) => {
    console.log('Server failed to execute', error);
    process.exit(1);
})