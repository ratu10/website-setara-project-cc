let navbar = document.querySelector('.header .flex .navbar');
let profile = document.querySelector('.header .flex .profile');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
   profile.classList.remove('active');
}

document.querySelector('#user-btn').onclick = () =>{
   profile.classList.toggle('active');
   navbar.classList.remove('active');
}

window.onscroll = () =>{
   profile.classList.remove('active');
   navbar.classList.remove('active');
}

function loader(){
   document.querySelector('.loader').style.display = 'none';
}

function fadeOut(){
   setInterval(loader, 2000);
}
document.addEventListener('DOMContentLoaded', function () {
   const pricePerItem1 = 10; // Harga per item untuk qty1
   const pricePerItem2 = 35; // Harga per item untuk qty2
   const pricePerItem3 = 5;  // Harga per item untuk qty3

   const updateSubTotal = (qtyInputs, pricePerItem) => {
       qtyInputs.forEach(input => {
           input.addEventListener('input', function () {
               const box = this.closest('.box');
               const subTotalElement = box.querySelector('.sub-total span');
               const qty = parseInt(this.value);

               if (!isNaN(qty) && qty >= 1) {
                   const subTotal = pricePerItem * qty;
                   subTotalElement.textContent = subTotal.toLocaleString() + 'k';
               } else {
                   subTotalElement.textContent = '0k';
               }
           });
       });
   };

   const qtyInputs1 = document.querySelectorAll('.qty1');
   const qtyInputs2 = document.querySelectorAll('.qty2');
   const qtyInputs3 = document.querySelectorAll('.qty3');

   updateSubTotal(qtyInputs1, pricePerItem1);
   updateSubTotal(qtyInputs2, pricePerItem2);
   updateSubTotal(qtyInputs3, pricePerItem3);
});



window.onload = fadeOut;