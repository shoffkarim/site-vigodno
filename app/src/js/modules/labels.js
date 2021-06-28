class Labels {
  constructor() {
    this.init();
  }

  // eslint-disable-next-line class-methods-use-this
  init() {
    if (document.querySelector('.js-labels-container')) {
      const wrappers = document.querySelectorAll('.js-labels-container');
      wrappers.forEach(function (item) {
        const input = item.querySelector("input");
        const label = item.querySelector("label");
        input.addEventListener("blur", function () {
          let value = input.value;
          if (value !== "") {
            label.classList.add("anim");
          } else {
            label.classList.remove("anim");
          }
        });
      });
    }
  }
}
// eslint-disable-next-line import/prefer-default-export
export default Labels;