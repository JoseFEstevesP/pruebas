const btnIcon = document.getElementById("btn-icon");
const menu = document.getElementById("menu");
const mainMenu = document.getElementById("main_menu");
const menuS = document.querySelectorAll(".menu__link");
const submenu = document.querySelectorAll(".subMenu");
btnIcon.addEventListener("click", () => {
  menu.classList.toggle("menu--open_menu");
  mainMenu.classList.toggle("menu--open_menu");
});
menuS.forEach((item) => {
  item.addEventListener("click", () => {
    submenu.forEach((itemS) => {
      itemS.classList.toggle("subMenu--show");
    });
  });
});
