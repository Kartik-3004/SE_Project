// Randomly generate a fake allRooms JSON file

const fs = require("fs");
const numRooms = Math.floor(Math.random() * 10) + 10; // 10 - 20 (exclusive)

let fakeRooms = [];
for (i = 1; i < numRooms; i++) {
  const chairs = Math.floor(Math.random() * 600) + 40; // 40-600 (exclusive)
  const name = `Room ${i}`;
  // const availability = [true, false][Math.round(Math.random())];
  const location = ["Ground floor", "1st floor", "2nd floor"][Math.floor(Math.random() * 3)]; // 0-3 (exclusive)
  fakeRooms.push({
    name: name,
    capacity: chairs,
    // isAvailable: availability,
    isAvailable: true,
    location: location
  });
}

let data = JSON.stringify({
  rooms: fakerooms
});
fs.writeFileSync(__dirname + "/allRooms.json", data);