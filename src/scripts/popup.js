import {buttonAddToCart} from './variables';
import {popup} from './variables';
import {cartItems} from './cart-items';
import {clearAllClasses} from './utils';
import { clearInfo } from './utils';
import { calculateTotal } from './utils';
import { createDives } from './utils';
import { findLastDiv } from './utils';
import { findPopupDivTotal } from './utils';

    

const cart = document.querySelector(".main-menu__cart");

export function openPopup () {
    popup.style.display = "block";
}

export function closePopup (event) {
    if(popup.style.display !== "none" && event.currentTarget !== popup){
    popup.style.display = "none"; 
    }
}




export function createPopup () {
        
    const cartItem = cartItems;

    const divPopupTotal = createDives(cartItem);

    
    /*const total = calculateTotal(cartItem);
    const divPopupTotal = document.createElement("div");
    divPopupTotal.className = "popup__divTotal";
    divPopupTotal.innerHTML = "total: " + total + " $";*/

    const lastDiv = findLastDiv();
  
     
    lastDiv.after(divPopupTotal);
    
}

cart.addEventListener("click",openPopup);
buttonAddToCart.addEventListener("click",createPopup);
document.addEventListener("click",closePopup, true);