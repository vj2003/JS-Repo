var month = prompt("enter a month")
var year = prompt("enter a year")
function isLeapYear() {

    return (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0));
}
document.write(isLeapYear())
function findDaysInMonth() {

    if (month < 1 || month > 12) {
        document.write("Invalid Month of value")
        return;
    }
    if (month == 2) {
        if (isLeapYear()) {
            document.write("The Month has 29 days")
        }
        else {
            document.write("The Month has 28 days")
        }
    }
    else if (month == 4 || month == 6 || month == 9 || month == 11) {
        document.write("The Month has 30 days")
    }
    else {
        document.write("The Month has 31 days")
    }
}

findDaysInMonth()
