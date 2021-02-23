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
});