const form = document.querySelector(".description__color");

function priceFixing () {
    const boxPrice = document.getElementById("price-block-1");
    const boxForm = document.getElementsByName("color");

    boxForm.forEach(function(item){
        if(item.checked){
            if(item.value !== "Aquamarine"){
                boxPrice.innerHTML = "88888 $"
            }else{
                boxPrice.innerHTML = "99999 $"
            }
        }
    })
}

form.addEventListener("click", priceFixing);

