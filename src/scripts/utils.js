import {cartItems} from "./cart-items";
import {updateTotalInCartPopup} from "./popup";

export function clearAllClasses (element) {
    const classes = element.classList;
    const arrayOfClasses = Array.from(classes);
    arrayOfClasses.forEach(function (item) {
        element.classList.remove(item)
    })
}

export function createDives (array) {
        const popup = document.querySelector(".cart__popup");

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

        // const divPopupTotal = document.createElement("div");
        // divPopupTotal.className = "popup__divTotal";
        // //divPopupTotal.innerHTML = "total: " + total + " $";

        const i = array.length - 1;

        clearAllClasses(array[i]['photo']);
        console.log("lastImg", array[i]['photo']);

        divPopupPhoto.append(array[i]['photo']);
        array[i]['photo'].classList.add('popupPhotoImg');

        divPopupName.append(array[i]['name']);
        divPopupColor.append(array[i]['color']);
        divPopupQty.append(array[i]['quantity'] + " pc");
        divPopupPrice.append(array[i]['price'] + " $");
        // divPopupTotal.append("total " + array[i]["total"] + " $");

        const total = calculateTotal(array);
        updateTotalInCartPopup(total);

        return divPopup;
        // return divPopupTotal;
}

export function calculateTotal (arrayItems) {
  let total = 0;

  arrayItems.forEach(function(item){
      total += item['price'];
  })

  return total
}


export function findLastDiv () {
    const divsPopup = document.querySelectorAll(".popup__div");
    const arrayDivs = Array.from(divsPopup);
    const lastDiv = arrayDivs[arrayDivs.length - 1];

    return lastDiv;
}

export function findPopupDivTotal () {
    const divsPopupTotal = document.querySelectorAll(".popup__divTotal");
    console.log("divsPopupTotal", divsPopupTotal);
    const arrayDivPopupTotal = Array.from(divsPopupTotal);
    console.log("arrayDivPopupTotal", arrayDivPopupTotal);
    if(arrayDivPopupTotal.length >= 1){
        const lastDivTotal = arrayDivPopupTotal[arrayDivPopupTotal.length - 1];
            if (arrayDivPopupTotal.length >1){
                do {arrayDivPopupTotal.splice(0)}
                while(lastDivTotal);
                return lastDivTotal;

                console.log("lastDivTotal", arrayDivPopupTotal[arrayDivPopupTotal.length - 1] )
            }
    }
    return arrayDivPopupTotal;
}
