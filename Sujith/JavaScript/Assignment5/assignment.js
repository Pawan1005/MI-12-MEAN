// Sum of even & Product of odd
function getResult() {
    var sum = 0, product = 1;
    var num = document.getElementById('num').value;
    if (num.length > 6 || num.length < 6) {
        document.getElementById('res').innerHTML = `Invalid Number!! Please enter a 6 digit no.`;
    }
    else {
        for (let i = 0; i < num.length; i++) {
            let val = parseInt(num[i]);
            if (val % 2 == 0) {
                sum += val;
            }
            else {
                product *= val;
            }
        }
        document.getElementById('res').innerHTML = `Sum: ${sum}<br>Product: ${product}`;
    }
}
// Floyd’s triangle
function floyd() {
    let rows = parseInt(document.getElementById('num').value);
    let num = 1;
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= i; j++) {
            document.getElementById('res').innerHTML += `${num}&nbsp;`;
            num++;
        }
        document.getElementById('res').innerHTML += `<br>`;
    }
}
// Sample triangle
function pattern() {
    let rows = parseInt(document.getElementById('num').value);
    for (let i = 0; i <= rows; i++) {
        for (let j = 1; j <= i; j++) {
            document.getElementById('res').innerHTML += `${j}&nbsp;`;
        }
        document.getElementById('res').innerHTML += `1<br>`;
    }
}
