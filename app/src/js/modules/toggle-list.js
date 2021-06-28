/* eslint-disable class-methods-use-this */
class ToggleList {
  constructor() {
    this.init();
  }

  init() {
    if (document.querySelector(".js-toggle-container")) {
      const list = document.querySelectorAll(".js-toggle-container");
      list.forEach(function (item) {
        const btn = item.querySelector(".js-toggle-btn");
        btn.addEventListener("click", function (e) {
          e.preventDefault();
          item.classList.toggle("show");
        });
      });
    }
  }
}

export default ToggleList;