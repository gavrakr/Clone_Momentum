const timeNow = document.querySelector("#clock .clock__time");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  timeNow.innerText = `${hours}:${minutes}`;
}

getClock();
setInterval(getClock, 1000);
