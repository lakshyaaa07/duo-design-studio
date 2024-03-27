function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

init()

document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll("#nav-part2 h4");
    const marqueeContainer = document.getElementById("marquee-container");

    navItems.forEach((item) => {
        item.addEventListener("mouseover", function () {
            marqueeContainer.classList.add("active");
        });
        item.addEventListener("mouseout", function () {
            marqueeContainer.classList.remove("active");
        });
    });
});


var crsr = document.querySelector(".cursor")
var main = document.querySelector(".main")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + 20+"px"
    crsr.style.top = dets.y + 20+"px"
})

gsap.from(".page1 h1,.page1 h2", {
    y: 10,
    rotate: 10,
    opacity: 0,
    delay: 0.3,
    duration: 0.7
})
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top 27%",
        end: "top 0",
        scrub: 3
    }
})
tl.to(".page1 h1", {
    x: -100,
}, "anim")
tl.to(".page1 h2", {
    x: 100
}, "anim")
tl.to(".page1 video", {
    width: "90%"
}, "anim")

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top -115%",
        end: "top -120%",
        scrub: 3
    }
})
tl2.to(".main", {
    backgroundColor: "#fff",
})

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top -280%",
        end: "top -300%",
        scrub: 3
    }
})

tl3.to(".main",{
    backgroundColor:"#0F0D0D"
})


var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var att = elem.getAttribute("data-image")
        crsr.style.width = "470px"
        crsr.style.height = "370px"
        crsr.style.borderRadius = "0"
        crsr.style.backgroundImage = `url(${att})`
    })
    elem.addEventListener("mouseleave",function(){
        elem.style.backgroundColor = "transparent"
        crsr.style.width = "20px"
        crsr.style.height = "20px"
        crsr.style.borderRadius = "50%"
        crsr.style.backgroundImage = `none`
    })
})

var h4 = document.querySelectorAll("#nav h4")
var purple = document.querySelector("#purple")
h4.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        purple.style.display = "block"   
        purple.style.opacity = "1"
    })
    elem.addEventListener("mouseleave",function(){
        purple.style.display = "none"   
        purple.style.opacity = "0"
    })
})


document.querySelector(".left")
.addEventListener("mousemove", function(){
    document.querySelector(".c-center-one").style.height = "100vh"
    document.querySelector("#btn-lft").style.backgroundColor = "#333"
    document.querySelector("#btn-lft").style.color = "#fff"
    document.querySelector("#btn-lft").style.border = "none"
    document.querySelector(".left").style.cursor = "pointer"
    document.querySelector("#one").style.width = "25vw"
    document.querySelector("#one").style.height = "25vh"
    document.querySelector("#one").style.opacity = "1"
    document.querySelector("#one").style.filter= "blur(0.5px)"
    document.querySelector("#two").style.width = "15vw"
    document.querySelector("#two").style.height = "17vh"
    document.querySelector("#two").style.opacity = "1"
    document.querySelector("#two").style.filter= "blur(5px)"
    document.querySelector("#three").style.width = "10vw"
    document.querySelector("#three").style.height = "12vh"
    document.querySelector("#three").style.opacity = "0.5"
    document.querySelector("#three").style.filter= "blur(20px)"
    document.querySelector("#four").style.width = "7vw"
    document.querySelector("#four").style.height = "7vh"
    document.querySelector("#four").style.opacity = "0.3"
    document.querySelector("#four").style.filter= "blur(20px)"

})

document.querySelector(".left")
.addEventListener("mouseleave", function(){
    document.querySelector(".c-center-one").style.height = "0vh"
    document.querySelector("#btn-lft").style.backgroundColor = "initial"
    document.querySelector("#btn-lft").style.border = "1px solid #333"
    document.querySelector("#btn-lft").style.color = "initial"
    document.querySelector("#one").style.width = "15vw"
    document.querySelector("#one").style.height = "10vh"
    document.querySelector("#one").style.opacity= "0"
    document.querySelector("#one").style.filter= "blur(10px)"
    document.querySelector("#two").style.width = "10vw"
    document.querySelector("#two").style.height = "10vh"
    document.querySelector("#two").style.opacity= "0"
    document.querySelector("#two").style.filter= "blur(10px)"
    document.querySelector("#three").style.width = "7vw"
    document.querySelector("#three").style.height = "9vh"
    document.querySelector("#three").style.opacity= "0"
    document.querySelector("#three").style.filter= "blur(50px)"
    document.querySelector("#four").style.width = "5vw"
    document.querySelector("#four").style.height = "5vh"
    document.querySelector("#four").style.opacity= "0"
    document.querySelector("#four").style.filter= "blur(50px)"
})


document.querySelector(".right")
.addEventListener("mousemove", function(){
    document.querySelector(".c-center-two").style.height = "100vh"
    document.querySelector("#btn-rght").style.backgroundColor = "#333"
    document.querySelector("#btn-rght").style.color = "#fff"
    document.querySelector("#btn-rght").style.border = "none"
    document.querySelector(".right").style.cursor = "pointer"
    document.querySelector("#five").style.width = "25vw"
    document.querySelector("#five").style.height = "25vh"
    document.querySelector("#five").style.opacity = "1"
    document.querySelector("#five").style.filter= "blur(0.5px)"
    document.querySelector("#six").style.width = "15vw"
    document.querySelector("#six").style.height = "17vh"
    document.querySelector("#six").style.opacity = "1"
    document.querySelector("#six").style.filter= "blur(5px)"
    document.querySelector("#seven").style.width = "10vw"
    document.querySelector("#seven").style.height = "12vh"
    document.querySelector("#seven").style.opacity = "0.5"
    document.querySelector("#seven").style.filter= "blur(20px)"
    document.querySelector("#eight").style.width = "7vw"
    document.querySelector("#eight").style.height = "7vh"
    document.querySelector("#eight").style.opacity = "0.3"
    document.querySelector("#eight").style.filter= "blur(20px)"
})

document.querySelector(".right")
.addEventListener("mouseleave", function(){
    document.querySelector(".c-center-two").style.height = "0vh"
    document.querySelector("#btn-rght").style.backgroundColor = "initial"
    document.querySelector("#btn-rght").style.border = "1px solid #333"
    document.querySelector("#btn-rght").style.color = "initial"
    document.querySelector("#five").style.width = "15vw"
    document.querySelector("#five").style.height = "10vh"
    document.querySelector("#five").style.opacity= "0"
    document.querySelector("#five").style.filter= "blur(10px)"
    document.querySelector("#six").style.width = "10vw"
    document.querySelector("#six").style.height = "10vh"
    document.querySelector("#six").style.opacity= "0"
    document.querySelector("#six").style.filter= "blur(10px)"
    document.querySelector("#seven").style.width = "7vw"
    document.querySelector("#seven").style.height = "9vh"
    document.querySelector("#seven").style.opacity= "0"
    document.querySelector("#seven").style.filter= "blur(50px)"
    document.querySelector("#eight").style.width = "5vw"
    document.querySelector("#eight").style.height = "5vh"
    document.querySelector("#eight").style.opacity= "0"
    document.querySelector("#eight").style.filter= "blur(50px)"
})