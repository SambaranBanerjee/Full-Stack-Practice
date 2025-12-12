import express from 'express';
import { join } from 'path';
import dotenv from 'dotenv';
import posts from './routes/posts.js';

const app = express();

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

dotenv.config();
const port = process.env.PORT || 3000;
const dirPath = "C:/Users/samba/Documents/Git_Personal/Full-Stack-Practice";

app.get("/", (req, res) => {
    const fullPath = join(dirPath,'JavaScript', 'frontend' , 'index.html');
    console.log(join(dirPath,'JavaScript', 'frontend', 'index.html'));
    res.status(200).sendFile(fullPath);
})

app.use('/posts', posts);

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