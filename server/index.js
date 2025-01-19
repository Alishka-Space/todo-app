const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());



app.post('/add', (req, res) => {
    const task = req.body.task;
    console.log(task);

})


app.listen(5000, () => {
    console.log('Server is running on port 5000');
})