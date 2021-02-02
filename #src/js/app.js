// Выпадающее меню сайдиара

let linkClick = document.querySelector(".navbar__list--link-dropdown");
let subMenu = document.querySelector(".navbar__submenu--list");
linkClick.addEventListener("click", function (e) {
  e.preventDefault();
  let target = e.target;
  if (target) {
    subMenu.classList.toggle("active");
    linkClick.classList.toggle("arrow-top");
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
    arrowLink.classList.toggle("bid__arrow--active");
  }
});

//Раскрытие таба result-full__data

let arrowFullDataLink = document.querySelector(".bid__requisition--arrow");
let resultFullData = document.querySelector(".result-full__data");
arrowFullDataLink.addEventListener("click", (e) => {
  e.preventDefault();
  let target = e.target;
  if (target) {
    resultFullData.classList.toggle("active-full__data");
    arrowFullDataLink.classList.toggle("bid__arrow--active");
  }
});
