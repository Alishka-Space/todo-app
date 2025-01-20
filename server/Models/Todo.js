const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    }
})

const TodoModel = mongoose.model('Todos', todoSchema);

module.exports = TodoModel;