const cart = document.querySelector("nav .cart ");
const cartSideBar = document.querySelector(".cart-sidebar");
const cartClose = document.querySelector(" .close-cart  ");
const burger = document.querySelector(" .burger ");
const menuSideBar = document.querySelector(" .menu-sidebar ");
const closeMenu = document.querySelector(" .closeMenu");
const cartItemsTotal = document.querySelector(" noi");
const cartPriceTotal = document.querySelector(" .total-amount ");
const cartUi = document.querySelector(" .cart-sidebar .cart");
const totalDiv = document.querySelector(" .total-sum ");
const clearBtn = document.querySelector(" .clear-cart-btn ");
const cartContent = document.querySelector(" .cart-content ");

let Cart=[];
let buttonsDOM = [];

cart.addEventListener("click", function(){
    cartSideBar.style.transform = "translate(0%)"
    const bodyOverlay = document.createElement("div")
    bodyOverlay.
}