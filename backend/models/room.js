const mongoose = require('mongoose');

const reservationSchema = require('./reservation').schema;

const roomSchema = new mongoose.Schema({
	name: String,
	capacity: Number,
	isAvailable: Boolean,
	location: String,
	reservation: {
		required: false,
		type: reservationSchema,
	},
});
const Room = mongoose.model('Room', roomSchema);

module.exports.model = Room;
module.exports.schema = roomSchema;