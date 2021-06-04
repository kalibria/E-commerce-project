import {getCurrentInputValue} from './quantity';

const buttonAddToCart = document.getElementById("button__buy");
console.log("btnBuy",buttonAddToCart);

export function getItemToCart (event) {
    event.preventDefault();
    let cart = document.querySelector(".quantity__number");
    let cartQty = Number(cart.textContent);
    
    const quantityItem = getCurrentInputValue();

    cartQty += quantityItem;
    cart.innerHTML = cartQty; 
    return cartQty;  
    
}


buttonAddToCart.addEventListener("click", getItemToCart);