let countofshifts = 0;
let lastTime = 0;
let i = 0;

// prints shift keys activated when called
const printOutput = () => {
  let outputText = document.createElement("div");
  outputText.id = i + " sticky";
  document.getElementById("sticky").appendChild(outputText);
  document.getElementById(i.toString() + " sticky").innerHTML =
    "Sticky Keys Activated";
  i++;
};

// handles click of keyboard buttons
const handleKeyboardClicks = (event) => {
  let ketPressed = event.key;
  // console.log("clicked");
  if (ketPressed === "Shift") {
    countofshifts++;
    if (countofshifts === 1) {
      lastTime = Date.now();
    }
    let currentTime = Date.now();
    if (countofshifts === 5 && currentTime - lastTime < 5000) {
      printOutput();
      console.log("sticky keys activated");
    }
    countofshifts %= 5;
  }
};

document.addEventListener("keydown", (event) => handleKeyboardClicks(event));
