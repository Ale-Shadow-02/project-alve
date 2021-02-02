/* Script WEBP */

function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});

/* JS Mobile Menu */

$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger,.header__menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
});

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

//Раскрытие таба result-full__data

let arrowFullDataLink = document.querySelector(".bid__requisition--arrow");
let resultFullData = document.querySelector(".result-full__data");
arrowFullDataLink.addEventListener("click", (e) => {
  e.preventDefault();
  let target = e.target;
  if (target) {
    resultFullData.classList.toggle("active-full__data");
  }
});
;
