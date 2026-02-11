console.log("Script loaded!"); // Debug check

const heartTypes = ["💝"];

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("hearts");
  heart.textContent = heartTypes[Math.floor(Math.random() * heartTypes.length)];

  heart.style.left = Math.random() * 100 + "%";
  heart.style.animationDuration = 3 + Math.random() * 3 + "s";
  heart.style.animationDelay = Math.random() * 2 + "s";

  const size = 20 + Math.random() * 90;
  heart.style.width = size + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

window.onload = function () {
  setInterval(createHeart, 100);
};

// Button logic
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const card = document.querySelector(".card");
const gifImg = document.querySelector(".gif-style"); // ✅ fixed

let yesScale = 1;

// GIFs
const yesGif = "assets/YESgif.gif"; // single GIF for Yes
const noGifs = [
  "assets/2gif.gif",
  "assets/3gif.gif",
  "assets/4gif.gif",
  "assets/5gif.gif",
  "assets/6gif.gif",
];
let gifIndex = 0;

function NoBTNchangeGif() {
  gifImg.src = noGifs[gifIndex];
  gifIndex = (gifIndex + 1) % noGifs.length; // ✅ fixed
}
function yesBtnchangeGif() {
  gifImg.src = yesGif;
}

// Funny/sweet texts for No button
const noTexts = [
  "No",
  "lahh!!!",
  "wag na!! wag na!!",
  "Babyyy naman!!",
  "Come on...",
  "sige na kasi.... ",
  "sige na... wag na wag na... ",
  "bala ka nga!",
];
let noClickCount = 0;

noBtn.addEventListener("click", () => {
  noBtn.style.transform = "scale(0.7)";

  const maxX = card.clientWidth - noBtn.offsetWidth;
  const maxY = card.clientHeight - noBtn.offsetHeight;
  const randX = Math.floor(Math.random() * maxX);
  const randY = Math.floor(Math.random() * maxY);

  noBtn.style.position = "absolute";
  noBtn.style.left = randX + "px";
  noBtn.style.top = randY + "px";

  noClickCount++;
  noBtn.textContent = noTexts[noClickCount % noTexts.length];

  yesScale += 0.2;
  yesBtn.style.transition = "transform 0.3s ease";
  yesBtn.style.transform = `scale(${yesScale})`;

  yesBtn.animate(
    [
      { transform: `scale(${yesScale - 0.2})` },
      { transform: `scale(${yesScale + 0.3})` },
      { transform: `scale(${yesScale - 0.1})` },
      { transform: `scale(${yesScale})` },
    ],
    { duration: 500, easing: "ease-out" },
  );

  NoBTNchangeGif();
});

let yesClicked = false;
yesBtn.addEventListener("click", () => {
  if (!yesClicked) {
    yesClicked = true;
    yesBtn.style.transform = "scale(1.5)";
    yesBtn.style.backgroundColor = "#ff69b4";
    yesBtn.textContent = "love youu! 💖";
    yesBtnchangeGif();
    noBtn.style.display = "none";
  }
});
