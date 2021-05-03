const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Day = require('../models/day').model;

// Parameters:
// {
//   "date": String ("Dec 02 2019 06:00")
// }

router.post('/', function (req, res, next) {
	console.log('request attempted');

	console.log(req.body);
	const dateTime = new Date(req.body.date);

	Day.find({ date: dateTime }, (err, docs) => {
		if (!err) {
			if (docs.length > 0) {
				// Record already exists
				console.log('Record exists. Sent docs.');
				res.status(200).send(docs[0]);
			} else {
				// Searched date does not exist and we need to create it
				const allRooms = require('../data/allRooms');
				const day = new Day({
					date: dateTime,
					Rooms: allRooms,
				});
				day.save((err) => {
					if (err) {
						res.status(400).send('Error saving new date');
					} else {
						// Saved date and need to return all tables (because all are now available)
						console.log(
							'Created new datetime. Here are the default docs'
						);
						Day.find({ date: dateTime }, (err, docs) => {
							err
								? res.sendStatus(400)
								: res.status(200).send(docs[0]);
						});
					}
				});
			}
		} else {
			res.status(400).send('Could not search for date');
		}
	});
});

module.exports = router;
