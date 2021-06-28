/* eslint-disable class-methods-use-this */
class Popup {
  constructor() {
    this.init();
  }

  init() {
    if (document.querySelector(".js-popup-open")) {
      console.log(1);
      const btnsOpen = document.querySelectorAll(".js-popup-open");
      btnsOpen.forEach((btn) => btn.addEventListener("click", function (e) {
        e.preventDefault();
        const typePopup = btn.dataset.popup;
        const popup = document.querySelector(`.js-popup[data-popup=${typePopup}]`);
        popup.classList.add("popup-open");
        document.body.classList.add("no-overflow");
      }));
      const popups = document.querySelectorAll(".js-popup");
      popups.forEach(function (item) {
        const btnsClose = item.querySelectorAll(".js-popup-close");
        btnsClose.forEach((close) => close.addEventListener("click", function (e) {
          e.preventDefault();
          item.classList.remove("popup-open");
          document.body.classList.remove("no-overflow");
        }));
      });
    }
  }
}

export default Popup;