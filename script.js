// Premium interactions for Photo Pasal

// Loader
window.addEventListener("load",()=>{

    gsap.to("#loader",{

        opacity:0,

        duration:0.8,

        delay:1.3,

        ease:"power3.out",

        onComplete:()=>{

            document.getElementById("loader").style.display="none";

        }

    });

});

// Lenis smooth scrolling
const lenis = new Lenis({
  duration: 1.2,
  smoothWheel: true
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Register GSAP
gsap.registerPlugin(ScrollTrigger);

// Hero Animation
gsap.from(".hero h1", {
  y: 80,
  opacity: 0,
  duration: 1.2,
  ease: "power4.out"
});

gsap.from(".hero p", {
  y: 30,
  opacity: 0,
  duration: 1,
  delay: 0.4
});

gsap.from(".btn", {
  scale: 0.8,
  opacity: 0,
  duration: 0.8,
  delay: 0.8
});

// Portfolio Cards Reveal
gsap.utils.toArray(".item").forEach((card, i) => {
  gsap.to(card, {
    opacity: 1,
    y: 0,
    duration: 0.9,
    ease: "power3.out",
    delay: i * 0.03,
    scrollTrigger: {
      trigger: card,
      start: "top 85%"
    }
  });
});

// Navbar Animation
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 80) {

    header.style.background = "rgba(10,10,10,.65)";
    header.style.padding = "12px 22px";

  } else {

    header.style.background = "rgba(255,255,255,.06)";
    header.style.padding = "16px 24px";

  }

});

// Custom Cursor
const cursor = document.querySelector(".cursor");
const cursor2 = document.querySelector(".cursor2");

window.addEventListener("mousemove", e => {

  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.08
  });

  gsap.to(cursor2, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.25
  });

});

// Magnetic Buttons
document.querySelectorAll(".btn, .contact-btn").forEach(button => {

  button.addEventListener("mousemove", e => {

    const rect = button.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;

    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(button, {

      x: x * 0.18,

      y: y * 0.18,

      duration: 0.25

    });

  });

  button.addEventListener("mouseleave", () => {

    gsap.to(button, {

      x: 0,

      y: 0,

      duration: 0.35

    });

  });

});

// 3D Tilt Effect
document.querySelectorAll(".item").forEach(item => {

  item.addEventListener("mousemove", e => {

    const rect = item.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width - 0.5;

    const y = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(item, {

      rotateY: x * 12,

      rotateX: -y * 12,

      transformPerspective: 800,

      duration: 0.3

    });

  });

  item.addEventListener("mouseleave", () => {

    gsap.to(item, {

      rotateX: 0,

      rotateY: 0,

      duration: 0.4

    });

  });

});

// Aurora Background Mouse Effect
window.addEventListener("mousemove", e => {

  document.querySelectorAll(".aurora span").forEach((blob, i) => {

    const strength = (i + 1) * 8;

    gsap.to(blob, {

      x: (e.clientX / window.innerWidth - 0.5) * strength,

      y: (e.clientY / window.innerHeight - 0.5) * strength,

      duration: 1.2

    });

  });

});const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".item").forEach(item => {

    item.addEventListener("click", () => {

        const img = item.querySelector("img");

        lightboxImg.src = img.src;

        lightbox.classList.add("active");

    });

});

closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("active");
});

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove("active");
    }
});gsap.from("#contact .contact-content",{

    scrollTrigger:{
        trigger:"#contact",
        start:"top 70%"
    },

    y:120,

    opacity:0,

    scale:.9,

    duration:1.3,

    ease:"power4.out"

});