import {buttonAddToCart} from './variables';
import {getSelectedColor} from './quantity';
import {getCurrentInputValue} from './quantity';
import { increaseValue} from './quantity';

export const cartItems = [];


export function CreateNewItemInCart () {
    let item = {};
    let currentPrice = document.querySelector(".price__item").textContent;
    item["price"] = parseInt(currentPrice,10);
    item["name"] = document.querySelector(".description__text > h5").textContent;
    item["color"] = getSelectedColor ();
    item["quantity"] = getCurrentInputValue ();
    const photoFromDivPhotosBig = document.querySelector(".photos__big > img");
    item["photo"] = photoFromDivPhotosBig.cloneNode(true);
    console.log("photo", item["photo"]);
    console.log("name", item);
    cartItems.push(item);
    console.log("arr", cartItems);

}

buttonAddToCart.addEventListener("click", CreateNewItemInCart);


