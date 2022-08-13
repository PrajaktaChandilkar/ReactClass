// const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
let btnsxyz = Array.from(document.querySelectorAll(".btn"));

//get sound name
for (var i = 0; i < btnsxyz.length; i++) {
  // var buttonxyz = btnsxyz[i];
  playSounds(buttonxyz);
}

function playSounds(btn) {
  btn.addEventListener("click", function () {
    stopSound();
    let newbtn = btn.innerText;
    console.log(newbtn);
    document.getElementById(newbtn).play();
  });
}

function stopSound() {
  for (var i = 0; i < btnsxyz.length - 1; i++) {
    const sound = document.getElementById(btnsxyz[i].innerText);
    sound.pause();
    sound.currentTime = 0;
  }
}
