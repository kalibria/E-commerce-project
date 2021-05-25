const btnPlus = document.querySelector(".quantity__increase");
const btnMinus = document.querySelector(".quantity__decrease");
const input = document.getElementById("quantity");
let inputValue = Number(document.getElementById("quantity").value);

const one = 1;

function increaseValue () { 
    if(input.value > 100){
        return;
    }else {
        input.value = inputValue += one;
    }  
}

function decreaseValue () {
    if(input.value < 1){
        return;
    }else{
        input.value = inputValue -= one;
    }
}

btnPlus.addEventListener("click", increaseValue);
btnMinus.addEventListener("click", decreaseValue);
