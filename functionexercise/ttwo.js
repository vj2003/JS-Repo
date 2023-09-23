var side1 = prompt("Enter side1 ");
var side2 = prompt("Enter side2");
var side3 = prompt("Enter side3");
function triangle() {
    if (side1 == side2 && side1 == side3 && side2 == side3) {
        document.write("Equilateral Triangle")
    }
    else if (side1 == side2 || side1 == side3) {
        document.write("Isosceles Triangle")
    }
    else {
        document.write("Scalene Trianle")
    }
}
(triangle())