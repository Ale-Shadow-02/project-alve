let radios = document.querySelectorAll('input[type="radio"]');
let btn = document.querySelector(".form__btn");
btn.addEventListener("click", function () {
  for (let key of radios) {
    if (key.checked) {
      window.location.href = `${key.value}`;
    }
  }
});
