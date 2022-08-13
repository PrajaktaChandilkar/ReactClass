let display = document.getElementById("display");
let button = Array.from(document.getElementsByClassName("btn"));

console.log(button);
console.log("hi");

// this in one methos getvaliue from this function i
// function getValue(button){
//     // button.addEventListener("click", (xyz) =>{
//         button.addEventListener("click",(xyz) => {
//         console.log(button)
//         console.log(xyz)
//         switch(xyz.target.innerText){
//             case 'C':
//                 display.innerText = "";
//                 break;
//             case '←':
//                     display.innerText  = display.innerText.slice(0,-1)
//                     break
//             case '=':
//                 try{
//                     display.innerText = eval(display.innerText)
//                 }catch{
//                     display.innerText = "Error"
//                 }
//                 break;
//             default:
//                     display.innerText= display.innerText + xyz.target.innerText
//         }
//     })

// }
// button.map(abcdxyz=>getValue(abcdxyz))

//alternative method:

function isOPxyz(opxyz) {
  if (opxyz === "+" || opxyz === "-" || opxyz === "*" || opxyz === "/")
    return true;
  return false;
}

function getValue(clickedValue) {
  if (display.innerText === "") {
    if (clickedValue != 0) {
      display.innerText = display.innerText + clickedValue;
    }
  } else {
    //to chrck to consigetive opertor and remove last one 
    if (
      isOPxyz(clickedValue) &&
      isOPxyz(display.innerText[display.innerText.length - 1])
    ) {
      display.innerText = display.innerText.slice(0, -1);
    }
    display.innerText = display.innerText + clickedValue;
  }
}

function clearData() {
  display.innerText = "";
}

function backValue() {
  display.innerText = display.innerText.slice(0, -1);
}

function getResult() {
  try {
    display.innerText = eval(display.innerText);
  } catch (err) {
    display.innerText = "Error";
  }
}
