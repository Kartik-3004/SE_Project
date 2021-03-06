dotenv = require('dotenv').config();

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const DB = process.env.MONGO_URL;

//MongoDB
mongoose
	.connect(DB, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
	})
	.then(() => {
		console.log('Connection Successful');
	})
	.catch((err) => console.log(err));

const db = mongoose.connection;

const app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Routes
app.use('/reserve', require('./routes/reservationRoute'));
app.use('/availability', require('./routes/availabilityRoute'));
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', (_) => {
	console.log('Connected to DB');
});

module.exports = app;
