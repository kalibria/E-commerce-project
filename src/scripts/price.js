import {AquamarinePrice} from './variables';
import {othersPrice} from './variables';
import { boxForm } from './variables';

const form = document.querySelector(".description__color");



export function priceFixing () {
    const boxPrice = document.getElementById("price-block-1");
    console.log("boxPrice", parseInt(boxPrice.textContent));

    boxForm.forEach(function(item){
        if(item.checked){
            if(item.value == "Aquamarine"){
                boxPrice.innerHTML = AquamarinePrice + " $";
            }else{
                boxPrice.innerHTML = othersPrice + " $";
            };
        }
    })

    
}

form.addEventListener("click", priceFixing);

