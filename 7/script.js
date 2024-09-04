function vowel() {
    var inputString = document.getElementById('inputString').value;
    var a = "";
    var r1 = /a/gi;
    var r2 = /e/gi;
    var r3 = /i/gi;
    var r4 = /o/gi;
    var r5 = /u/gi;

    for (let i = 0; i < inputString.length; i++) {
        if (r1.test(inputString[i])) {
            a += "a";
        }
        if (r2.test(inputString[i])) {
            a += "e";
        }
        if (r3.test(inputString[i])) {
            a += "i";
        }
        if (r4.test(inputString[i])) {
            a += "o";
        }
        if (r5.test(inputString[i])) {
            a += "u";
        }
    }
    document.getElementById('result').innerHTML= "result: "+a;
}
