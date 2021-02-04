let radios = document.querySelectorAll('input[type="radio"]');
let btn = document.querySelector(".form__btn");
btn.addEventListener("click", function () {
  for (let key of radios) {
    if (key.checked) {
      window.location.href = `${key.value}`;
    }
  }
});

$(document).ready(function () {
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
