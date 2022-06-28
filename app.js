const express = require('express')
const morgan = require('morgan')

const todoRouter = require('./routes/todoRouter')

const app = express()

app.use(morgan('dev'))

app.use(express.json())

// app.use((req,res,next) => {
//     req.requestTime= new Date().toISOString();
//     next();
// })

app.use('/todos', todoRouter);

module.exports = app;
