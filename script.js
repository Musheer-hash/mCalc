// Main declarations
const display = document.getElementById("display");
const result = document.getElementById("answerDisplayed");
const reset = document.getElementById("reset");
const calculate = document.getElementById("calculate");
const backspace = document.getElementById("del");
const ans = document.getElementById("ans");
let answer = 0;

// Operators
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const percent = document.getElementById("percent");
const plusMinus = document.getElementById("plusMinus");
const sqrt = document.getElementById("sqrt");
const parenOpen = document.getElementById("parenOpen");
const parenClose = document.getElementById("parenClose");

// Numbers
const dot = document.getElementById("dot");
const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");

// Helper: safely evaluate the current expression, substituting Ans
function evaluateExpression(expr) {
  const sanitized = expr
    .replaceAll("×", "*")
    .replaceAll("÷", "/")
    .replaceAll("√", "Math.sqrt")
    .replaceAll("Ans", String(answer));
  return Function('"use strict"; return (' + sanitized + ")")();
}

// Main functions
reset.addEventListener("click", function () {
  display.value = "";
  result.value = "";
});

calculate.addEventListener("click", function () {
  if (display.value === "") {
    return;
  }
  try {
    const value = evaluateExpression(display.value);
    if (String(value).length > 17 || !isFinite(value)) {
      result.value = "Error";
    } else {
      answer = value;
      result.value = value;
    }
  } catch (e) {
    result.value = "Error";
  }
});

backspace.addEventListener("click", function () {
  // Remove the last "token" (number, operator+spaces, or Ans) in one press
  display.value = display.value.replace(/\s?(Ans|[+\-×÷])\s?$|.$/, "");
});

ans.addEventListener("click", function () {
  display.value += "Ans";
});

// Operations
plus.addEventListener("click", function () {
  display.value += " + ";
});

minus.addEventListener("click", function () {
  display.value += " - ";
});

multiply.addEventListener("click", function () {
  display.value += " × ";
});

divide.addEventListener("click", function () {
  display.value += " ÷ ";
});

parenOpen.addEventListener("click", function () {
  display.value += "(";
});

parenClose.addEventListener("click", function () {
  display.value += ")";
});

sqrt.addEventListener("click", function () {
  if (display.value === "") {
    return;
  }
  try {
    const value = evaluateExpression(display.value);
    display.value = String(Math.sqrt(value));
  } catch (e) {
    result.value = "Error";
  }
});

percent.addEventListener("click", function () {
  if (display.value === "") {
    return;
  }
  try {
    const value = evaluateExpression(display.value);
    display.value = String(value / 100);
  } catch (e) {
    result.value = "Error";
  }
});

plusMinus.addEventListener("click", function () {
  if (display.value === "") {
    return;
  }
  if (display.value.startsWith("- ")) {
    display.value = display.value.slice(2);
  } else {
    display.value = "- " + display.value;
  }
});

// Number functions
dot.addEventListener("click", function () {
  display.value += ".";
});

zero.addEventListener("click", function () {
  if (display.value === "0") {
    return;
  }
  display.value += "0";
});

one.addEventListener("click", function () {
  display.value += "1";
});
two.addEventListener("click", function () {
  display.value += "2";
});
three.addEventListener("click", function () {
  display.value += "3";
});
four.addEventListener("click", function () {
  display.value += "4";
});
five.addEventListener("click", function () {
  display.value += "5";
});
six.addEventListener("click", function () {
  display.value += "6";
});
seven.addEventListener("click", function () {
  display.value += "7";
});
eight.addEventListener("click", function () {
  display.value += "8";
});
nine.addEventListener("click", function () {
  display.value += "9";
});
