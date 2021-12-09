'use strict';
let mound = "x";
console.log(mound);
for(let x = 0;x < 20; x++) {
    {
        console.log (mound += "x") 
        continue; 
   }
}