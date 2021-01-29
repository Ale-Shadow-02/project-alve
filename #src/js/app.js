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
