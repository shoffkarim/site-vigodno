/* eslint-disable no-restricted-globals */
class BubbleCreator {
  constructor(element) {
      this.element = element;
      // eslint-disable-next-line no-unused-expressions
      this.bubbleSize;
      this.isHovered = false;
      this.calcBubbleSize();
      this.init();
  }

  calcBubbleSize() {
      this.bubbleSize = this.element.offsetWidth;
      if (this.element.offsetWidth > this.element.offsetHeight) {
          this.bubbleSize = this.element.offsetHeight;
      }
  }

  init() {
      // eslint-disable-next-line no-underscore-dangle
      let _this = this;

      this.element.addEventListener("mouseenter", function () {
          if (_this.isHovered) {
              return;
          }
          _this.isHovered = true;

          let bubbleContainer = document.createElement("div");
          bubbleContainer.className = "bubble-container";
          bubbleContainer.style.width = `${_this.bubbleSize * 2}px`;
          bubbleContainer.style.height = `${_this.bubbleSize * 2}px`;
          bubbleContainer.style.left = `${event.clientX - _this.element.getBoundingClientRect().left - _this.bubbleSize / 2}px`;
          bubbleContainer.style.top = `${event.clientY - _this.element.getBoundingClientRect().top - _this.bubbleSize / 2}px`;

          let bubble = document.createElement("div");
          bubble.className = "bubble";

          bubbleContainer.append(bubble);
          _this.element.prepend(bubbleContainer);
          // setTimeout(function () {
          //     bubbleContainer.remove();
          // }, 1000);
      });

      this.element.addEventListener("mouseleave", function () {
          _this.isHovered = false;
          document.querySelector(".bubble-container").remove();
      });
  }
}

export default BubbleCreator;