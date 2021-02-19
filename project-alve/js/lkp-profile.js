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

  //Скрипт активной ссылки
  $(function () {
    $(".navbar a").each(function () {
      var location = window.location.href;
      if (this.href == location) {
        $(this).addClass("navbar-active");
      }
    });
  });
  $(function () {
    $(".navbar__submenu--list a").each(function () {
      var location = window.location.href;
      if (this.href == location) {
        $(this).addClass("navbar-submenu-active");
      }
    });
  });
  //* Глаз на input[type='password']
  $("body").on("click", ".password-control", function () {
    if ($("#password").attr("type") == "password") {
      $(this).addClass("view");
      $("#password").attr("type", "text");
    } else {
      $(this).removeClass("view");
      $("#password").attr("type", "password");
    }
    return false;
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Выпадающее меню сайдbара

  let linkDesktop = document.querySelector(".navbar__list--link-desktop");
  let subMenu = document.querySelector(".navbar__submenu--list-desktop");
  let decktopArrow = document.querySelector(".navbar__submenu--link-desktop");
  linkDesktop.addEventListener("click", (e) => {
    e.preventDefault();
    let target = e.target;
    if (target) {
      subMenu.classList.toggle("active-desktop");
      decktopArrow.classList.toggle("decktop-arrow");
    }
  });

  //Выпадающее меню мобильного сайдбара

  let linkMobile = document.querySelector(".navbar__list--link-dropdown");
  let subMenuMobile = document.querySelector(".navbar__submenu--list-mobile");
  let mobileArrow = document.querySelector(".navbar__list--link-mobile");
  linkMobile.addEventListener("click", (e) => {
    e.preventDefault();
    let target = e.target;
    if (target) {
      subMenuMobile.classList.toggle("active-desktop");
      mobileArrow.classList.toggle("mobile-arrow");
    }
  });
});
