'use strict';
for(let i = 0;i < 11; i++) {
    if (i == 11){
     continue;       
}
    if (i ==0)    
    console.log(i + " - это ноль");    
    if (i % 2 > 0 )
    console.log(i + " - это нечетное число")
    if (i % 2 < 1&&i!==0)
    console.log(i + " - это четное число")
    continue;

}