const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    task: {
        type: String,
        done: {
            type: Boolean,
            default: false
        }
    }
})

const TodoModel = mongoose.model('Todos', todoSchema);

module.exports = TodoModel;