import express from 'express';

const app = express();
const port = 3000;

app.get("/", (req,res) => {
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