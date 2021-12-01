let a = +prompt("Введите число 1");
let b = +prompt("Введите число 2");
function math(a,b) {     
                    
    if (a > 0&&b >0){
        alert (a - b);
        return;
    }
    if (a < 0&&b <0){
        alert (a * b);
        return;
    }
    if (a > 0&&b <0||a < 0&&b >0){
        alert (a + b);
        return;
    }      
}

let result = math(a,b);
if (result !== undefined) {
    alert(result);
}             