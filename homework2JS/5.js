function addition(a,b) { 
    return (a + b);    
}
function subtraction(a,b) { 
    return (a - b);
}
function division(a,b) { 
    return (a / b);
}
function multiplication(a,b) { 
    return (a * b);
}
function mathOperation(arg1, arg2, operation) {
switch (operation){
    case "addition":
        return addition(arg1, arg2);
    case "subtraction":
        return subtraction(arg1, arg2);
    case "division":
        return division(arg1, arg2);
    case "multiplication":
        return multiplication(arg1, arg2);
}
}
console.log(mathOperation(5,6,"addition"));
console.log(mathOperation(5,6,"subtraction"));
console.log(mathOperation(5,6,"division"));
console.log(mathOperation(5,6,"multiplication"));