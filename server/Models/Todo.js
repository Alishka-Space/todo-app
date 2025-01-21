const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    task: {
        type: String,
        done: Boolean
    }
})

const TodoModel = mongoose.model('Todos', todoSchema);

module.exports = TodoModel;