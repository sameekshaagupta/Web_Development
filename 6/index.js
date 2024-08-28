function test(){
    var method = document.getElementById("method").value;
    if(method == "normal"){
        var rexp = /F203/;
        var enter=document.getElementById('inputString').value;
        if(rexp.test(enter)){
            alert("true")
        }
        else{
            alert("false");
        }
    }
    else if(method == "i"){
        var rexp = /F203/i;
        var enter=document.getElementById('inputString').value;
        if(rexp.test(enter)){
            alert("true")
        }
        else{
            alert("false");
        }
    }
    else if(method == "gi"){
        var rexp = /F203/gi;
        var enter=document.getElementById('inputString').value;
        if(rexp.test(enter)){
            alert("true")
        }
        else{
            alert("false");
        }
    }
}