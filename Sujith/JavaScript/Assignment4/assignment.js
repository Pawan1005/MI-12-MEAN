// Armstrong number
function isArmstrong() {
    var len = 0, res = 0, digit = 0;
    var num = document.getElementById('num').value;
    len = num.length;
    var temp = Number(num);
    while (temp > 0) {
        digit = temp % 10;
        res += Math.pow(digit, len);
        temp = Math.floor(temp / 10);
    }
    if (num == res) {
        document.getElementById('res').innerHTML = `${num} is an armstrong number.`;
    }
    else {
        document.getElementById('res').innerHTML = `${num} is not an armstrong number.`;
    }
}
// Automarphic number
function isAutomarphic() {
    var num = document.getElementById('num').value;
    if (num >= 10) {
        document.getElementById('res').innerHTML= `Error. Choose a number from 1 to 9`;
    }
    else {
        var lastDigit = Math.pow(num, 2) % 10;
        if (lastDigit == num) {
            document.getElementById('res').innerHTML = `${num} is an Automarphic number.`;
        }
        else {
            document.getElementById('res').innerHTML = `${num} is not an Automarphic number.`;
        }
    }
}
// Krishnamurthy number
function isKNumber() {
    var res = 0, digit = 0, fact = 1;
    var num = document.getElementById('num').value;
    var temp = Number(num);
    while (temp > 0) {
        digit = temp % 10;
        for (let i = digit; i > 0; i--) {
            fact *= i;
        }
        res += fact;
        fact = 1;
        temp = Math.floor(temp / 10);
    }
    if (num == res) {
        document.getElementById('res').innerHTML = `${num} is a krishnamurthy number.`;
    }
    else {
        document.getElementById('res').innerHTML = `${num} is not a krishnamurthy number.`;
    }
}
// Vowel or not
function isVowel() {
    var character = document.getElementById('character').value.toLowerCase();
    if (character.length > 1) {
        document.getElementById('res').innerHTML = `Enter a single alphabet.`;
    }
    else {
        switch (character) {
            case 'a': document.getElementById('res').innerHTML = `${character} is vowel.`;
            break;
            case 'e': document.getElementById('res').innerHTML = `${character} is vowel.`;
            break;
            case 'i': document.getElementById('res').innerHTML = `${character} is vowel.`;
            break;
            case 'o': document.getElementById('res').innerHTML = `${character} is vowel.`;
            break;
            case 'u': document.getElementById('res').innerHTML = `${character} is vowel.`;
            break;
            default: document.getElementById('res').innerHTML = `${character} is consonant.`;
            break;
        }
    }
}
// Case conversion
function convert() {
    var str = document.getElementById('str').value;
    if (str.charCodeAt(0) >= 65 && str.charCodeAt(0) <= 90) {
        document.getElementById('res').innerHTML = `Before: ${str}, After: ${str.toLowerCase()}`;
    }
    else {
        document.getElementById('res').innerHTML = `Before: ${str}, After: ${str.toUpperCase()}`;
    }
}
