const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgimg = document.createAttribute("background");

bgImage = `img/${chosenImage}`;
bg = document.querySelector("#bg");
bg.background = bgImage;
