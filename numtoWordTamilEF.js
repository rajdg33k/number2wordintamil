// JavaScript To Convert Numbers into their Word Equivalent in Tamil
// Developed By : T.Rajkumar t[dot]rajkumar2020[at]gmail[dot]com
// Version : 1.1
// Copyright: © http://www.geekzground.com && http://geekzground.wordpress.com

var onesArray = new Array('suliyam', 'onru', 'irandu', 'moondru', 'naangu', 'aintu',
    'aaru', 'elu', 'ettu', 'onpadhu', 'patthu',
    'pathinondru', 'panirendu', 'pathimoondru', 'pathinaangu', 'pathinainthu',
    'pathinaaru', 'pathinelu', 'pathineetu', 'pathonpadhu');
var tensArray = new Array(' ', ' ', 'irubadhu', 'mopadhu', 'naarpadhu', 'iymbadhu',
    'arupadhu', 'elupadhu', 'enpadhu', 'thonnooru');
var tensArraySuffix = new Array(' ', ' ', 'irubathi', 'moppathi', 'naarpathi', 'aymbathi', 'arubathi', 'elubathi', 'enbathi', 'thonootri');
var hrdArray = new Array(' ', 'nooru', 'irunooru', 'munnooru', 'nanooru',
    'ainooru', 'arunooru', 'elunooru', 'etnooru', 'tholairam');
var hrdArraySuffix = new Array(' ', 'nootri', 'irunootri', 'munnootri', 'naanootri', 'aynootri', 'arunooti', 'elunootri', 'ennootri',
    'tholayirathi');
var chk;

function convToStr() {
    var num = document.getElementById("iNumber").value;
    if (num == "") {
        alert("Please Enter a Number");
    }
    if (num != "") {
        num = document.getElementById("iNumber").value = parseInt(removeSpl(num), 10);
        var sNum = num.toString();
        var len = sNum.length;
        if (len > 10) document.getElementById("oString").innerHTML = "Whoops! I can only handle 10 Digit numbers. Sorry !!!";
        if ((len == 1) || (len == 2)) {
            document.getElementById("oString").innerHTML = capAll(twoDigit(num));
        }
        if (len == 3) {
            document.getElementById("oString").innerHTML = capAll(threeDigit(num));
        }
        if (len == 4) {
            document.getElementById("oString").innerHTML = capAll(fourDigit(num));
        }
        if (len == 5) {
            document.getElementById("oString").innerHTML = capAll(fiveDigit(num));
        }
        if (len == 6) {
            document.getElementById("oString").innerHTML = capAll(sixDigit(num));
        }
        if (len == 7) {
            document.getElementById("oString").innerHTML = capAll(sevenDigit(num));
        }
        if (len == 8) {
            document.getElementById("oString").innerHTML = capAll(eightDigit(num));
        }
        if (len == 9) {
            document.getElementById("oString").innerHTML = capAll(nineDigit(num));
        }
        if (len == 10) {
            document.getElementById("oString").innerHTML = capAll(tenDigit(num));
        }
    }
}

function removeSpl(str) {
    var outStr = '';
    var validDgt = "0123456789"
    for (var i = 0; i < str.length; i++)
    if (validDgt.indexOf(str.charAt(i)) != -1) outStr += str.charAt(i)
    return outStr;
}

function twoDigit(inp) {
    inp = parseInt(inp, 10);
    if (inp < 20) return onesArray[inp];
    if ((inp >= 20) && (inp % 10 == 0)) return tensArray[inp / 10];
    else {
        var tfd = Math.floor(inp / 10);
        var tsd = inp % 10;
        return tensArraySuffix[tfd] + " " + onesArray[tsd];
    }
}

function threeDigit(inp) {
    if (inp % 100 == 0) return hrdArray[inp / 100];
    else {
        var hfd = Math.floor(inp / 100);
        return hrdArraySuffix[hfd] + " " + twoDigit(inp.toString().substring(1));
    }
}

function fourDigit(inp) {
    var tfd = Math.floor(inp / 1000);
    if (inp == 1000) return "aayiram";
    if ((inp % 1000 == 0) && (inp != 1000)) return onesArray[tfd] + " aayiram";
    else {
        if(inp>1000 && inp<2000) return "aayirathi " + threeDigit(inp.toString().substring(1));
        else return onesArray[tfd]+" aayirathi "+threeDigit(inp.toString().substring(1));
    }
}

function fiveDigit(inp) {
    var ttfd = Math.floor(inp / 1000);
    if (inp % 1000 == 0) return twoDigit(ttfd) + " aayiram";
    else {
        return twoDigit(ttfd) + " aayirathi " + threeDigit(inp.toString().substring(2));
    }
}

function sixDigit(inp) {
    var lfd = Math.floor(inp / 100000);
    if (inp % 100000 == 0) return (lfd == 1) ? "oru latcham" : onesArray[lfd] + " latcham";
    else {
        chk = parseInt(inp.toString().substring(1), 10)
        if (chk > 999) return (lfd == 1) ? "oru latchathi " + fiveDigit(inp.toString().substring(1)) : onesArray[lfd] + " latchathi " + fiveDigit(inp.toString().substring(1));
        else if (chk > 99) return (lfd == 1) ? "oru latchathi " + threeDigit(chk) : onesArray[lfd] + " latchathi " + threeDigit(chk);
        else return (lfd == 1) ? "oru latchathi " + twoDigit(chk) : onesArray[lfd] + " latchathi " + twoDigit(chk);
    }
}

