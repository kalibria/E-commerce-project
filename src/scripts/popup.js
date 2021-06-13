import {buttonAddToCart} from './variables';
import {popup} from './variables';
import {cartItems} from './cart-items';
import {clearAllClasses} from './utils';

const cart = document.querySelector(".main-menu__cart");

export function openPopup () {
    popup.style.display = "block";
}

export function closePopup (event) {
    if(event.currentTarget !== popup){
    popup.style.display = "none";
    }
}

export function createDive () {
    const divPopup = document.createElement("div");
    divPopup.className = "popup__div";
    popup.append(divPopup);

    const divPopupPhoto = document.createElement("div");
    divPopupPhoto.className = "popup__div-photo";
    divPopup.append(divPopupPhoto);

    const divSectionInfo = document.createElement("div");
    divSectionInfo.className = "popup__section-info";
    divPopup.append(divSectionInfo);

    const divPopupName = document.createElement("p");
    divPopupName.className = "popup__div-name";
    divSectionInfo.append(divPopupName);

    const divPopupColor = document.createElement("p");
    divPopupColor.className = "popup__div-color";
    divSectionInfo.append(divPopupColor);

    const divPopupQty = document.createElement("p");
    divPopupQty.className = "popup__div-qty";
    divSectionInfo.append(divPopupQty);

    const divPopupPrice = document.createElement("div");
    divPopupPrice.className = "popup__div-price";
    divSectionInfo.append(divPopupPrice);


    const cartItem = cartItems;
    cartItem.forEach(element => {
        clearAllClasses(element['photo']);
        console.log(element['photo']);
        divPopupPhoto.append(element['photo']);
        element['photo'].classList.add('popupPhotoImg');

        divPopupName.append(element['name']);
        divPopupColor.append(element['color']);
        divPopupQty.append(element['quantity'] + " pc");
        divPopupPrice.append(element['price'] + " $");


        

    });

    
}

cart.addEventListener("click",openPopup);
buttonAddToCart.addEventListener("click",createDive);
document.addEventListener("click",closePopup, true);