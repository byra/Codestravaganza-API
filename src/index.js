const express = require("express");
const logger = require('morgan');
const mongoose = require('mongoose');

const receiptRouter = require('./routes/receipts');
const dbURL = require("./configurations/essentials").dbURL;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(function (req,res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});
app.use("/receipt", receiptRouter);

mongoose.Promise = global.Promise;
mongoose.connect(dbURL)
    .then(() => {
        console.log("Successfully connected to the database");
    }).catch(err => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});



app.listen(8282);
