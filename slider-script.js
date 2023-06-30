$(".news-component").each(function (index) {
  const swiper = new Swiper($(this).find(".swiper.is-news")[0], {
    slidesPerView: 1,
    speed: 700,
    keyboard: true,
    mousewheel: {
      forceToAxis: true
    },
    spaceBetween: "5%",
    breakpoints: {
      // mobile landscape
      480: {
        slidesPerView: 1,
        spaceBetween: "2%"
      },
      // tablet
      768: {
        slidesPerView: 2,
        spaceBetween: "3%"
      },
      // desktop
      992: {
        slidesPerView: 3,
        spaceBetween: "2%"
      }
    },
    pagination: {
      el: $(this).find(".swiper-bullet-wrapper.is-news")[0],
      bulletActiveClass: "is-active",
      bulletClass: "swiper-bullet",
      bulletElement: "button1",
      clickable: true
    },
    navigation: {
      nextEl: $(this).find(".swiper-next.is-news")[0],
      prevEl: $(this).find(".swiper-prev.is-news")[0],
      disabledClass: "is-disabled"
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
      dragClass: "swiper-drag",
      snapOnRelease: true
    }
  });
});

$(".news-component").each(function (index) {
  const swiper = new Swiper($(this).find(".swiper.is-testimonials")[0], {
    slidesPerView: 1,
    speed: 700,
    keyboard: true,
    mousewheel: {
      forceToAxis: true
    },
    spaceBetween: "5%",
    breakpoints: {
      // mobile landscape
      480: {
        slidesPerView: 1,
        spaceBetween: "2%"
      },
      // tablet
      768: {
        slidesPerView: 1,
        spaceBetween: "3%"
      },
      // desktop
      992: {
        slidesPerView: 1,
        spaceBetween: "10%"
      }
    },
    pagination: {
      el: $(this).find(".swiper-bullet-wrapper.is-testimonials")[0],
      bulletActiveClass: "is-active",
      bulletClass: "swiper-bullet",
      bulletElement: "button1",
      clickable: true
    },
    navigation: {
      nextEl: $(this).find(".swiper-next.is-testimonials")[0],
      prevEl: $(this).find(".swiper-prev.is-testimonials")[0],
      disabledClass: "is-disabled"
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
      dragClass: "swiper-drag",
      snapOnRelease: true
    }
  });
});

$(".career-component").each(function (index) {
  const swiper = new Swiper($(this).find(".swiper.is-careers")[0], {
    slidesPerView: 1,
    speed: 700,
    keyboard: true,
    mousewheel: {
      forceToAxis: true
    },
    spaceBetween: "5%",
    breakpoints: {
      // mobile landscape
      480: {
        slidesPerView: 1,
        spaceBetween: "2%"
      },
      // tablet
      768: {
        slidesPerView: 1,
        spaceBetween: "3%"
      },
      // desktop
      992: {
        slidesPerView: 3,
        spaceBetween: "2%"
      }
    },
    pagination: {
      el: $(this).find(".swiper-bullet-wrapper.is-careers")[0],
      bulletActiveClass: "is-active",
      bulletClass: "swiper-bullet",
      bulletElement: "button1",
      clickable: true
    },
    navigation: {
      nextEl: $(this).find(".swiper-next.is-careers")[0],
      prevEl: $(this).find(".swiper-prev.is-careers")[0],
      disabledClass: "is-disabled"
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
      dragClass: "swiper-drag",
      snapOnRelease: true
    }
  });
});
