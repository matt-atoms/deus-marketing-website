let splitType = new SplitType("[text-split]", {
  types: "words, chars",
  tagName: "span"
});

let totalDuration = 1.4;

$("[letter-fade]").each(function (index) {
  let childLetters = $(this).find(".char");
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: "top bottom",
      end: "top 80%",
      toggleActions: "none play none reset"
    },
    defaults: {
      ease: "power2.out"
    }
  });
  childLetters.each(function (index) {
    let randomDuration = gsap.utils.random(0.6, totalDuration);
    let maxDelay = totalDuration - randomDuration;
    let randomDelay = gsap.utils.random(0, maxDelay);
    tl.from($(this), { opacity: 0, duration: randomDuration }, randomDelay);
  });
  tl.from($(this), { scale: 1.2, duration: totalDuration }, 0);
});

function pageLoad() {
  let tl = gsap.timeline({ delay: 0.2 });
  tl.to(".page-wrapper", {
    opacity: 1,
    duration: 0.1
  });
}
pageLoad();

gsap.registerPlugin(ScrollTrigger);

let tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".logo6_list",
    markers: false,
    start: "top 80%"
  }
});

tl1.from(".logo6_wrapper", {
  opacity: 0,
  y: "10%",
  stagger: { each: 0.1, from: "start" },
  ease: "power1.out",
  duration: 0.6
});

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".layout238_component",
    markers: false,
    start: "top 30%"
  }
});

tl2.from(".layout238_item", {
  opacity: 0,
  y: "10%",
  stagger: { each: 0.1, from: "start" },
  ease: "power1.out",
  duration: 0.6
});

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".team6_component",
    markers: false,
    start: "top 30%"
  }
});

tl3.from(".team6_item", {
  opacity: 0,
  y: "10%",
  stagger: { each: 0.1, from: "start" },
  ease: "power1.out",
  duration: 0.6
});

let tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_gallery18",
    markers: false,
    start: "top 30%"
  }
});

tl4.from(".swiper-slide.is-news", {
  opacity: 0,
  y: "10%",
  stagger: { each: 0.1, from: "start" },
  ease: "power1.out",
  duration: 0.6
});

let tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".blog1-header_component",
    markers: false,
    start: "top 30%"
  }
});

tl5.from(".blog1-header_item", {
  opacity: 0,
  y: "10%",
  stagger: { each: 0.1, from: "start" },
  ease: "power1.out",
  duration: 0.6
});

let tl6 = gsap.timeline();

tl6.from(".campaign-video,.campaign-image-pop", {
  opacity: 0,
  y: "10%",
  scale: 0.5,
  stagger: { each: 0.1, from: "start" },
  ease: "power1.out",
  duration: 0.6
});

ScrollTrigger.create({
  animation: tl6,
  trigger: ".gallery7_component",
  start: "top 100%",
  end: "bottom 70%",
  markers: false,
  scrub: true
});

let tl7 = gsap.timeline({
  scrollTrigger: {
    trigger: ".testimonial-section",
    markers: false,
    start: "top 30%"
  }
});

tl7.from(".swiper-slide.is-testimonials", {
  opacity: 0,
  y: "10%",
  stagger: { each: 0.1, from: "start" },
  ease: "power1.out",
  duration: 0.6
});

let tl8 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_gallery18",
    markers: false,
    start: "top 30%"
  }
});

tl8.from(".swiper-slide.is-careers", {
  opacity: 0,
  y: "10%",
  stagger: { each: 0.1, from: "start" },
  ease: "power1.out",
  duration: 0.6
});
