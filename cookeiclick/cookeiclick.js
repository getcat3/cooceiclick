//initial number of cookies    
let num = 0;

window.onload = function () {
        const name = prompt("What is your name");
        
        const space = document.getElementById("space");
        
        space.innerHTML = name + "'s Bakery";
}

const cookie = document.getElementById("cookie");

function cookieClick() { 
    num += 1;

    const numbers = document.getElementById("numbers");
    
    //upgrade level for printing
    const upgradeLevel = document.getElementById("upgradeLevel");
    
    numbers.innerHTML = num;      
    //automatic Granny upgrade to 2x
    if(num >= 30 ){
        num += 2;
        upgradeLevel.innerHTML = "Granny Level";
    }

    //automatic factory upgrade to 10x
    if(num >= 500) {
        num += 10;
        upgradeLevel.innerHTML = "Factory Level";
    }

    //automatic plant upgrade to 30x
    if(num >= 1000) {
        num += 30;
        upgradeLevel.innerHTML = "Plant Level";
    }

    //automatic super factory upgrade to 1000x
    if(num >= 100000) {
        num += 1000;
        upgradeLevel.innerHTML = "Super-Plant Level";
    }
}
