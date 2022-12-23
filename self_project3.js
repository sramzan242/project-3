let tl = gsap.timeline();



document.querySelectorAll("img")
.forEach(function(elem){
    gsap.from(elem,{
        scrollTrigger:{
            trigger:elem,
            start:"20% 95%",
            // markers: true
          },
          x:-1000,
          opacity:0,
          duration:2,
          stagger:2,
          ease:Power2.easeInOut

    })

})

document.querySelectorAll(".content")
.forEach(function(elem){

    gsap.from(elem,{
        scrollTrigger:{
            trigger:elem,
            start:"20% 95%",
            // markers: true
          },
        y: 100,
        stagger:2,
        // delay:2,
        opacity:0,
        duration:3,
        ease:Power2.easeInOut
    })
})


