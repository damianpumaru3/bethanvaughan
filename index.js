// document.querySelector("#main-header").textContent = "welcome";

// function mouseHeader() {
//   let header = document.querySelector("#main-header");
//   header.addEventListener("click", (e) => {
//     header.style.color = "yellow";
//   });
// }

// mouseHeader();

let test = document.getElementById("test");

test.addEventListener(
  "mouseenter",
  (event) => {
    event.target.style.color = "purple";

    setTimeout(function () {
      event.target.style.color = "white";
    }, 500);
  },
  false
);

let greeting = document.getElementById("greeting");

greeting.addEventListener("mouseover", (e) => {
  greeting.textContent = "hi";
});

let whole = document.getElementById("whole-page");

whole.addEventListener("keypress", (e) => {
  const newP = document.createElement("p");
  newP.textContent =
    "I'm the paragraph which appears when you type something on my page!";
  whole.appendChild(newP);
});

// // this one is working! let home = document.querySelector("#home");

let home = document.querySelector("#home");

home.addEventListener("click", (event) => {
  event.target.style.fontWeight = "bold";
  event.target.style.fontSize = "50px";
});

// function goBold() {
//   headers = document.getElementsByName(".home-same");
//   headers.addEventListener("click", (event) => {
//     event.target.style.fontWeight = "bold";
//   });
// }
