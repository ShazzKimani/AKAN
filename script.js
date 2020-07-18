function akanName() {
    var dd = parseInt(document.getElementById("dd").value);
    var mm = parseInt(document.getElementById("mm").value);
    var yy = parseInt(document.getElementById("yy").value);
    var femaleGender = document.getElementById("femaleGender");
    var maleGender = document.getElementById("maleGender");
    var date = new Date(yy + "-" + mm + "-" + dd);
    var dayBorn = date.getDay();

    var maleNames = ["Kwasi", "Kwado", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]; // array of male names
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]; // array of female names
    var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; // array of week days

    if (dd < 1 || dd > 31) {
        alert("Enter a valid day!"); // month validation
      }