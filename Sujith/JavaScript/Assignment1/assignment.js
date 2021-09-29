// Swaping with temporary variable
function withTemp() {
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
    let temp = n1;
    n1 = n2;
    n2 = temp;
    document.getElementById("res").innerHTML = `<h4>Method1: With Temporary Variable</h4><br><p id="res1">After Swapping (Method1)- A: ${n1}, B: ${n2}</p>`;
}
// Swapping without temporary variable
function noTemp() {
    let n3 = document.getElementById("num1").value;
    let n4 = document.getElementById("num2").value;
    n3 = n3 * n4;
    n4 = n3 / n4;
    n3 = n3 / n4;
    document.getElementById("res").innerHTML = `<h4>Method2: Without Temporary Variable</h4><br><p id="res2">After Swapping (Method2)- A: ${n3}, B: ${n4}</p>`;
}
// Converting celsius to farenheit
function convert() {
    var oC = parseInt(document.getElementById('oC').value);
    var oF = (oC * 9/5) + 32;
    document.getElementById('res').innerHTML = `<p>${oC}<sup>o</sup>C is equal to ${oF}<sup>o</sup>F</p>`;
}
