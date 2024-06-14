const letf = document.querySelector(".left");
const rigth = document.querySelector(".rigth");
const box = document.querySelector(".container");
const bodyEl = document.querySelector("body");
/* box.addEventListener("mouseover", () => {
  rigth.style.scale = "15%";
});
setTimeout(() => {
  box.addEventListener("mouseover", () => {
    rigth.style.scale = "100%";
  });
}, 1000); */

box.addEventListener("mouseover", () => {
  // bodyEl.classList.toggle("blured");
  bodyEl.style.backdropFilter = "blur(4px)";
  bodyEl.style.transition = "1s";
});
box.addEventListener("mouseout", () => {
  bodyEl.style.backdropFilter = "none";
  bodyEl.style.transition = "1s";
});

// bodyEl.addEventListener("mouseover", () => {
//   bodyEl.classList.remove(".blured");
// });
