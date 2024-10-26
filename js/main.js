import menu from "./menu/menu.js";
import mostPopular from "./mostPopular/mostPopular.js";
import serial from "./mostPopular/serial.js";
import slider from "./slider/slider.js";
import sliderContent from "./slider/sliderContent.js";
import watch from "./watch/watch.js";
import learn from "./learn/learn.js";
import free from "./free/free.js";
import world from "./world/world.js";
import online from "./online/online.js";
import comments from "./comments/comment.js";
import questions from "./questions/questions.js";
import filimo from "./filimo/filimo.js";
import footer from "./footer/footer.js";
import Smenu from "./smenu.js";

async function allData() {

  await swiper();
  await slider();
  await sliderContent();
  await mostPopular();
  await serial();
  await watch();
  await learn();
  await free();
  await world();
  await online();
  await comments();
  await questions();
  await filimo();
  await footer();
  await Smenu();
}

allData();

async function swiper() {
  await menu();
  await slider();
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    centeredSlides: false,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".serialSwiper", {
    slidesPerView: 3,
    spaceBetween: 40,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".freeSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".commentsSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
