inputSelected = document.querySelector(".userName");
inputSelected.addEventListener("keyup", getInputValue);

let keysPressed = "";
function getInputValue(e) {
  let oneKey = ` ${e.code}`;
  if (oneKey.match(/Key/g)) {
    keysPressed += oneKey;
    console.log(keysPressed);
  } else alert("only letters please");
}
