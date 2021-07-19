//File currently not in use, couldn't figure out why using buttons to update calendar wasn't working
var jan = document.getElementById("Jan");
var title = document.getElementById("nav-title");
var monthhbar = document.getElementById("monthbar");
var col1 = document.getElementById("col1");

document.getElementById("Jan").addEventListener("click", updateJan());



function updateJan() {
    col1.innerHTML = "potato";
}