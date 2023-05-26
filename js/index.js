let burger = document.querySelector(`.hamburger`);
let menu = document.querySelector(`.menu`);

burger.addEventListener(`click`, function(e){
  burger.classList.toggle("is-active");
  menu.classList.toggle("menu_post");
});