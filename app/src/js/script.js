/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
import '../sass/style.sass';
import BubbleCreator from './modules/bubble-hover';

if (document.querySelector(".js-bubble-hover")) {
  let bubbleCreators = [];
  document.querySelectorAll(".js-bubble-hover").forEach(function (item) {
    bubbleCreators.push(new BubbleCreator(item));
  });

  window.addEventListener("resize", function () {
    bubbleCreators.forEach(function (item) {
      item.calcBubbleSize();
    });
  });
}

let projects = new Swiper(".projects-slider", {
  slidesPerView: 2.8,
  spaceBetween: 30,
  loop: false,
  navigation: {
    nextEl: ".projects-btn-next",
    prevEl: ".projects-btn-prev",
  }
});

let office = new Swiper(".office-slider", {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".office-btn-next",
    prevEl: ".office-btn-prev",
  }
});