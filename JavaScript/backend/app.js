import express from 'express';
import path, { join } from 'path';
import dotenv from 'dotenv';

const app = express();
dotenv.config();
const port = process.env.PORT || 3000;
console.log(process.env.PORT);

app.get("/", (req, res) => {
    const fullPath = join("C:/Users/samba/Documents/Git_Personal/Full-Stack-Practice",'JavaScript', 'frontend' , 'index.html');
    console.log(join("C:/Users/samba/Documents/Git_Personal/Full-Stack-Practice",'JavaScript', 'frontend', 'index.html'));
    res.sendFile(fullPath);
})

app.get("/posts", (req,res) => {
    res.sendFile(join("C:/Users/samba/Documents/Git_Personal/Full-Stack-Practice", "JavaScript", "backend", "data.json"));
})

app.get("/posts/:id", (req, res) => {
    console.log(req.params);
    res.sendFile(join("C:/Users/samba/Documents/Git_Personal/Full-Stack-Practice", "JavaScript", "backend", "data.json"));
})

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