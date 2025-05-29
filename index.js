const express = require('express');
const app = express();
const port = 3000;

app.get('/time', (req, res) => {
    const currentTime = new Date().toISOString();
    res.send(`The current time right now is ${currentTime}`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});