const letf = document.querySelector(".left");
const rigth = document.querySelector(".rigth");
const box = document.querySelector(".container");
const bodyEl = document.querySelector("body");

box.addEventListener("mouseover", () => {
  bodyEl.style.backdropFilter = "blur(4px)";
  bodyEl.style.transition = "1s";
});
box.addEventListener("mouseout", () => {
  bodyEl.style.backdropFilter = "none";
  bodyEl.style.transition = "1s";
});
