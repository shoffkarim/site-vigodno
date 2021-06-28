class Labels {
  constructor() {
    this.init();
  }

  // eslint-disable-next-line class-methods-use-this
  init() {
    if (document.querySelector('.js-labels-container')) {
      const wrappers = document.querySelectorAll('.js-labels-container');
      wrappers.forEach(function (item) {
        let input;
        if (item.querySelector("input")) {
          input = item.querySelector("input");
        } else {
          input = item.querySelector("textarea");
        }
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