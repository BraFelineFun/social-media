"use strict"


//скрипт открытия сайдбара для мобилок
const menuOpen = document.querySelector(".header_menu");
const menuClose = document.querySelector(".aside_close");
const asideArr = document.getElementsByTagName("aside");

menuOpen.addEventListener("click", function(e){
    const menuBody = asideArr[0];
    menuBody.classList.toggle('--active');
});
menuClose.addEventListener("click", function(e){
     const menuBody = asideArr[0];
    menuBody.classList.toggle('--active');
});
//-----------------

