const startScreen = document.querySelector(".start-screen");
startScreen.addEventListener("click", spaceInfo);

const sunScreen = document.querySelector(".sunny");
sunScreen.style.display = "none";

const mercuryScreen = document.querySelector(".first");
mercuryScreen.style.display = "none";

const venusScreen = document.querySelector(".second");
venusScreen.style.display = "none";

const earthScreen = document.querySelector(".third");
earthScreen.style.display = "none";

const marsScreen = document.querySelector(".fourth");
marsScreen.style.display = "none";

const jupiterScreen = document.querySelector(".fourth");
jupiterScreen.style.display = "none";


function spaceInfo() {
    startScreen.style.display = "none";  // Hide start screen
    sunScreen.style.display = "block";  // Show game screen
}

  const returnSpaceButton = document.querySelector(".return-space");
  returnSpaceButton.addEventListener("click", returnSpace)

function returnSpace() {
  startScreen.stlye.display ="block";
  sunScreen.style.display = "none";
}