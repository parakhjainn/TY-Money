const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://parakhj:i5Rw1cMwwCxrqORo@cluster0.zqc1kib.mongodb.net/ty-money' , {useNewUrlParser : true , useUnifiedTopology : true})

const connection = mongoose.connection

connection.on('error', err => console.log(err))

connection.on('connected' , () => console.log('Mongo DB Connection Successfull'))