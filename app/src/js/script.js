/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
import '../sass/style.sass';
import BubbleCreator from './modules/bubble-hover';
import InputMask from './modules/imask-init';
import Labels from './modules/labels';
import ToggleList from './modules/toggle-list';
import Validation from './modules/validation';
import Popup from "./modules/popup";

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

const toggleList = new ToggleList();
const validation = new Validation();
const imask = new InputMask();
const labels = new Labels();
const popup = new Popup();

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