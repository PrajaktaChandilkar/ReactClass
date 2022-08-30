const circles = document.querySelectorAll(".circle");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const progress = document.querySelector('.progress')

let currentActive = 1;
let numberOfCircles = circles.length;

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > numberOfCircles) {
    currentActive = numberOfCircles;
  }
  console.log(currentActive);
//   enableDisable();
updateCss()
});

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  console.log(currentActive);
  updateCss()
//   enableDisable();
});
console.log('curent activr'+currentActive)
function enableDisable() {
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === numberOfCircles) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
  
function updateCss(){
    for(var i = 0; i < numberOfCircles; i++){
        const circle = circles[i]
        if(i < currentActive){
            circle.classList.add("active")
        }else{
            circle.classList.remove("active")
        }
    }
    const activexyz = document.querySelectorAll(".active")

    const widthxyz = (activexyz.length-1)/(circles.length)*100
    progress.style.width = widthxyz
    enableDisable()
}