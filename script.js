const sunScreen = document.getElementById("sun-button")
sunScreen.addEventListener("click", spaceInfoSun);

const sunInfo = document.getElementById("sun-info");
sunInfo.style.display = "none";

const startScreen = document.querySelector(".start-screen");

function spaceInfoSun() {  
  startScreen.style.display = "none";
  sunInfo.style.display = "block";
  returnSpace.style.display = "block";
}

const returnSpace = document.getElementById("return-space")
returnSpace.style.display = "none";

const returnButton = document.getElementById("return-space-button");
returnSpace.addEventListener("click", returnHomeScreen);

function returnHomeScreen() {
  startScreen.style.display = "block";
  sunInfo.style.display = "none";
  returnSpace.style.display = "none";
}