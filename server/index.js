const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const TodoModel = require('./Models/Todo');
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.REACT_APP_MONGO_URI)
// mongoose.connect('mongodb+srv://aliibrahimwork:JB272H6GHfO8TpzC@cluster0.5rpiq.mongodb.net/')



app.post('/add', (req, res) => {
    const task = req.body.task;
    TodoModel.create({ 
        task: task 
    }).then(result => res.json(result))
    .catch(err => res.json(err))
    

})


app.listen(5000, () => {
    console.log('Server is running on port 5000');
})