function sevenDigit(inp) {
    var tlfd = Math.floor(inp / 100000);
    if (inp % 100000 == 0) return twoDigit(tlfd) + " latcham";
    else {
        chk = parseInt(inp.toString().substring(1), 10)
        if (chk > 999) return twoDigit(tlfd) + " latchathi " + fiveDigit(inp.toString().substring(2));
        else if (chk > 99) return twoDigit(tlfd) + " latchathi " + threeDigit(chk);
        else return twoDigit(tlfd) + " latchathi " + twoDigit(chk);
    }
}

function eightDigit(inp) {
    var cfd = Math.floor(inp / 10000000);
    if (inp % 10000000 == 0) return (cfd == 1) ? "oru kodi" : onesArray[cfd] + " kodi";
    else {
        chk = parseInt(inp.toString().substring(1), 10)
        if (chk > 999) return (cfd == 1) ? "oru kodiyae " + sevenDigit(inp.toString().substring(1)) : onesArray[cfd] + " kodiyae " + sevenDigit(inp.toString().substring(1));
        else if (chk > 99) return (cfd == 1) ? "oru kodiyae " + threeDigit(chk) : onesArray[cfd] + " kodiyae " + threeDigit(chk);
        else return (cfd == 1) ? "oru kodiyae " + twoDigit(chk) : onesArray[cfd] + " kodiyae " + twoDigit(chk);
    }
}

function nineDigit(inp) {
    var afd = Math.floor(inp / 100000000);
    if (inp % 100000000 == 0) return (afd == 1) ? "oru arpudham" : onesArray[cfd] + " arpudham";
    else {
        chk = parseInt(inp.toString().substring(1), 10)
        if (chk > 9999999) return (afd == 1) ? "oru arpudham " + eightDigit(inp.toString().substring(1)) : onesArray[afd] + " arpudham " + eightDigit(inp.toString().substring(1));
        else if (chk > 999999) return (afd == 1) ? "oru arpudham " + sevenDigit(inp.toString().substring(2)) : onesArray[afd] + " arpudham " + sevenDigit(inp.toString().substring(2));
        else if (chk > 99999) return (afd == 1) ? "oru arpudham " + sixDigit(inp.toString().substring(3)) : onesArray[afd] + " arpudham " + sixDigit(inp.toString().substring(3));
        else if (chk > 9999) return (afd == 1) ? "oru arpudham " + fiveDigit(inp.toString().substring(4)) : onesArray[afd] + " arpudham " + fiveDigit(inp.toString().substring(4));
        else if (chk > 999) return (afd == 1) ? "oru arpudham " + fourDigit(inp.toString().substring(5)) : onesArray[afd] + " arpudham " + fourDigit(inp.toString().substring(5));
        else if (chk > 99) return (afd == 1) ? "oru arpudham " + threeDigit(chk) : onesArray[afd] + " arpudham " + threeDigit(chk);
        else return (afd == 1) ? "oru arpudham " + twoDigit(chk) : onesArray[afd] + " arpudham " + twoDigit(chk);
    }
}

function tenDigit(inp) {
    var afd = Math.floor(inp / 1000000000);
    if (inp % 1000000000 == 0) return (afd == 1) ? "oru nigarpudham" : onesArray[cfd] + " nigarpudham";
    else {
        chk = parseInt(inp.toString().substring(1), 10)
        if (chk > 99999999) return (afd == 1) ? "oru nigarpudham " + nineDigit(inp.toString().substring(1)) : onesArray[afd] + " nigarpudham " + nineDigit(inp.toString().substring(1));
        else if (chk > 9999999) return (afd == 1) ? "oru nigarpudham " + eightDigit(inp.toString().substring(2)) : onesArray[afd] + " nigarpudham " + eightDigit(inp.toString().substring(2));
        else if (chk > 999999) return (afd == 1) ? "oru nigararpudham " + sevenDigit(inp.toString().substring(3)) : onesArray[afd] + " nigararpudham " + sevenDigit(inp.toString().substring(3));
        else if (chk > 99999) return (afd == 1) ? "oru nigarpudham " + sixDigit(inp.toString().substring(4)) : onesArray[afd] + " nigarpudham " + sixDigit(inp.toString().substring(4));
        else if (chk > 9999) return (afd == 1) ? "oru nigarpudham " + fiveDigit(inp.toString().substring(5)) : onesArray[afd] + " nigarpudham " + fiveDigit(inp.toString().substring(5));
        else if (chk > 999) return (afd == 1) ? "oru nigarpudham " + fourDigit(inp.toString().substring(6)) : onesArray[afd] + " nigarpudham " + fourDigit(inp.toString().substring(6));
        else if (chk > 99) return (afd == 1) ? "oru nigararpudham " + threeDigit(chk) : onesArray[afd] + " nigarpudham " + threeDigit(chk);
        else return (afd == 1) ? "oru nigarpudham " + twoDigit(chk) : onesArray[afd] + " nigarpudham " + twoDigit(chk);
    }
}

function capAll(strng) {
    strng = strng.toLowerCase().replace(/([-\.']) */g, '$1 ');
    var rx = /\b([a-z'-\.]+)\b/ig;
    strng = strng.replace(rx, function (w) {
        return w.charAt(0).toUpperCase() + w.substring(1);
    });
    return strng.replace(/^ *|(\-|') *| *$/g, '$1');
}
