function validateForm() {
    if (!checkFilmName())    return false;
    if (!checkYear())        return false;
    if (!checkSynopsis())    return false;
    if (!checkReview())      return false;
    if (!checkLength())      return false;
    if (!checkGenre())       return false;
    return true;
}


function checkFilmName() {
    var filmname = document.getElementById("filmname").value;
    if (filmname.trim().length == 0) {
        document.getElementById("namestatus").innerHTML   = "enter film name";
        document.getElementById("namestatus").style.color = "red";
        return false;
    } else {
        document.getElementById("namestatus").innerHTML   = "";
        document.getElementById("namestatus").style.color = "black";
    }
    return true;
}

function checkYear() {
    var year = Number(document.getElementById("year").value);
    if (year < 1895 || year > 2022) {
        document.getElementById("yearstatus").innerHTML   = "enter release year";
        document.getElementById("yearstatus").style.color = "red";
        return false;
    } else {
        document.getElementById("yearstatus").innerHTML   = "";
        document.getElementById("yearstatus").style.color = "black";
    }
    return true;
}

function checkSynopsis() {
    var reviewtext = document.getElementById("synopsis").value;
    if (reviewtext.trim().length < 20) {
        document.getElementById("synstatus").innerHTML   = "enter brief synopsis (20+ chars)";
        document.getElementById("synstatus").style.color = "red";
        return false;
    } else {
        document.getElementById("synstatus").innerHTML   = "";
        document.getElementById("synstatus").style.color = "black";
    }
    return true;
}

function checkReview() {
    var reviewtext = document.getElementById("review").value;
    if (reviewtext.trim().length < 100) {
        document.getElementById("reviewstatus").innerHTML   = "enter your review (100+ chars)";
        document.getElementById("reviewstatus").style.color = "red";
        return false;
    } else {
        document.getElementById("reviewstatus").innerHTML   = "";
        document.getElementById("reviewstatus").style.color = "black";
    }
    return true;
}

function checkLength() {
    var len = Number(document.getElementById("length").value);
    if (len < 1 || len > 240) {
        document.getElementById("lentype").innerHTML      = "";
        document.getElementById("lengthstatus").innerHTML   = "enter run time (1-240 minutes)";
        document.getElementById("lengthstatus").style.color = "red";
        return false;
    } else {
        document.getElementById("lengthstatus").innerHTML   = "";
        document.getElementById("lengthstatus").style.color = "black";
    }
    if (len<=40) {
        document.getElementById("lentype").innerHTML = "shorts section";
    } else {
        document.getElementById("lentype").innerHTML = "full length feature";
    }
    return true;
}

function checkGenre() {
    var genresSelected =
        document.getElementById("genreDoc").checked +
        document.getElementById("genreScifi").checked +
        document.getElementById("genreHorror").checked +
        document.getElementById("genreDrama").checked +
        document.getElementById("genreComedy").checked +
        document.getElementById("genreAction").checked;
    if (genresSelected < 1) {
        document.getElementById("genrestatus").innerHTML    = "select at least one genre";
        document.getElementById("genrestatus").style.color  = "red";
        return false;
    } else {
        document.getElementById("genrestatus").innerHTML   = "";
        document.getElementById("genrestatus").style.color = "black";
    }

    return true;
}
