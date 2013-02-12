// JavaScript To Convert Numbers into their Word Equivalent in Tamil
// Developed By : T.Rajkumar t[dot]rajkumar2020[at]gmail[dot]com
// Version : 1.1
// Copyright © : http://www.geekzground.com && http://geekzground.wordpress.com

var onesArray = new Array('சுழியம்', 'ஒன்று', 'இரண்டு', 'மூன்று', 'நான்கு', 'ஐந்து',
    'ஆறு', 'ஏழு', 'எட்டு', 'ஒன்பது', 'பத்து',
    'பதினொன்று', ' பனிரண்டு', 'பதிமூன்று', 'பதினான்கு', 'பதினைந்து',
    'பதினாறு', 'பதினேழு', 'பதினெட்டு', 'பத்தொன்பது');
var tensArray = new Array(' ', ' ', 'இருபது', 'முப்பது', 'நாற்பது', 'ஐம்பது',
    'அறுபது', 'எழுபது', 'எண்பது', 'தொன்னூறு');
var tensArraySuffix = new Array(' ', ' ', 'இருபத்தி', 'முப்பத்தி', 'நாற்பத்தி', 'ஐம்பத்தி', 'அறுபத்தி', 'எழுபத்தி', 'எண்பத்தி', 'தொன்னூற்றி');
var hrdArray = new Array(' ', 'நூறு', 'இரு நூறு', 'முன்னூறு', 'நாநூறு',
    'ஐநூறு', 'அறுநூறு', 'எழுநூறு', 'எண்ணூறு', 'தொள்ளாயிரம்');
var hrdArraySuffix = new Array(' ', 'நூற்றி', 'இருநூற்றி', 'முன்னூற்று', 'நாநூற்று', 'ஐநூற்று', 'அறுநூற்று', 'எழுநூற்று', 'எண்ணூற்று',
    'தொள்ளாயிரத்து');
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
        if (len > 10) document.getElementById("oString").innerHTML = "மன்னிக்கவும்!!! என்னால் பத்து இலக்க எண்கள் வரை மட்டுமே மாற்ற இயலும்...";
        if ((len == 1) || (len == 2)) {
            document.getElementById("oString").innerHTML = twoDigit(num);
        }
        if (len == 3) {
            document.getElementById("oString").innerHTML = threeDigit(num);
        }
        if (len == 4) {
            document.getElementById("oString").innerHTML = fourDigit(num);
        }
        if (len == 5) {
            document.getElementById("oString").innerHTML = fiveDigit(num);
        }
        if (len == 6) {
            document.getElementById("oString").innerHTML = sixDigit(num);
        }
        if (len == 7) {
            document.getElementById("oString").innerHTML = sevenDigit(num);
        }
        if (len == 8) {
            document.getElementById("oString").innerHTML = eightDigit(num);
        }
        if (len == 9) {
            document.getElementById("oString").innerHTML = nineDigit(num);
        }
        if (len == 10) {
            document.getElementById("oString").innerHTML = tenDigit(num);
        }
    }
}

function removeSpl(str) {
    var outStr = '';
    var tamStr = '';
    var validDgt = "0123456789"
    for (var i = 0; i < str.length; i++)
    if (validDgt.indexOf(str.charAt(i)) != -1) 
    {
        tamStr += tamScript(str.charAt(i));
    	outStr += str.charAt(i);
    }
    document.getElementById("numTamil").value = tamStr;
    return outStr;
}

function tamScript(tStr) {
    switch(tStr){
                 case '0':
                  return '0';
                  break;
                 case '1':
                  return '௧';
                  break;
                 case '2':
                  return '௨';
                  break;
                 case '3':
                  return '௩';
                  break;
                 case '4':
                  return '௪';
                  break;
                 case '5':
                  return '௫';
                  break;
                 case '6':
                  return '௬';
                  break;
                 case '7':
                  return '௭';
                  break;
                 case '8':
                  return '௮';
                  break;
                 case '9':
                  return '௯';
                  break;
                } 
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
    if (inp == 1000) return "ஓர் ஆயிரம்";
    if ((inp % 1000 == 0) && (inp != 1000)) return onesArray[tfd] + " ஆயிரம்";
    else {
        return onesArray[tfd] + " ஆயிரத்தி " + threeDigit(inp.toString().substring(1));
    }
}

function fiveDigit(inp) {
    var ttfd = Math.floor(inp / 1000);
    if (inp % 1000 == 0) return twoDigit(ttfd) + " ஆயிரம்";
    else {
        return twoDigit(ttfd) + " ஆயிரத்தி " + threeDigit(inp.toString().substring(2));
    }
}

function sixDigit(inp) {
    var lfd = Math.floor(inp / 100000);
    if (inp % 100000 == 0) return (lfd == 1) ? "ஒரு இலட்சம்" : onesArray[lfd] + " இலட்சம்";
    else {
        chk = parseInt(inp.toString().substring(1), 10)
        if (chk > 999) return (lfd == 1) ? "ஒரு இலட்சத்தி " + fiveDigit(inp.toString().substring(1)) : onesArray[lfd] + " இலட்சத்தி " + fiveDigit(inp.toString().substring(1));
        else if (chk > 99) return (lfd == 1) ? "ஒரு இலட்சத்தி " + threeDigit(chk) : onesArray[lfd] + " இலட்சத்தி " + threeDigit(chk);
        else return (lfd == 1) ? "ஒரு இலட்சத்தி " + twoDigit(chk) : onesArray[lfd] + " இலட்சத்தி " + twoDigit(chk);
    }
}

