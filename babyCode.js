const touchme = document.getElementById("touchme");

const babyBucket = document.getElementById("baby-bucket");
const dadBucket = document.getElementById("dad-bucket");
const momBucket = document.getElementById("mom-bucket");

function addDrop() {
  const drop = document.createElement("img");
  drop.src = "assets/iconmonstr-drop-6.svg";
  babyBucket.appendChild(drop);
}

function askDone() {
  const doneYet = document.createElement("div");
  doneYet.innerText = "Is he finished?";
  dadBucket.appendChild(doneYet);
}

function putDiaper() {
  const diaper = document.createElement("img");
  diaper.src = "assets/noun_diaper_1549135.svg";
  momBucket.appendChild(diaper);
}

touchme.addEventListener("mousemove", addDrop);
touchme.addEventListener("mousemove", throttle(askDone, 1000));
// touchme.addEventListener("mousemove", putDiaper);
