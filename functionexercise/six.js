function Grade(){
    var mark=prompt("Enter the mark")
    if(mark>=90 && mark<=100){
        document.write("S grade")
    }
    else if(mark>=80 && mark<90){
        document.write("A grade")
    }
    else if(mark>=70 && mark<80){
        document.write("B grade")
    }
    else if(mark>=60 && mark<70){
        document.write("C grade")
    }
    else if(mark>=50 && mark<60){
        document.write("D grade")
    }
    else if(mark>=40 && mark<50){
        document.write("E grade")
    }
    else if(mark>=0 && mark<40){
        document.write("Student has failed")
    }
    else{
        document.write("Invalid Marks")
   }
}
(findGrade())
