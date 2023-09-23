function my(){
    var a=5;
     b=6;
     
     let numq= prompt("Enter a operater")
    switch(numq){
    case "add":
       let add=a+b;
        console.log(add);
        break;
    case "sub":
        let sub=a-b;
        console.log(sub);
        break;
    case "division":
        let div=a/b;
        console.log(div);
        break;
    case "modulus":
        let mod=a%b;
        console.log(mod);
        break;
    case "mulp":
        let multi=a*b;
        console.log(mul);
        break;
    default:
        console.log = "invaild";
    }   

    }
my()