const link = document.querySelector("#style");

const f1 = document.querySelector(".f1");
const f2 = document.querySelector(".f2");
const f3 = document.querySelector(".f3");

// change style stylesheet with button clicks

f1.addEventListener("click", e => {
  link.href = "style.css";
});

f2.addEventListener("click", e => {
  link.href = "style-v2.css";
});

f3.addEventListener("click", e => {
  link.href = "style-v1.css";
});
