import {getCurrentInputValue} from './quantity';
import {cart} from './variables';
import {buttonAddToCart} from './variables';

export function getItemToCart (event) {
    event.preventDefault();
    let cartQty = Number(cart.textContent);
    
    const quantityItem = getCurrentInputValue();

    cartQty += quantityItem;
    cart.innerHTML = cartQty; 
    return cartQty;  
    
}


buttonAddToCart.addEventListener("click", getItemToCart);