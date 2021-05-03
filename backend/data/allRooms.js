// Processes allTables JSON file into Mongo table objects

const mongoose = require('mongoose');
const Room = require('../models/room').model;
const fs = require('fs');

const roomData = fs.readFileSync(__dirname + '/allRooms.json');
roomData = JSON.parse(roomData).rooms;

const allRooms = [];
roomData.forEach((room) => {
	allRooms.push(new Room(room));
});

module.exports = allRooms;
