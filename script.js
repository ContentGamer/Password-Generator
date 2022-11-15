let inputPass, generateBtn, passTxt, alphabet, disableInspectElement;

inputPass = document.getElementById("passInput");
generateBtn = document.getElementById("genButton");
passTxt = document.getElementById("outputPass");
alphabet =
  "azertyuiopqsdfghjklmwxcvbAZERTYUIOPQSDFGHJKLMWXCVBN1234567890&é''(èçà)=+*";

const repeat = () => {
  if (inputPass.value.length > 2) {
    let lastNums = "";
    lastNums = inputPass.value;
    inputPass.value = "";
    for (var i = 0; i < lastNums.length; i++) {
      if (i < 2) {
        const object = lastNums[i];
        inputPass.value += object;
      }
    }
  }
  setTimeout(() => {
    repeat();
  }, 100);
};

const random = (min, max) => {
  return Math.floor(Math.random() * (max + 1)) + min;
};

const generatePass = () => {
  let result = " ";
  for (let i = 0; i < parseInt(inputPass.value, 0); i++) {
    result += alphabet.charAt(random(0, alphabet.length));
  }

  return result;
};

repeat();

generateBtn.addEventListener("click", () => {
  passTxt.style = "right: " + (-595 + parseInt(inputPass.value, 0) * 4) + "px;";
  passTxt.innerText = generatePass();
});

const ctrlShift = (e, neededKey) => {
  if (e.ctrlKey && e.shiftKey && e.keyCode === neededKey.charCodeAt(0)) {
    return true;
  }
};

if (disableInspectElement) {
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });

  document.onkeydown = (e) => {
    if (event.keyCode === 123) {
      return false;
    }

    if (ctrlShift(e, "I")) {
      return false;
    }

    if (ctrlShift(e, "C")) {
      return false;
    }

    if (ctrlShift(e, "J")) {
      return false;
    }

    if (ctrlShift(e, "U")) {
      return false;
    }
  };
}
