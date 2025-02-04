
import gsap from "gsap"
import TextPlugin from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin)

const tl = gsap.timeline({repeat: -1})

gsap.from(".logo-animation",{
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
  
  
  tl.to(".infinite-animation",{
    text:{
        value:"YOUR STYLE",
        delimiter: "",
        newClass: "colorGrey"
    },
    duration:1,
  }).to(".infinite-animation",{
    text:{
        value: "YOUR LIFE",
        delimiter: "",
        newClass: "colorLime"
    },
    duration:1,
    
  });