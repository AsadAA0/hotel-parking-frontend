document.getElementById("continueBtn").addEventListener("click", function () {
  const roomNumber = document.getElementById("roomNumber").value.trim();
  const lightCars = parseInt(document.getElementById("lightCars").value) || 0;
  const heavyCars = parseInt(document.getElementById("heavyCars").value) || 0;

  const allowedRooms = [];
  for (let i = 101; i <= 134; i++) allowedRooms.push(i.toString());
  for (let i = 151; i <= 184; i++) allowedRooms.push(i.toString());
  for (let i = 201; i <= 234; i++) allowedRooms.push(i.toString());
  for (let i = 251; i <= 284; i++) allowedRooms.push(i.toString());
  for (let i = 301; i <= 334; i++) allowedRooms.push(i.toString());
  for (let i = 351; i <= 384; i++) allowedRooms.push(i.toString());

  if (!allowedRooms.includes(roomNumber)) {
    alert("Invalid room number.");
    return;
  }

  const total = lightCars * 5 + heavyCars * 20;
  const totalCars = lightCars + heavyCars;

  const plateInputsContainer = document.getElementById("plateInputsContainer");
  plateInputsContainer.innerHTML = ""; // Clear any old inputs

  if (totalCars === 0) {
    document.getElementById("summaryText").textContent = `Thank you! You have no cars to register.`;
    document.getElementById("totalText").textContent = `No payment needed.`;
    document.getElementById("payBtn").style.display = "none";
  } else {
    document.getElementById("summaryText").textContent =
      `Room ${roomNumber}: ${lightCars} light car(s), ${heavyCars} heavy car(s)`;
    document.getElementById("totalText").textContent =
      `Total parking fee: $${total}`;
    document.getElementById("payBtn").style.display = "block";

    // Create dynamic input fields
    for (let i = 1; i <= totalCars; i++) {
      const label = document.createElement("label");
      label.textContent = `Car ${i} - Plate & State:`;

      const plateInput = document.createElement("input");
      plateInput.type = "text";
      plateInput.placeholder = "Plate Number";
      plateInput.required = true;
      plateInput.name = `plate${i}`;

      const stateInput = document.createElement("input");
      stateInput.type = "text";
      stateInput.placeholder = "State";
      stateInput.required = true;
      stateInput.name = `state${i}`;

      plateInputsContainer.appendChild(label);
      plateInputsContainer.appendChild(document.createElement("br"));
      plateInputsContainer.appendChild(plateInput);
      plateInputsContainer.appendChild(document.createElement("br"));
      plateInputsContainer.appendChild(stateInput);
      plateInputsContainer.appendChild(document.createElement("br"));
      plateInputsContainer.appendChild(document.createElement("br"));
    }
  }

  // Switch pages
  document.getElementById("formPage").style.display = "none";
  document.getElementById("summaryPage").style.display = "block";
});
