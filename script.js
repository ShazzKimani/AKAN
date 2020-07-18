function akanName() {
    var dd = parseInt(document.getElementById("dd").value);
    var mm = parseInt(document.getElementById("mm").value);
    var yy = parseInt(document.getElementById("yy").value);
    var femaleGender = document.getElementById("femaleGender");
    var maleGender = document.getElementById("maleGender");
    var date = new Date(yy + "-" + mm + "-" + dd);
    var dayBorn = date.getDay();