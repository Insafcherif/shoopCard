const BouttonPLus = document.querySelectorAll('.plus');
const BouttonMoin = document.querySelectorAll ('.minus');
const QuantityofItem = document.querySelectorAll ('.quantity');
const Total = document.querySelector ('#total-sum');
const PriceofItem = document.querySelectorAll ('.price');
const deleteItems = document.querySelectorAll ('.deleteBT');
const CardofItems = document.querySelectorAll ('.cardT')
const LikeofItems = document.querySelectorAll ('.likebutton');

for (let i = 0; i <BouttonPLus.length; i++) {
    BouttonPLus[i].addEventListener ('click', function () {
        QuantityofItem[i].innerHTML++ ; 
        Total.innerHTML = parseInt(Total.innerHTML) + parseInt(PriceofItem[i].innerHTML);
    }
    )
}

for (let i = 0; i <BouttonMoin.length; i++) {
    BouttonMoin[i].addEventListener ('click', function () {
        if (QuantityofItem[i].innerHTML>0){ 
            QuantityofItem[i].innerHTML-- ; 
            Total.innerHTML = parseInt(Total.innerHTML) - parseInt(PriceofItem[i].innerHTML);
        }
    }
    )
}
for (let i = 0; i <deleteItems.length; i++) {
    let button = deleteItems[i]
    button.addEventListener ('click', function (event) {
        let buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        CardofItems[i].remove ()
        if (QuantityofItem[i].innerHTML>0){ 
            Total.innerHTML = parseInt(Total.innerHTML) - QuantityofItem[i].innerHTML*parseInt(PriceofItem[i].innerHTML);
        }
        
    }
        )
    }  

for (let i = 0; i <LikeofItems.length; i++) {
    LikeofItems[i].addEventListener ('click', function (event) {
        event.preventDefault();
        if  (LikeofItems[i].style.filter === "grayscale(100%)") {
            LikeofItems[i].style.filter = "grayscale(0%)";
           } else {
            LikeofItems[i].style.filter = "grayscale(100%)";
          }
    })
}