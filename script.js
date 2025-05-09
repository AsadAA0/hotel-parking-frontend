console.log("JS connected!");
const allowedRooms = [];

// add rooms 101-134
for(let i = 101; i<= 134; i++){
    allowedRooms.push(i.toString());
}

// add rooms 201-234
for(let i = 201; i<= 234; i++){
    allowedRooms.push(i.toString());
}

// add rooms 301-334
for(let i = 301; i <= 334; i++){
    allowedRooms.push(i.toString());
}

// add rooms 151-184
for(let i = 151; i <= 184; i++){
    allowedRooms.push(i.toString());
}

// add rooms 251-284
for(let i = 251; i <= 284; i++){
    allowedRooms.push(i.toString());
}

// add rooms 351-384
for(let i = 351; i <= 384; i++){
    allowedRooms.push(i.toString());
}

// add rooms 251-284
for(let i = 251; i <= 284; i++){
    allowedRooms.push(i.toString());
}

document.getElementById("parkingForm").addEventListener("submit", function (e) {
  e.preventDefault(); // stop page reload


const roomNumber = document.getElementById("roomNumber").value;


if(!allowedRooms.includes(roomNumber)){
    alert("Invalid room number");
    return;
}

const light = parseInt(document.getElementById("lightCars").value) || 0;
const heavy = parseInt(document.getElementById("heavyCars").value) || 0;
const total = (light * 5) + (heavy * 20);
alert('Total parking fee: $' +total);
});