var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function displayGradient() {
  css.textContent = body.style.background + ";";
}

function setGradient() {
  body.style.background =
    "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value
    + ")";
  displayGradient();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
document.getElementById("output").innerHTML=("linear-gradient(to right, rgb(255, 67, 241), rgb(124, 255, 208));");
