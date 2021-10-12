// Program 1
function myfun1() {
    let names = [];
    for (let i = 0; i < 5; i++) {
        names.push(prompt("Enter a name"));
    }
    document.getElementById('res1').innerHTML = names.toString();
    for (let i = 0; i < names.length; i++) {
        document.getElementById('res2').innerHTML += `Name ${i+1}: ${names[i]}<br>`;
    }
}
// Program 2
function myfun2() {
    let names = [], ip = '';
    while (true) {
        ip = prompt("Enter a name : ");
        if (ip == "x" || ip == "X" || ip === null) {
            break;
        }
        names.push(ip);
    }
    document.getElementById("res1").innerHTML = `Names: ${names.join(" ~ ")}`;
    document.getElementById("res2").innerHTML = `Names (Asc): ${names.sort().join(", ").toUpperCase()}`;
    document.getElementById("res3").innerHTML = `Names (Desc): ${names.reverse().join(", ").toUpperCase()}`;
}
// Program 3
function myfun3() {
    let values = [], ip = '', sum = 0;
    while (true) {
        ip = prompt("Enter a number : ");
        if (ip == "x" || ip == "X" || ip === null) {
            break;
        }
        values.push(ip);
    }
    for (let i = 0; i < values.length; i++) {
        sum += parseInt(values[i]);
    }
    document.getElementById("res1").innerHTML = `Sum of numbers: ${sum}`;
}
// Program 4
function myfun4() {
    let values = [], ip = '', sum = 0;
    while (true) {
        ip = prompt("Enter a number : ");
        if (ip == "x" || ip == "X" || ip === null) {
            break;
        }
        values.push(ip);
    }
    for (let i = 0; i < values.length; i++) {
        let fact = 1;
        for (let j = values[i]; j > 0; j--) {
            fact *= j;
        }
        sum += fact;
    }
    document.getElementById("res1").innerHTML = `Sum of factorials: ${sum}`;
}
// Program 5
function myfun5() {
    let values = [], facts = [], ip = '';
    while (true) {
        ip = prompt("Enter a number : ");
        if (ip == "x" || ip == "X" || ip === null) {
            break;
        }
        values.push(ip);
    }
    for (let i = 0; i < values.length; i++) {
        let fact = 1;
        for (let j = values[i]; j > 0; j--) {
            fact *= j;
        }
        facts.push(fact);
    }
    document.getElementById("res1").innerHTML = `Factorials of numbers: ${facts.sort(function(a, b){return b-a})}`;
}
