// server/index.js
const express = require('express');
const app = express();
const port = 5000; // Port for the backend server

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
