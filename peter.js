function ReverseDiv(d) {
    if (document.getElementById(d).style.display == "block") {
        document.getElementById(d).style.display = "none"
    } else {
        document.getElementById(d).style.display = "block"
    }
};

function submitThis() {
   // if (accepted) {
        if (document.getElementById("txtpetition").value.length < 3) {
            document.getElementById("output").innerHTML = error_pet;
            document.getElementById("txtpetition").focus()
        } else {
            if (document.getElementById("txtquestion").value.length < 3) {
                document.getElementById("output").innerHTML = O0O0OO0;
                document.getElementById("txtquestion").focus()
            } else {
                document.getElementById("txtpetition").readOnly = true;
                document.getElementById("txtquestion").readOnly = true;
                document.getElementById("btnAsk").style.visibility = "hidden";
                document.getElementById("btnNew").style.visibility = "visible";
                document.getElementById("output").innerHTML = O000O00;
                setTimeout(function(){
                    document.getElementById("output").innerHTML = O0O0O00;
                },1000);
                
                /*
                O0O00OO();
                O0O0OOO.onreadystatechange = OO000OO;
                O0O0OOO.open("POST", "/submitThis.aspx", true);
                O0O0OOO.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                O0O0OOO.send("O000000=" + O000000 + "&txtpetition=" + document.getElementById("txtpetition").value + "&txtquestion=" + document.getElementById("txtquestion").value + "&O0O0O00=" + O0O0O00)
                */
            }
        }
    /*} else {
       // O0OOOOO()

    } */
}

function OO000OO() {
    if (O0O0OOO.readyState == 4) {
        if (O0O0OOO.status == 200) {
            if (O0O0OOO.responseText != null) {
                OO0000O = setTimeout("O00000O()", Math.floor(Math.random() * 3000))
            } else {
                document.getElementById("output").innerHTML = O000O0O
            }
        } else {
            document.getElementById("output").innerHTML = O000O0O + " - Error: " + O0O0OOO.status + " / " + O0O0OOO.statusText
        }
    }
}

function O00000O() {
    clearTimeout(OO0000O);
    document.getElementById("output").innerHTML = O0O0OOO.responseText;
    OO0000O = setTimeout("O00O00O()", 1000)
}

function O0OOOOO() { //post to ajax that echoes string
  //  O0O00OO();
    // O0O0OOO.onreadystatechange = OO00000;
    // O0O0OOO.open("POST", "/O0OOOOO.aspx", true);
    // O0O0OOO.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    // O0O0OOO.send("O000000=" + O000000);
    document.getElementById("divLicense").innerHTML = O000OO0;
    OO00O00(true)
}

function OO00000() {
       OO00O00(true);
   //  document.getElementById("divLicense").innerHTML = O0O0OOO.responseText;
                document.getElementById("btnAcceptLic").focus()

    //if (O0O0OOO.readyState == 4) {
   //     if (O0O0OOO.status == 200) {
        /*    if (O0O0OOO.responseText != null) {
                OO00O00(true);
                document.getElementById("divLicense").innerHTML = O0O0OOO.responseText;
                document.getElementById("btnAcceptLic").focus()
            } else {
                */
               // OO00O00(false);
                //document.getElementById("O0OO000").innerHTML = O000O0O
          //  }
        //} else {
         //  OO00O00(false);
       // document.getElementById("O0OO000").innerHTML = O000O0O + " - Error: " + O0O0OOO.status + " / " + O0O0OOO.statusText
       // }
   // }
}

function OO00O00(OO00O0O) {
    if (OO00O0O) {
        document.getElementById("divPlayArea").style.display = "none";
        document.getElementById("divLicense").style.display = ""
    } else {
        document.getElementById("divLicense").style.display = "none";
        document.getElementById("divPlayArea").style.display = ""
    }
}
var O0O0O00 = "";
var O0000OO = false;
var O00O0OO = -1;
var O00OO00 = -1;
var accepted = false;
var O0O0OOO;

function AcceptLicense() {
    accepted = true;
    OO00O00(false);
    submitThis()
}

function DeclineLicense() {
    OO00O00(false);
    accepted = false;
    reset();
}

function reset() {
    O0O0O00 = "";
    O0000OO = false;
    document.getElementById("txtpetition").value = "";
    document.getElementById("txtquestion").value = "";
    document.getElementById("txtpetition").readOnly = false;
    document.getElementById("txtquestion").readOnly = false;
    document.getElementById("btnAsk").style.visibility = "visible";
    document.getElementById("output").innerHTML = "";
    document.getElementById("btnNew").style.visibility = "hidden";
    document.getElementById("txtpetition").focus()
}

