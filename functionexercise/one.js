var num1=prompt("Enter First Number");
var num2=prompt("Enter Second Number");
var num3=prompt("Enter Third Number");
function numb(){
    if (num1>num2 && num1>num3){
        document.write("A is Greater")
    }
    else if(num2<num3){
        document.write("C is Greater")
    }
    else{
        document.write("Print Number Three")
    }
}
(numb())