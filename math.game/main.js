document.getElementById("firstRandomNumber").innerHTML = Math.floor(Math.random() * 11);
document.getElementById("secondRandomNumber").innerHTML = Math.floor(Math.random() * 11);

function checkResultOfAddingTwoNumbers() {
    var firstNumber = parseInt(document.getElementById("firstRandomNumber").innerHTML);
    var secondNumber = parseInt(document.getElementById("secondRandomNumber").innerHTML);
    var exceptNum = parseInt(document.getElementById("exceptNum").value);

    var result = firstNumber + secondNumber;

    if (exceptNum === result) {
      window.alert("True");
    } else {
      window.alert("False\nExpected: " + exceptNum + "\nActual: " + result);
    }
  }