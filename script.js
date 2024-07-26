"use strict";

const buttonEls = [...document.querySelectorAll(".question-icon")];

buttonEls.map((buttonEl) => {
  buttonEl.addEventListener("click", () => {
    buttonEl.parentNode.nextElementSibling.classList.toggle("hidden");
    buttonEl.classList.toggle("active");
  });
});
