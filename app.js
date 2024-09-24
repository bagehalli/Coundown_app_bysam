const endDate = "24 september 2024 10:00 PM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");

//const clock = document.getElementById("clock");


function clock() {
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end-now)/1000;
  console.log(diff);
  inputs[0].value = Math.floor(diff / 3600 / 24);
  inputs[1].value = Math.floor(diff /3600) % 24;
  inputs[2].value = Math.floor(diff / 60) % 60;
  inputs[3].value = Math.floor(diff) % 60;
  //clock.innerText = `${inputs[0].value} days, ${inputs[1].value} hours, ${inputs[2].value} minutes, ${inputs[3].value} seconds`;
}
clock();



setInterval(() => {clock()}, 1000);