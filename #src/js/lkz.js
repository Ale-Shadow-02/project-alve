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

window.onload = function () {
  //Раскрытие таба data

  let arrowLink = document.querySelector(".bid__reqvuisition--arrow");
  let data = document.querySelector(".data");
  let wrapStage = document.querySelector(".wrap__requests-stage");
  arrowLink.addEventListener("click", (e) => {
    e.preventDefault();
    let target = e.target;
    if (target) {
      data.classList.toggle("active-data");
      arrowLink.classList.toggle("bid__arrow--active");
      wrapStage.classList.toggle("wrap-active");
    }
  });

  //Раскрытие таба result-full__data

  let arrowFullDataLink = document.querySelector(".bid__requisition--arrow");
  let resultFullData = document.querySelector(".result-full__data");
  let wrapCenter = document.querySelector(".wrap-center__total");
  arrowFullDataLink.addEventListener("click", (e) => {
    e.preventDefault();
    let target = e.target;
    if (target) {
      resultFullData.classList.toggle("active-full__data");
      arrowFullDataLink.classList.toggle("bid__arrow--active");
      wrapCenter.classList.toggle("wrap-active");
    }
  });

  //Раскрытие блока настройки
  let settingOpen = document.querySelector(".result-total__header--setting");
  let blockOpen = document.querySelector(".setting-modal");
  let settingClose = document.querySelector(".setting-modal__close");
  settingOpen.addEventListener("click", (e) => {
    if (e.target) {
      blockOpen.classList.toggle("setting-open");
    }
  });
};
