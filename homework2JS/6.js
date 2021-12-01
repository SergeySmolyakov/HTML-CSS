let rub = prompt("Введите какую сумму вы хотели бы внести");    
    function contribution(rub) { 
        
        if (rub==11||rub==12||rub==13||rub==14){
            alert(`Ваш вклад составил ${rub} рублей` );
            return;
        }
        conv = rub % 10;
                    
        if (rub === ""){
            alert("Вы ничего не ввели");
            return;
        }
        
        if (rub === null) {
            alert("Вы отменили ввод");
            return;
        }        
        conv = Number (conv);
                        
        if (isNaN(rub)){
            alert("Вы ввели не число");
            return;
        }
        
            
        if (conv===1){
            alert(`Ваш вклад составил ${rub} рубль` );
            return;
        }
        if (conv===2||conv===3||conv===4){
            alert(`Ваш вклад составил ${rub} рубля` );
            return;
        }
        
        if (conv!==1||conv!==2||conv!==3||conv!==4){
            alert(`Ваш вклад составил ${rub} рублей` );
            return;
        }
     }    
    let result = contribution(rub);
    if (result !== undefined) {
        alert(result);
    }    