// Processes allRooms JSON file into Mongo table objects

var mongoose = require("mongoose");
const Room = require("../models/room").model;
const fs = require("fs");

let roomData = fs.readFileSync(__dirname + "/allrooms.json");
roomData = JSON.parse(roomData).tables;

let allRooms = [];
roomData.forEach(room => {
  allRooms.push(new Room(room));
});

module.exports = allRooms;