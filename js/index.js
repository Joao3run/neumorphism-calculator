const btns = document.querySelectorAll(".num-button");
const allBtns = document.querySelectorAll(".button");
const clearBtn = document.querySelector("#clear");
const deleteBtn = document.querySelector("#delete");
const resultBox = document.querySelector("#result-box");
const totalizerBox = document.querySelector("#totalizer-box");
const total = document.querySelector("#total");

btns.forEach((button, i) => {
  button.addEventListener("click", () => {
    if (resultBox.innerHTML == "0") {
      resultBox.innerHTML = "";
    }
    const value = btns[i].innerHTML;
    resultBox.innerHTML += value;
  });
});

function calculate(espression) {
  return new Function("return " + espression.replace(/\u00D7/gi, "*"))();
}

total.addEventListener("click", () => {
  const allInputs = resultBox.innerHTML;
  totalizerBox.innerHTML = calculate(allInputs);
  const totalizerBoxColor = calculate(allInputs) >= 0 ? "#11E064" : "#FF8F8F";
  totalizerBox.style.color = totalizerBoxColor;
});

clearBtn.addEventListener("click", () => {
  resultBox.innerHTML = "0";
});

deleteBtn.addEventListener("click", () => {
  const textNode = resultBox.textContent;
  console.log("textNode ", textNode);
  resultBox.innerHTML = textNode.replace(/.$/, "");
  totalizerBox.innerHTML = "";
});

const boxShadowActivedButton =
  "inset -1px -1px 1px rgba(255, 255, 255, 0.6), inset 2px 2px 5px #333945";
const boxShadowButton =
  "6px 6px 16px 0 rgba(209, 205, 199, .5),-6px -6px 16px 0 rgba(255, 255, 255, .5)";
const textShadowActivedButton =
  "2px 2px 2px rgba(0, 0, 0, 0.18), -1px -1px 2px rgba(255, 255, 255, 0.3)";

allBtns.forEach((button, i) => {
  button.addEventListener("click", () => {
    let element = allBtns[i];
    element.style.boxShadow = boxShadowActivedButton;

    element.style.background = "#616774";
    element.style.textShadow = textShadowActivedButton;

    element.style.color = "#F1F3F6";
    setTimeout(function () {
      element.style.boxShadow = boxShadowButton;

      element.style.textShadow = "";
      element.style.color = "";
      if (RegExp("action-btn-equals").test(button.className)) {
        element.style.background = "#11E064";
      } else {
        element.style.background = "#EAEDF2";
      }
    }, 0400);
  });
});
