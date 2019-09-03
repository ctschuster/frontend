function reviewNotEmpty() {
   var reviewtext = document.getElementById("review").value;
   if (reviewtext.length() > 0)
       document.getElementById("").innerHTML   = "";
   else
       document.getElementById("").innerHTML   = "Please enter some review text";
       document.getElementById("").style.color = "red";
}
