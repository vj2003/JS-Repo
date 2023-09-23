function checkLeapYear(){
    var Year=prompt("Enter the year")
    if((Year%4==0 && Year%100!=0 || Year%400==0)){
        document.write( Year,"is a Leap year")
    }
    else{
        document.write(Year,"is not a leap year")
    }
}
(checkLeapYear())