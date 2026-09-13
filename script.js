
// Main declarations
const display = document.getElementById("display");
const result =document.getElementById("answerDisplayed");
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


// Main functions
reset.addEventListener("click", function() {
  display.value = "";
  result.value = "";
});

calculate.addEventListener("click", function() {
  if (display.value === "") {
    return;
  }
  answer = eval(display.value.replaceAll("×", "*").replaceAll("÷", "/").replaceAll("Ans", answer)); 
  result.value = answer;
});

backspace.addEventListener("click", function() {
  display.value = display.value.trim().slice(0, -1);
});

ans.addEventListener("click", function() {
  if (result.value === "") {
    return;
  }  
  display.value = "Ans";
  result.value = "";  
});




// Operations
plus.addEventListener("click", function() {
  display.value += " + "; 
});

minus.addEventListener("click", function() {
  display.value += " - ";
})

multiply.addEventListener("click", function() {
  display.value += " × ";
});

divide.addEventListener("click", function() {
  display.value += " ÷ ";
});

percent.addEventListener("click", function() {
  if (display.value === "") {
    return;
  }
  const percentage = parseFloat(display.value);
  display.value = percentage / 100;
})

plusMinus.addEventListener("click", function() {
  if (display.value === "") {
    return;
  }
  if (display.value.startsWith("-")) {
    display.value = display.value.slice(1);
  } 
  else {
    display.value = "-" + display.value;
  }
});



// Number functions
dot.addEventListener("click", function() {
  display.value += ".";
});

zero.addEventListener("click", function() {
  if(display.value === "0") {
    return;
  }
  else {
  display.value += "0";
  }
});

one.addEventListener("click", function() {
  display.value += "1";
});

two.addEventListener("click", function() {
  display.value += "2";
});

three.addEventListener("click", function() {
  display.value += "3";
});

four.addEventListener("click", function() {
  display.value += "4";
});

five.addEventListener("click", function() {
  display.value += "5";
});

six.addEventListener("click", function() {
  display.value += "6";
});

seven.addEventListener("click", function() {
  display.value += "7";
})

eight.addEventListener("click", function() {
  display.value += "8";
});

nine.addEventListener("click", function() {
  display.value += "9";
});



