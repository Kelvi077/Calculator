// side bar
$(".list").on("click", slide);
let x = true;
function slide() {
  if (x) {
    $(".side-bar").animate({ left: "0rem" }, 1000);
    x = false;
  } else {
    $(".side-bar").animate({ left: "-20rem" }, 1000);
    x = true;
  }
}

// calculation

// adding a num on the screen
$(".num").on("click", addNum);
function addNum() {
  $(".screen").append($(this).html());
}

// delete
$(".delete").on("click", deleteNum);
function deleteNum() {
  let lastNum = $(".screen").html();
  $(".screen").html(lastNum.slice(0, -1));
}

// total
$(".total").on("click", calculateTotal);
function calculateTotal() {
  let expression = $(".screen").html();

  // if an error happens the catch will print Error
  try {
    let result = math.evaluate(expression); //   evaluate expression as it was a js code
    $(".screen").html(result);
  } catch {
    $(".screen").html("Error");
  }
}

// addition
$(".add").on("click", addition);
function addition() {
  $(".screen").append("+");
}

// subtraction
$(".-").on("click", subtraction);
function subtraction() {
  $(".screen").append("-");
}

// division
$(".divide").on("click", division);
function division() {
  $(".screen").append("/");
}

// multiply
$(".x").on("click", multiply);
function multiply() {
  $(".screen").append("*");
}

// dot
$(".dot").on("click", point);
function point() {
  $(".screen").append(".");
}

// percentage
$(".percentage").on("click", percentage);
function percentage() {
  $(".screen").append("%");
}

// power 2
$(".x2").on("click", function () {
  let expression = $(".screen").html();
  try {
    let result = math.evaluate(expression); //calculates the expression on the screen
    let squaredResult = math.square(result); // Calculate the square
    $(".screen").html(squaredResult);
  } catch (error) {
    $(".screen").html("Error");
  }
});

// square-root
$(".square-root").on("click", function () {
  let expression = $(".screen").html();
  try {
    let result = math.evaluate(expression); //calculates the expression on the screen
    let squareRoot = math.sqrt(result); // Calculate the square
    $(".screen").html(squareRoot);
  } catch (error) {
    $(".screen").html("Error");
  }
});

// onePiece
$(".onePiece").on("click", function () {
  let expression = $(".screen").html();
  try {
    let result = math.evaluate(expression); //calculates the expression on the screen
    let onePieceResult = 1 / result; // Calculate the square
    $(".screen").html(onePieceResult);
  } catch (error) {
    $(".screen").html("Error");
  }
});

//percentage
// power 2
$(".percentage").on("click", function () {
  let expression = $(".screen").html();
  try {
    let result = math.evaluate(expression); //calculates the expression on the screen
    $(".screen").html(result);
  } catch (error) {
    $(".screen").html("Error");
  }
});

// Refresh button functionality
$(".C, .CE").on("click", function () {
  location.reload(); // Refresh the page
});
