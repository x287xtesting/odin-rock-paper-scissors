const btn = document.querySelector("#downBtn");
const section = document.querySelector("#scrollIntoView");

btn.addEventListener('click', () => section.scrollIntoView({
  behavior: "smooth",
}));
