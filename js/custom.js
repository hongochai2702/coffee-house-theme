const navBarElm = document.querySelector('.navbar');
const menuBtnElm = document.querySelector('#menu-btn');
const cartItemsContainerElm = document.querySelector('.cart-items-container');
const searchForm = document.querySelector('.search-form');

menuBtnElm.addEventListener('click', (ev) => {
    navBarElm.classList.toggle('active');
    cartItemsContainerElm.classList.remove('active');
    searchForm.classList.remove('active');
});

document.querySelector('#cart-btn').addEventListener('click', () => {
    cartItemsContainerElm.classList.toggle('active');
    navBarElm.classList.remove('active');
    searchForm.classList.remove('active');
});

document.querySelector('#search-btn').addEventListener('click', () => {
    searchForm.classList.toggle('active');
    navBarElm.classList.remove('active');
    cartItemsContainerElm.classList.remove('active');
});

window.onscroll = () => {
    navBarElm.classList.remove('active');
    cartItemsContainerElm.classList.remove('active');
    searchForm.classList.remove('active');

}