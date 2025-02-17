
import gsap from "gsap"
import TextPlugin from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin)

const tl = gsap.timeline({repeat: -1})

gsap.from(".logo-animation",{
    fill: "transparent",
    duration: 0.5,
    y:100
})


gsap.utils.toArray(document.querySelectorAll(".nav-list")).forEach((link)=>{
  gsap.from(link,{
    opacity:0,
    y:100,
    duration:0.5,
  })
})

gsap.from(".banner",{
  opacity:0,
  duration:1
})
gsap.from(".close img",{
  x:"100vw",
  duration:0.3,
})

gsap.from(".logos svg",{
  y:150,
  duration:1,
})


gsap.to(".title-animation", {
    duration: 0.5,
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

  gsap.to(".star-1",{
    rotation: 360,
    scale: 1.2,
    duration: ()=>(Math.random()*2 + 2),
    repeat: -1,
  })
  gsap.to(".star-2",{
    rotation: 360,
    scale: 1.2,
    duration: ()=>(Math.random()*2 + 2),
    repeat: -1,
  })
