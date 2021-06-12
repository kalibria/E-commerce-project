import {AquamarinePrice} from './variables';
import {othersPrice} from './variables';
import { boxForm as radioButtons } from './variables';


const btnPlus = document.querySelector(".quantity__increase");
const btnMinus = document.querySelector(".quantity__decrease");

const priceBox = document.getElementById("price-block-1");
let price = document.getElementById("price-block-1").textContent;
const MIN_VALUE = 1;
const MAX_VALUE = 10;

export function getCurrentInputValue() {
    return Number(document.getElementById("quantity").value);
}

export function getSelectedColor (){
    
    const { value: color } = Array.from(radioButtons).find(function(item){
        return Boolean(item.checked)
    })

    return color;
}



export function increaseValue () { 
    const input = document.getElementById("quantity");
    const value = getCurrentInputValue();
    
    if (value >= MAX_VALUE){
        return;
    } else {
        const newValue = value + 1;
        input.value = newValue;

        let color = getSelectedColor();
        if(color == "Aquamarine" ){
            price = AquamarinePrice * newValue;
            priceBox.textContent = price + " $";
        }else{
            price = othersPrice * newValue;
            priceBox.textContent = price + " $";
        } 
        
        return price;
    }  
}

function decreaseValue () {
    const input = document.getElementById("quantity");
    const value = getCurrentInputValue();

    if(value <= MIN_VALUE){
        return;
    }else{
        const newValue = value - 1;
        input.value = newValue;

        let color = getSelectedColor();
        if(color == "Aquamarine" ){
            price = AquamarinePrice * newValue;
            priceBox.textContent = price + " $";
        }else{
            price = othersPrice * newValue;
            priceBox.textContent = price + " $";
        }
    }
}

btnPlus.addEventListener("click", increaseValue);
btnMinus.addEventListener("click", decreaseValue);
