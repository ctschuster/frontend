function validateForm() {
    if (!checkFilmName())    return false;
    if (!checkSynopsis())    return false;
    if (!validateReview())   return false;
    if (!validateLength())   return false;
    if (!ValidateGenre())    return false;
    return true;
}


function checkFilmName() {
    var filmname = document.getElementById("filmname").value;
    if (filmname.trim().length == 0) {
        document.getElementById("namestatus").innerHTML   = "enter film name";
        document.getElementById("namestatus").style.color = "red";
    } else {
        document.getElementById("namestatus").innerHTML   = "";
        document.getElementById("namestatus").style.color = "black";
    }
    return true;
}

function checkSynopsis() {
    var reviewtext = document.getElementById("synopsis").value;
    if (reviewtext.trim().length == 0) {
        document.getElementById("synstatus").innerHTML   = "enter brief synopsis";
        document.getElementById("synstatus").style.color = "red";
    } else {
        document.getElementById("synstatus").innerHTML   = "";
        document.getElementById("synstatus").style.color = "black";
    }
    return true;
}

function validateReview() {
    var reviewtext = document.getElementById("review").value;
    if (reviewtext.trim().length == 0) {
        document.getElementById("reviewstatus").innerHTML   = "enter your review";
        document.getElementById("reviewstatus").style.color = "red";
    } else {
        document.getElementById("reviewstatus").innerHTML   = "";
        document.getElementById("reviewstatus").style.color = "black";
    }
    return true;
}

function validateLength() {
    document.getElementById("lengthstatus").innerHTML = "";
    var len = document.getElementById("length").trim().value;
    if (len<=40) {
        document.getElementById("lentype").innerHTML = "shorts section";
    } else {
        document.getElementById("lentype").innerHTML = "full length feature";
    }
    return true;
}

function ValidateGenre() {
    return true;
}
