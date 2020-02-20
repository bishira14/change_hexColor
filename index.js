let hexNums = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
let backgroundColor = document.querySelector("body");
let button = document.querySelector("button");

let thehex = document.querySelector(".hex")

button.addEventListener("click", function(){
  let hexValue = "#"
  for(let i = 0; i < 6; i++){
     let random = Math.floor(Math.random() * hexNums.length);
      hexValue += hexNums[random];
  }
  backgroundColor.style.backgroundColor = hexValue;
  thehex.innerHTML = hexValue;

});
