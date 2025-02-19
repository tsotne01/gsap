
import gsap from "gsap"

import TextPlugin from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin)

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const tl = gsap.timeline({ repeat: -1 })

gsap.from(".logo-animation", {
  fill: "transparent",
  duration: 0.5
})


gsap.to(".title-animation", {
  duration: 1,
  text: {
    value: "FIND CLOTHES THAT MATCHES",
    newClass: "",
    delimiter: "",
  },
})


tl.to(".infinite-animation", {
  text: {
    value: "YOUR STYLE",
    delimiter: "",
    newClass: "colorGrey"
  },
  duration: 1,
}).to(".infinite-animation", {
  text: {
    value: "YOUR LIFE",
    delimiter: "",
    newClass: "colorLime"
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


let txt = "One Life Graphic T-shirt";


gsap.to(".clothe-review-title", {
  duration: 4,
  text: {
    value: txt,
    delimiter: "",
  },
  color: "rgba(128, 128, 128, 0.434)"
})


let nav = document.querySelector(".nav-list");
let btns = document.querySelector(".cart-container");

gsap.from(btns.children, {
  duration: 2,
  opacity: 0,
  stagger: {
    amount: 2,
    from: "center"
  }
})

gsap.from(nav.children, {
  duration: 1,
  opacity: 0,
  stagger: {
    amount: 1,
  }
})

const star = gsap.utils.toArray(".star-animation");

gsap.from(star, {
  duration: 0.3,
  opacity: 0,
  stagger: 0.1,
  scrollTrigger: {
    trigger: star[0],
  }
})

const tshirtCard = gsap.utils.toArray(".tshirt-card");

console.log(tshirtCard);

gsap.from(tshirtCard, {
  opacity: 0,
  stagger: 0.3,
  duration: 1,
  y: 100,

  scrollTrigger: {
    trigger: tshirtCard,
  }
})


const footerItem = gsap.utils.toArray(".footer-content-item li a");

let footerTl = gsap.timeline({
  scrollTrigger: {
    trigger: footerItem,
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

const footerCard = gsap.utils.toArray(".saba");

footerTl.fromTo(footerCard, {
  duration: 1,
  opacity: 0,
  x: 100,
}, {
  opacity: 1,
  stagger: 0.3,
  x: 0
}, "-=3")