function sevenDigit(inp) {
    var tlfd = Math.floor(inp / 100000);
    if (inp % 100000 == 0) return twoDigit(tlfd) + " இலட்சம்";
    else {
        chk = parseInt(inp.toString().substring(1), 10)
        if (chk > 999) return twoDigit(tlfd) + " இலட்சத்தி " + fiveDigit(inp.toString().substring(2));
        else if (chk > 99) return twoDigit(tlfd) + " இலட்சத்தி " + threeDigit(chk);
        else return twoDigit(tlfd) + " இலட்சத்தி " + twoDigit(chk);
    }
}

function eightDigit(inp) {
    var cfd = Math.floor(inp / 10000000);
    if (inp % 10000000 == 0) return (cfd == 1) ? "ஒரு கோடி" : onesArray[cfd] + " கோடி";
    else {
        chk = parseInt(inp.toString().substring(1), 10)
        if (chk > 999) return (cfd == 1) ? "ஒரு கோடியே " + sevenDigit(inp.toString().substring(1)) : onesArray[cfd] + " கோடியே " + sevenDigit(inp.toString().substring(1));
        else if (chk > 99) return (cfd == 1) ? "ஒரு கோடியே " + threeDigit(chk) : onesArray[cfd] + " கோடியே " + threeDigit(chk);
        else return (cfd == 1) ? "ஒரு கோடியே " + twoDigit(chk) : onesArray[cfd] + " கோடியே " + twoDigit(chk);
    }
}

function nineDigit(inp) {
    var afd = Math.floor(inp / 100000000);
    if (inp % 100000000 == 0) return (afd == 1) ? "ஓர் அற்புதம்" : onesArray[cfd] + " அற்புதம்";
    else {
        chk = parseInt(inp.toString().substring(1), 10)
        if (chk > 9999999) return (afd == 1) ? "ஓர் அற்புதம் " + eightDigit(inp.toString().substring(1)) : onesArray[afd] + " அற்புதம் " + eightDigit(inp.toString().substring(1));
        else if (chk > 999999) return (afd == 1) ? "ஓர் அற்புதம் " + sevenDigit(inp.toString().substring(2)) : onesArray[afd] + " அற்புதம் " + sevenDigit(inp.toString().substring(2));
        else if (chk > 99999) return (afd == 1) ? "ஓர் அற்புதம் " + sixDigit(inp.toString().substring(3)) : onesArray[afd] + " அற்புதம் " + sixDigit(inp.toString().substring(3));
        else if (chk > 9999) return (afd == 1) ? "ஓர் அற்புதம் " + fiveDigit(inp.toString().substring(4)) : onesArray[afd] + " அற்புதம் " + fiveDigit(inp.toString().substring(4));
        else if (chk > 999) return (afd == 1) ? "ஓர் அற்புதம் " + fourDigit(inp.toString().substring(5)) : onesArray[afd] + " அற்புதம் " + fourDigit(inp.toString().substring(5));
        else if (chk > 99) return (afd == 1) ? "ஓர் அற்புதம் " + threeDigit(chk) : onesArray[afd] + " அற்புதம் " + threeDigit(chk);
        else return (afd == 1) ? "ஓர் அற்புதம் " + twoDigit(chk) : onesArray[afd] + " அற்புதம் " + twoDigit(chk);
    }
}

function tenDigit(inp) {
    var afd = Math.floor(inp / 1000000000);
    if (inp % 1000000000 == 0) return (afd == 1) ? "ஓர் நிகர்ப்புதம்  " : onesArray[cfd] + " நிகர்ப்புதம் ";
    else {
        chk = parseInt(inp.toString().substring(1), 10)
        if (chk > 99999999) return (afd == 1) ? "ஓர் நிகர்ப்புதம் " + nineDigit(inp.toString().substring(1)) : onesArray[afd] + " நிகர்ப்புதம் " + nineDigit(inp.toString().substring(1));
        else if (chk > 9999999) return (afd == 1) ? "ஓர் நிகர்ப்புதம் " + eightDigit(inp.toString().substring(2)) : onesArray[afd] + " நிகர்ப்புதம் " + eightDigit(inp.toString().substring(2));
        else if (chk > 999999) return (afd == 1) ? "ஓர் நிகர்ப்புதம் " + sevenDigit(inp.toString().substring(3)) : onesArray[afd] + " நிகர்ப்புதம் " + sevenDigit(inp.toString().substring(3));
        else if (chk > 99999) return (afd == 1) ? "ஓர் நிகர்ப்புதம் " + sixDigit(inp.toString().substring(4)) : onesArray[afd] + " நிகர்ப்புதம் " + sixDigit(inp.toString().substring(4));
        else if (chk > 9999) return (afd == 1) ? "ஓர் நிகர்ப்புதம் " + fiveDigit(inp.toString().substring(5)) : onesArray[afd] + " நிகர்ப்புதம் " + fiveDigit(inp.toString().substring(5));
        else if (chk > 999) return (afd == 1) ? "ஓர் நிகர்ப்புதம் " + fourDigit(inp.toString().substring(6)) : onesArray[afd] + " நிகர்ப்புதம் " + fourDigit(inp.toString().substring(6));
        else if (chk > 99) return (afd == 1) ? "ஓர் நிகர்ப்புதம் " + threeDigit(chk) : onesArray[afd] + " நிகர்ப்புதம் " + threeDigit(chk);
        else return (afd == 1) ? "ஓர் நிகர்ப்புதம்	 " + twoDigit(chk) : onesArray[afd] + " நிகர்ப்புதம் " + twoDigit(chk);
    }
}
