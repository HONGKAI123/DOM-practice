function add (num1, num2){
    return num1 +num2;

}

function subract(num1,num2){
    return num1 - num2;
}

function mulp(num1,num2){
    return num1 * num2;
}

function divide(num1,num2){
    return num1/num2;
}

function cal(num1,num2, result){
   return result(num1, num2)
}


console.log(cal(3,4,mulp))