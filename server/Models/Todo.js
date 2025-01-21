const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    task: String,
    isCompleted: {
        type: Boolean,
        default: false
    }

})

const TodoModel = mongoose.model('Todos', todoSchema);

module.exports = TodoModel;