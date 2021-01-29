// Выпадающее меню сайдиара

let linkClick = document.querySelector(".navbar__list--link-dropdown");
let subMenu = document.querySelector(".navbar__submenu--list");
linkClick.addEventListener("click", function (e) {
  e.preventDefault();
  let target = e.target;
  if (target) {
    subMenu.classList.toggle("active");
  }
});

// Раскрытие таба data

let arrowLink = document.querySelector(".bid__reqvuisition--arrow");
let data = document.querySelector(".data");
arrowLink.addEventListener("click", (e) => {
  e.preventDefault();
  let target = e.target;
  if (target) {
    data.classList.toggle("active-data");
  }
});
