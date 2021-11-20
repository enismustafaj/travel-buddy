// app.js
const express = require("express")
const triproutes = require('./routes/post')
var app = express();

const mongoose = require('mongoose');
const Trips = require('./models/trip')

var mongoDB = 'mongodb+srv://travelbuddy:Water123@cluster0.ffjo9.mongodb.net/local_library?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000))
    .catch((error) => console.log(error));
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//trip routes middleware
app.use(triproutes)

//404 page
app.use((req, res) => {
    res.status(404).render('404 page', { title: '404' })
})

module.exports = app