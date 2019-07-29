var touchme = document.getElementById("touchme");

var babyBucket = document.getElementById("baby-bucket");
var dadBucket = document.getElementById("dad-bucket");
var momBucket = document.getElementById("mom-bucket");

function addDrop() {
  var drop = document.createElement("img");
  drop.src = "assets/iconmonstr-drop-6.svg";
  babyBucket.appendChild(drop);
}

function askDone() {
  var doneYet = document.createElement("div");
  doneYet.innerText = "Is he finished?";
  dadBucket.appendChild(doneYet);
}

function putDiaper() {
  var diaper = document.createElement("img");
  diaper.src = "assets/noun_diaper_1549135.svg";
  momBucket.appendChild(diaper);
}

// FUN PART BELOW
touchme.addEventListener("mousemove", addDrop);
touchme.addEventListener("mousemove", debounce(putDiaper, 1000));
touchme.addEventListener("mousemove", throttle2(askDone, 2000));
