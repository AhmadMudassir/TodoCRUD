const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'You must have a title'],
        unique: true
    },
    subtitle: {
        type: String,
        required: [true, ' You must give Subtitle']
    },
    checkBox: {
        type: Boolean,
        default: false
    },


})

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo;