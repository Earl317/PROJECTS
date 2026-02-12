console.log("Script loaded");

/* =================================================
   FLOATING BACKGROUND HEARTS
   ================================================= */
const heartTypes = ["❤️", "💖", "💕", "💘", "💝"];

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("float-heart");
  heart.textContent = heartTypes[Math.floor(Math.random() * heartTypes.length)];

  heart.style.left = Math.random() * 100 + "%";
  heart.style.animationDuration = 3 + Math.random() * 3 + "s";
  heart.style.animationDelay = Math.random() * 2 + "s";

  const size = 20 + Math.random() * 60;
  heart.style.fontSize = size + "px";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}

/* =================================================
   MAIN APP LOGIC
   ================================================= */
document.addEventListener("DOMContentLoaded", () => {
  setInterval(createHeart, 120);

  const yesBtn = document.getElementById("yes");
  const noBtn = document.getElementById("no");
  const card = document.querySelector(".card");
  const gifImg = document.querySelector(".gif-style");
  const secondSet = document.querySelector(".secondSet");

  if (!yesBtn || !noBtn || !card) {
    console.error("Missing required elements");
    return;
  }

  if (secondSet) secondSet.classList.add("hidden");

  /* ===========================
     GIF CONTROL
     =========================== */
  const yesGif = "assets/YESgif.gif";
  const noGifs = [
    "assets/2gif.gif",
    "assets/3gif.gif",
    "assets/4gif.gif",
    "assets/5gif.gif",
    "assets/6gif.gif",
  ];
  let gifIndex = 0;

  function showNoGif() {
    if (!gifImg) return;
    gifImg.src = noGifs[gifIndex];
    gifIndex = (gifIndex + 1) % noGifs.length;
  }

  function showYesGif() {
    if (gifImg) gifImg.src = yesGif;
  }

  /* ===========================
     NO BUTTON CHAOS MODE
     =========================== */
  const noTexts = [
    "No",
    "lahh!!!",
    "wag na!! wag na!!",
    "Babyyy naman!!",
    "Come on...",
    "sige na kasi...",
    "pleaseee 🥺",
    "bala ka nga!",
  ];

  let noClickCount = 0;
  let yesScale = 1;

  noBtn.addEventListener("click", () => {
    noBtn.style.transform = "scale(0.7)";

    const maxX = card.clientWidth - noBtn.offsetWidth;
    const maxY = card.clientHeight - noBtn.offsetHeight;

    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * maxX + "px";
    noBtn.style.top = Math.random() * maxY + "px";

    noBtn.textContent = noTexts[noClickCount % noTexts.length];
    noClickCount++;

    yesScale += 0.2;
    yesBtn.style.transform = `scale(${yesScale})`;

    showNoGif();
  });

  /* ===========================
     YES BUTTON LOVE MODE
     =========================== */
  let yesClicked = false;
  const music = document.querySelector(".bgmusic");
  yesBtn.addEventListener("click", () => {
    if (yesClicked) return;
    yesClicked = true;
    music.play();
    yesBtn.style.transform = "scale(1.5)";
    yesBtn.style.backgroundColor = "#ff69b4";
    yesBtn.textContent = "YEY SEE U! 💖";

    showYesGif();
    noBtn.style.display = "none";

    alert("I love youu!! 💖");

    card.classList.add("hidden");

    if (secondSet) {
      secondSet.classList.remove("hidden");
      secondSet.classList.add("fade-in");
      setTimeout(() => secondSet.classList.remove("fade-in"), 1200);
    }
  });
});

/* =================================================
   ENVELOPE OPEN / CLOSE (jQuery required)
   ================================================= */
$(document).ready(function () {
  const envelope = $("#envelope");
  const btnOpen = $("#open");
  const btnReset = $("#reset");

  function openEnvelope() {
    envelope.addClass("open").removeClass("close");
  }

  function closeEnvelope() {
    envelope.addClass("close").removeClass("open");
  }

  envelope.click(openEnvelope);
  btnOpen.click(openEnvelope);
  btnReset.click(closeEnvelope);
});
