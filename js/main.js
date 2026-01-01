

const header = document.getElementById("header");
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const headerCta = document.getElementById("header-cta");
const navItems = document.querySelectorAll(".nav-item");
const logoText = document.querySelector(".logo-text");
const hamburgerIcon = document.querySelector("#menu-btn svg");


/* ==================================================
   MENU MOBILE 
================================================== */

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    mobileMenu.classList.toggle("hidden");
  });
}


/* ==================================================
   SCROLL  liens
================================================== */

document.querySelectorAll("[data-scroll]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = document.querySelector(btn.dataset.scroll);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }

    if (!mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.add("hidden");
    }
  });
});


/* ==================================================
   SCROLL TOP DU logo
================================================== */

document.querySelectorAll("[data-scroll-top]").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (!mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.add("hidden");
    }
  });
});


/* ==================================================
   HEADER SCROLL 
================================================== */

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {

    
    header.classList.remove("bg-transparent", "py-5");
    header.classList.add(
      "bg-card/95",
      "backdrop-blur-md",
      "shadow-soft",
      "py-3"
    );

    
    navItems.forEach((item) => {
      item.classList.remove("nav-light");
      item.classList.add("nav-dark");
    });

    
    logoText.classList.remove("nav-light");
    logoText.classList.add("nav-dark");

    
    hamburgerIcon.classList.remove("nav-light");
    hamburgerIcon.classList.add("nav-dark");

   
    headerCta.classList.remove("btn-outline-light");
    headerCta.classList.add("btn-hero");

  } else {

    
    header.classList.add("bg-transparent", "py-5");
    header.classList.remove(
      "bg-card/95",
      "backdrop-blur-md",
      "shadow-soft",
      "py-3"
    );

    
    navItems.forEach((item) => {
      item.classList.remove("nav-dark");
      item.classList.add("nav-light");
    });

    
    logoText.classList.remove("nav-dark");
    logoText.classList.add("nav-light");

    
    hamburgerIcon.classList.remove("nav-dark");
    hamburgerIcon.classList.add("nav-light");

   
    headerCta.classList.add("btn-outline-light");
    headerCta.classList.remove("btn-hero");
  }
});


/* ==================================================
   close mobile menu
================================================== */

document.addEventListener("click", (e) => {
  if (
    mobileMenu &&
    menuBtn &&
    !mobileMenu.contains(e.target) &&
    !menuBtn.contains(e.target) &&
    !mobileMenu.classList.contains("hidden")
  ) {
    mobileMenu.classList.add("hidden");
  }
});


/* ==================================================
   ÉTAT INITIAL 
================================================== */

navItems.forEach((item) => item.classList.add("nav-light"));
logoText.classList.add("nav-light");

if (hamburgerIcon && window.scrollY <= 50) {
  hamburgerIcon.classList.add("nav-light");
  hamburgerIcon.classList.remove("nav-dark");
}
