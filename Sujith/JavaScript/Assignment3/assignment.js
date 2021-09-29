// Leap year or not
function isLeap() {
    var year = parseInt(document.getElementById('year').value);
    if (year % 4 == 0) {
        document.getElementById('res').innerHTML = `${year} is a Leap Year`;
    } else {
        document.getElementById('res').innerHTML = `${year} is not a Leap Year`;
    }
}
// Prime or not
function isPrime() {
    var num = parseInt(document.getElementById('num').value);
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            document.getElementById('res').innerHTML = `${num} is not a prime number`;
            break;
        } else {
            document.getElementById('res').innerHTML = `${num} is a prime number`;
            break;
        }
    }
}
// Even or Odd
function evenOdd() {
    var num = parseInt(document.getElementById('num').value);
    if (num % 2 == 0) {
        document.getElementById('res').innerHTML = `${num} is an even number.`;
    } else {
        document.getElementById('res').innerHTML = `${num} is an odd number.`;
    }
}
// Star Pattern
function starPattern() {
    let row = parseInt(document.getElementById("rows").value);
    let col = parseInt(document.getElementById("cols").value);
    for (let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            document.getElementById('res').innerHTML += "* ";
        }
        document.getElementById('res').innerHTML += "<br>";
    }
}
// Factorial of a number
function factorial() {
    var num = parseInt(document.getElementById('num').value);
    let fact = 1;
    for (let i = num; i > 0; i--) {
        fact *= i;
    }
    document.getElementById('res').innerHTML = `Factorial of ${num} is ${fact}`;
}
