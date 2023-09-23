var num = prompt("Enter the number ");
var start = prompt("Enter the start");
var range = prompt("Enter the range");
function sum() {
    if (num>=start && num<=range) {
        document.write("Between the range", "<br>")
    }
    else {
        document.write("Outside the range")
    }
}
(sum())