function O0O00OO() {
    if (window.XMLHttpRequest) {
        O0O0OOO = new XMLHttpRequest()
    } else {
        if (window.ActiveXObject) {
            try {
                O0O0OOO = new ActiveXObject("Msxml2.XMLHTTP")
            } catch (e) {
                try {
                    O0O0OOO = new ActiveXObject("Microsoft.XMLHTTP")
                } catch (e) {
                    O0O0OOO = false
                }
            }
        } else {
            O0O0OOO = false
        }
    }
}

function O00O00O() {
    clearTimeout(OO0000O);
    if (document.getElementById("btnNew").style.visibility == "visible") {
        document.getElementById("btnNew").focus()
    }
}

function O000OOO(e) {
    var O0000O0;
    if (window.event) {
        if (window.event.type == "keydown") {
            O00OO00 = -1
        }
        if (window.event.type == "keypress") {
            O00OO00 = window.event.keyCode
        }
        if (parseInt(O00OO00) > 0) {
            O0000O0 = O00OO00
        } else {
            O0000O0 = window.event.keyCode
        }
    } else {
        if (e.type == "keydown") {
            O00O0OO = e.which;
            O00OO00 = -1
        }
        if (e.type == "keypress") {
            O00OO00 = e.which
        }
        if (parseInt(O00OO00) > 0) {
            O0000O0 = O00OO00
        } else {
            if ((parseInt(O00O0OO) > 0) && (e.which < 1)) {
                O0000O0 = O00O0OO
            } else {
                O0000O0 = e.which
            }
        }
    }
    return (parseInt(O0000O0))
}

function O00OOO0(e) {
    var O0000O0 = O000OOO(e);
    if ((O0000O0 == 8) && (O0000OO)) {
        O0O000O(e)
    }
}

function O00OOOO(e, O0OOOO0) {
    if (document.getElementById("txtpetition").readOnly == false) {
        if (document.getElementById("txtpetition").value == "") {
            O0O0O00 = "";
            O0000OO = false
        }
        O000OOO(e);
        if ((O00OO00 == 58) || (O00OO00 == 13)) {
            document.getElementById("txtquestion").focus();
            if (O00OO00 == 58) {
                O0OOOO0.value += ":"
            }
            return false
        } else {
            if ((O0000OO) || (O00OO00 == 46)) {
                if (O00OO00 == 46) {
                    O0000OO = !O0000OO
                }
                if ((O00OO00 != 8) && (O00OO00 != 0)) {
                    O0O00O0(e, O0OOOO0);
                    return false
                }
            } else {
                if ((O0OOOO0.value.length == 0) && (O00OO00 != 8) && (O00OO00 != 0)) {
                    O0OOOO0.value += String.fromCharCode(O00OO00).toUpperCase();
                    return false
                }
            }
        }
        return true
    } else {
        return false
    }
}

function O0O00O0(e, O0OOOO0) {
    if ((O00OO00 != 58) && (O00OO00 != 13)) {
        if ((O00OO00 != 46) && (O00OO00 != 13)) {
            O0O0O00 += String.fromCharCode(O00OO00)
        }
        var O0OOO0O = O0OOOO0.value.length;
        if (O0OOO0O < mask.length) {
            O00O0O0 = mask.charAt(O0OOO0O)
        } else {
            O00O0O0 = " "
        }
        document.getElementById("txtpetition").value += O00O0O0
    }
}

function O0O000O(e) {
    if (O0O0O00.length > 0) {
        O0O0O00 = O0O0O00.substring(0, O0O0O00.length - 1)
    }
    if (document.getElementById("txtpetition").length == 0) {
        O0000OO = false
    }
}

function O0O0000(e, O0OOOO0) {
    O000OOO(e);
    if ((O0OOOO0.value.length == 0) && (O00OO00 != 0) && (O00OO00 != 8) && (O00OO00 != 63) && (O00OO00 != 13)) {
        O0OOOO0.value += String.fromCharCode(O00OO00).toUpperCase();
        return false
    }
    if (((O00OO00 == 63) || (O00OO00 == 13)) && (!document.getElementById("txtquestion").readOnly)) {
        document.getElementById("txtquestion").blur();
        submitThis();
        if (O00OO00 == 63) {
            O0OOOO0.value += "?"
        }
        return false
    }
    return true
};