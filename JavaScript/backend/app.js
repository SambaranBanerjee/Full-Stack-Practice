import express from 'express';
import { join } from 'path';

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const fullPath = join("C:/Users/samba/Documents/Git_Personal/Full-Stack-Practice",'JavaScript', 'frontend' , 'index.html');
    console.log(join("C:/Users/samba/Documents/Git_Personal/Full-Stack-Practice",'JavaScript', 'frontend', 'index.html'));
    res.sendFile(fullPath);
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
})