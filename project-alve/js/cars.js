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

  //Открытие блока информации о водителе
  let driversInfo = document.querySelector(".drivers-info");
  let driversTabOpen = document.querySelector(".drivers-tab__open");
  let driversTabImgOpen = document.querySelector(".drivers-tab__open--img");
  let driversBlockWrap = document.querySelector(
    ".drivers-tab__header--block-wrap"
  );
  driversTabOpen.addEventListener("click", (e) => {
    if (e.target) {
      driversInfo.classList.toggle("drivers-info__active");
      driversTabImgOpen.classList.toggle("drivers-tab__open--img-active");
      driversBlockWrap.classList.toggle("drivers-tab__block-active");
    }
  });

  //* Открытие таба поиска водителей
  let resultTabOpen = document.querySelector(".result-tab__open");
  let resultTab = document.querySelector(".drivers-result-tab-open");
  let resultTabImgOpen = document.querySelector(".result-tab__open--img");
  let resultWrapCenter = document.querySelector(".result-tab__wrap--center");
  let resultTabProperty = document.querySelector(".result-tab__property");
  let resultTabBrand = document.querySelector(".result-tab__brand");

  resultTabOpen.addEventListener("click", (e) => {
    if (e.target) {
      resultTab.classList.toggle("result-tab__active");
      resultTabImgOpen.classList.toggle("result-tab__open--img-active");
      resultWrapCenter.classList.toggle("result-tab__block-active");
      resultTabProperty.classList.toggle("result-tab__block-active");
      resultTabBrand.classList.toggle("result-tab__block-active");
    }
  });

  //Раскрытие блока настройки
  let settingOpen = document.querySelector(".result-header__setting");
  let blockOpen = document.querySelector(".setting-modal");
  let settingClose = document.querySelector(".setting-modal__close");
  settingOpen.addEventListener("click", (e) => {
    if (e.target) {
      blockOpen.classList.toggle("setting-open");
    }
  });
};
