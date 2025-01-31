const express = require('express');
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("HOME");
}); 

app.listen(PORT, (req, res) => {
    console.log("Server starts on port "+PORT);
})