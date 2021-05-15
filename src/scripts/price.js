const form = document.querySelector(".description__color");
console.log("Allform", form);

function priceFixing () {
    const boxPrice = document.getElementById("price-block-1");
    const boxForm = document.getElementsByName("color");
    console.log("price", boxPrice);
    console.log("form", boxForm);

    boxForm.forEach(function(item){
        if(item.checked){
            console.log(item.checked);
            if(item.value !== "Aquamarine"){
                boxPrice.innerHTML = "88888 $"
            }else{
                boxPrice.innerHTML = "99999 $"
            }
        }
    })
}

form.addEventListener("click", priceFixing);

