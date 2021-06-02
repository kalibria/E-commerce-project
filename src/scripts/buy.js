import {getCurrentInputValue} from './quantity';

const buttonBuy = document.getElementById("button__buy");
console.log("btnBuy",buttonBuy);

export function getItemToCart () {
    let cart = window.getComputedStyle(document.querySelector(".main-menu__cart"), ":after").content;
    console.log("cartValue", cart);
    const quantityItem = getCurrentInputValue();
    console.log("qty", quantityItem);
    cart += quantityItem;
    cart.innerHtml = "cart";
    console.log("cart2", cart);
    
}

getItemToCart();


buttonBuy.addEventListener("click", getItemToCart);