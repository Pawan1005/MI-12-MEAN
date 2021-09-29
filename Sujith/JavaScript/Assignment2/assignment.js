// Finding second largest
function getLargest() {
    var n1, n2, n3, n4, n5, temp;
    n1 = parseInt(document.getElementById("num1").value);
    n2 = parseInt(document.getElementById("num2").value);
    n3 = parseInt(document.getElementById("num3").value);
    n4 = parseInt(document.getElementById("num4").value);
    n5 = parseInt(document.getElementById("num5").value);
    let nums = [n1, n2, n3, n4, n5];
    nums = nums.sort();
    document.getElementById('res').innerHTML = `Second Largest: ${nums[nums.length-2]}`;
}
// Finding grade
function calculate() {
    var s1, s2, s3, s4, s5, total, grade;
    s1 = parseInt(document.getElementById("sub1").value);
    s2 = parseInt(document.getElementById("sub2").value);
    s3 = parseInt(document.getElementById("sub3").value);
    s4 = parseInt(document.getElementById("sub4").value);
    s5 = parseInt(document.getElementById("sub5").value);
    total = s1 + s2 + s3 + s4 + s5;
    grade = total / 500 * 100;
    if (grade < 100 && grade > 75) {
        document.getElementById('res').innerHTML = 'Grade: A';
    }
    else if (grade < 74 && grade > 60) {
        document.getElementById('res').innerHTML = 'Grade: B';
    }
    else if (grade < 59 && grade > 40) {
        document.getElementById('res').innerHTML = 'Grade: C';
    }
    else if (grade < 40 && grade > 30) {
        document.getElementById('res').innerHTML = 'Grade: D';
    }
    else {
        document.getElementById('res').innerHTML = 'Grade: F';
    }
}
