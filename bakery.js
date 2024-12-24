let bars = document.querySelector(".bars");
let bars_links = document.querySelector(".bar-links");
let close_bars_links = document.querySelector(".bar-links .close");
let = first_bars = document.querySelector(".bars .first");
let = second_bars = document.querySelector(".bars .second");
let = third_bars = document.querySelector(".bars .third");

bars.addEventListener("click", function () {
  bars_links.classList.toggle("bar-links-toggle");
  first_bars.classList.toggle("bars-p-fist");
  second_bars.classList.toggle("bars-p-second");
  third_bars.classList.toggle("bars-p-third");
});

close_bars_links.addEventListener("click", () => {
  bars_links.classList.remove("bar-links-toggle");
  first_bars.classList.remove("bars-p-fist");
  second_bars.classList.remove("bars-p-second");
  third_bars.classList.remove("bars-p-third");
});

window.onload = () => (document.querySelector("header").style.top = "0");

setTimeout(() => {
  document.querySelector(".home .image").style.left = "0";
  document.querySelector(".home .content img").classList.add("img-transform");
  document.querySelector(".home .content").classList.add("content-transform");
}, 200);

let buttons = document.querySelectorAll(".breads button");
let cards = document.querySelectorAll(".card");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    cards[i].classList.add("flib-card");
    setTimeout(() => cards[i].classList.remove("flib-card"), 5000);
  });
}

let bread = document.querySelector(".bread");
let imgs_card = document.querySelectorAll(".card .image");
let products = document.querySelector(".products");

let ingredients = document.querySelector(".ingredients");

let scroll_btn = document.querySelector(".scroll-btn");

window.onscroll = () => {
  if (document.documentElement.scrollTop >= bread.offsetHeight - 400) {
    document.querySelector(".bread .title").classList.add("img-card-transform");
    cards.forEach((card) => {
      card.style.bottom = "0";
    });
    imgs_card.forEach((img) => {
      img.classList.add("img-card-transform");
    });
  }

  if (document.documentElement.scrollTop >= ingredients.offsetHeight + 200) {
    document
      .querySelector(".ingredients .image img")
      .classList.add("img-card-transform");

    document.querySelector(".ingredients .content").style.right = "0";

    document
      .querySelector(".ingredients .content .title")
      .classList.add("img-card-transform");
  }

  if (document.documentElement.scrollTop >= products.offsetHeight + 1000) {
    document
      .querySelector(".products .title")
      .classList.add("img-card-transform");
  }

  if (
    document.documentElement.scrollTop >=
    document.querySelector(".menu").offsetHeight + 1500
  ) {
    document.querySelector(".menu p").classList.add("img-card-transform");
    document.querySelector(".menu button").classList.add("img-card-transform");
    document.querySelector(".menu .image").classList.add("img-card-transform");
  }

  if (
    document.documentElement.scrollTop >=
    document.querySelector(".feedback").offsetHeight + 2500
  ) {
    document
      .querySelector(".feedback .title")
      .classList.add("img-card-transform");
    document.querySelector(".feedback .contanier").style.bottom = "0";
  }

  if (
    document.documentElement.scrollTop >= document.documentElement.clientHeight
  ) {
    scroll_btn.style.right = "20px";
  } else if (
    document.documentElement.scrollTop < document.documentElement.clientHeight
  ) {
    scroll_btn.style.right = "-100%";
  }
};

scroll_btn.addEventListener("click", () => {
  scrollTo(0, 0);
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    742: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 768px
    994: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

let image_popup = document.querySelectorAll(".popup .image .img");
let image_popup_content = document.querySelector(".popup .content img");
image_popup.forEach((img) => {
  img.addEventListener("click", () => {
    image_popup.forEach((image) => {
      image.classList.remove("active");
    });
    img.classList.add("active");
    console.log(img.src);
    image_popup_content.src = img.querySelector("img").src;
  });
});

let plus_btn = document.querySelector(".popup .plus");
let quantity = document.querySelector(".popup .quantity span");
let minus_btn = document.querySelector(".popup .minus");

let count = 0;

plus_btn.addEventListener("click", () => {
  count++;
  quantity.innerHTML = `${count}`;
});

minus_btn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    quantity.innerHTML = `${count}`;
  }
});

let close_popup = document.querySelector(".popup .close");
let opacity = document.querySelector(".opacity");

let popup = document.querySelector(".popup");
close_popup.addEventListener("click", () => {
  popup.classList.remove("show-popup");
  opacity.style.opacity = "1";
});

let open_popup = document.querySelectorAll(".swiper-slide .bread1 button");
open_popup.forEach((btn) => {
  btn.addEventListener("click", () => {
    popup.classList.add("show-popup");
    opacity.style.opacity = ".5";
  });
});

let buy_btn = document.querySelector(".popup .buy-btn");
let suss_message = document.querySelector(".buy-sucssful");

buy_btn.addEventListener("click", () => {
  suss_message.style.right = "0";

  setTimeout(() => (suss_message.style.right = "-100%"), 3000);
});
