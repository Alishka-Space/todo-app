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

app.get('/get', (req,res) =>{
    TodoModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
} )

app.post('/add', (req, res) => {
    const task = req.body.task;
    TodoModel.create({ 
        task: task 
    }).then(result => res.json(result))
    .catch(err => res.json(err))
    

})

app.put('/update/:id', (req, res) => {
    const {id} = req.params;
    TodoModel.findByIdAndUpdate({_id: id}, { isCompleted: true })
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.delete('/delete/:id', (req, res) => {
    const {id} = req.params;
    TodoModel.findByIdAndDelete({_id: id})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

const path = require('path');

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});