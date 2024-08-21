function applyMethod() {
    
    var b = document.getElementById("inputString").value;
    var method = document.getElementById("methodSelect").value;
    var extra = document.getElementById("extraInput").value;
    var a;
    
    switch (method) {
        case "charAt":
            a = b.charAt(parseInt(extra));
            alert(a);
            break;
        case "charCodeAt":
            a = b.charCodeAt(parseInt(extra));
            alert(a);
            break;
        case "concat":
            a = b.concat(extra);
            alert(a);
            break;
        case "endsWith":
            a = b.endsWith(extra);
            alert(a);
            break;
        case "includes":
            a = b.includes(extra);
            alert(a);
            break;
        case "indexOf":
            a = b.indexOf(extra);
            alert(a);
            break;
        case "lastIndexOf":
            a = b.lastIndexOf(extra);
            alert(a);
            break;
        case "replace":
            a = b.replace(extra.split(",")[0], extra.split(",")[1]);
            alert(a);
            break;
        case "search":
            a = b.search(extra);
            alert(a);
            break;
        case "slice":
            a = b.slice(parseInt(extra.split(",")[0]), parseInt(extra.split(",")[1]));
            alert(a)
            break;
        case "split":
            a = b.split(extra);
            alert(a);
            break;
        case "startsWith":
            a = b.startsWith(extra);
            alert(a);
            break;
        case "substr":
            a = b.substr(parseInt(extra.split(",")[0]), parseInt(extra.split(",")[1]));
            alert(a);
            break;
        case "substring":
            a = b.substring(parseInt(extra.split(",")[0]), parseInt(extra.split(",")[1]));
            alert(a);
            break;
        case "toLowerCase":
            a = b.toLowerCase();
            alert(a);
            break;
        case "toUpperCase":
            a = b.toUpperCase();
            alert(a);
            break;
        case "trim":
            a = b.trim();
            alert(a);
            break;
        }
    }
    