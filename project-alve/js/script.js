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

/* var nav = document.getElementById("nav");
nav.addEventListener("click", function (e) {
  var target = e.target;

  var targetParent = target.closest(".menu-item");

  if (targetParent) {
    var subm = targetParent.getElementsByClassName("submenu")[0];
    close();
    if (subm) {
      subm.style.display = "block";
    }
  }
});

function close() {
  var s = document.getElementsByClassName("submenu");
  for (var i = 0; i < s.length; i++) {
    s[i].style.display = "none";
  }
} */
// Выпадающее меню сайдиара

let linkClick = document.querySelector(".navbar__list--link-dropdown");
let subMenu = document.querySelector(".navbar__submenu--list");
console.log(subMenu);
linkClick.addEventListener("click", function (e) {
  e.preventDefault();
  let target = e.target;
  console.log(target);
  if (target) {
    subMenu.classList.toggle("active");
  }
});
;
