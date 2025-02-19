import gsap from "gsap"

import TextPlugin from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin)

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({ repeat: -1 });

gsap.from(".logo-animation", {
  fill: "transparent",
  duration: 0.5,
  y: 100,
});

gsap.utils.toArray(document.querySelectorAll(".nav-list")).forEach((link) => {
  gsap.from(link, {
    opacity: 0,
    y: 100,
    duration: 0.5,
  });
});

gsap.from(".banner", {
  opacity: 0,
  duration: 1,
});

gsap.from(".close img", {
  x: "100vw",
  duration: 0.3,
});

gsap.from(".logos svg", {
  y: 150,
  duration: 1,
  stagger: 0.3,
});

gsap.to(".title-animation", {
  duration: 0.5,
  text: {
    value: "FIND CLOTHES THAT MATCHES",
    newClass: "",
    delimiter: "",
  },
});

tl.to(".infinite-animation", {
  text: {
    value: "YOUR STYLE",
    delimiter: "",
    newClass: "colorGrey",
  },
  duration: 1,
}).to(".infinite-animation", {
  text: {
    value: "YOUR LIFE",
    delimiter: "",
    newClass: "colorLime",
  },
  duration: 1,
});

gsap.to(".star-1", {
  rotation: 360,
  scale: 1.2,
  duration: () => (Math.random() * 2 + 2),
  repeat: -1,
})

gsap.to(".star-2", {
  rotation: 360,
  scale: 1.2,
  duration: () => (Math.random() * 2 + 2),
  repeat: -1,
})

let topCard = gsap.utils.toArray(".card-top");
let bottomCard = gsap.utils.toArray(".card-bottom");

gsap.from(topCard, {
  duration: 1,
  opacity: 0,
  y: 200,
  stagger: 0.3,
  scrollTrigger: {
    trigger: topCard,
    toggleActions: "restart none none none"
  }
})

gsap.from(bottomCard, {
  duration: 1,
  opacity: 0,
  y: 200,
  stagger: 0.3,
  scrollTrigger: {
    trigger: bottomCard,
    toggleActions: "restart none none none"
  }
})

let title = gsap.utils.toArray(".hello");


gsap.from(title, {
  duration: 1,
  opacity: 0,
  x: -400,
  stagger: 0.3,
  letterSpacing: "20px",
  scrollTrigger: {
    trigger: topCard,
    toggleActions: "restart none none none"
  }
})


gsap.from(".casual-style", {
  duration: 1,
  opacity: 0,
  x: -1000,
  y: -200,
  scrollTrigger: {
    trigger: ".section-4-browse-style",
    toggleActions: "restart none none none"
  }
})

gsap.from(".formal-style", {
  duration: 1,
  opacity: 0,
  x: 1000,
  y: -200,
  scrollTrigger: {
    trigger: ".section-4-wrapper",
    toggleActions: "restart none none none"

  }
})

gsap.from(".party-style", {
  duration: 1,
  opacity: 0,
  delay: 1,
  x: -1000,
  y: 200,
  scrollTrigger: {
    trigger: ".section-4-browse-style",
    toggleActions: "restart none none none"
  }
})

gsap.from(".gym-style", {
  duration: 1,
  opacity: 0,
  delay: 1,
  x: 1000,
  y: 200,
  scrollTrigger: {
    trigger: ".section-4-browse-style",
    toggleActions: "restart none none none"
  }
})

const footerItem = gsap.utils.toArray(".footer-content-item li a");

let footerTl = gsap.timeline({
  scrollTrigger: {
    trigger: footerItem,
    toggleActions: "restart none none none"
  }
});

footerTl.fromTo(".footer-content-item li", {
  duration: 4,
  opacity: 0,
  x: 100
}, {
  x: 0,
  opacity: 1,
  stagger: 0.3,
}).fromTo(footerItem, {
  duration: 1,
}, {
  x: 0,
})

const footerCard = gsap.utils.toArray(".pay-method");

footerTl.fromTo(footerCard, {
  duration: 1,
  opacity: 0,
  x: 100,
}, {
  opacity: 1,
  stagger: 0.3,
  x: 0
}, "-=3")




// productDetails page
gsap.from(".company-name", {
  duration: 1,
  opacity: 0,
  y: -10
})

let txt = "One Life Graphic T-shirt";


gsap.to(".clothe-review-title", {
  duration: 4,
  text: {
    value: txt,
    delimiter: "",
  },
  color: "#000"
})


let nav = document.querySelector(".nav-list");
let btns = document.querySelector(".cart-container");

let navTl = gsap.timeline()

navTl.from(nav.children, {
  duration: 1,
  opacity: 0,
  y: -100,
  stagger: 0.3
})

navTl.from(btns.children, {
  duration: 2,
  opacity: 0,
  y: 100,
  stagger: {
    amount: 0.3,
  }
})

const star = gsap.utils.toArray(".star-animation");

gsap.from(star, {
  duration: 0.3,
  opacity: 0,
  stagger: 0.1,
  scrollTrigger: {
    trigger: star,
    toggleActions: "restart none none none",
  }
})

const tshirtCard = gsap.utils.toArray(".tshirt-card");

gsap.from(tshirtCard, {
  opacity: 0,
  stagger: 0.3,
  duration: 1,
  y: 100,

  scrollTrigger: {
    trigger: tshirtCard,
    toggleActions: "restart none none none",
    star: "top center"
  }
})

gsap.from(".clothe-img:nth-child(1)", {
  duration: 1,
  opacity: 0,
  stagger: 0.3,
  y: -100,
  x: -100
})

gsap.from(".clothe-img:nth-child(2)", {
  duration: 1,
  opacity: 0,
  stagger: 0.3,
  x: 100
})

gsap.from(".clothe-img:nth-child(3)", {
  duration: 1,
  opacity: 0,
  stagger: 0.3,
  x: -100
})

gsap.from(".clothe-img:nth-child(4)", {
  duration: 1,
  opacity: 0,
  stagger: 0.3,
  y: 100,
  x: -100
})