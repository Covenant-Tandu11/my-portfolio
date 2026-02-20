//Hamburger icon
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("current");

  if (menuIcon.classList.contains("fa-bars")) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-xmark");
  } else {
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
  }
});

// TYPING EFFECT
const words = ["Web Developer", "UI Designer"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
  currentWord = words[i];
  if (isDeleting) {
    j--;
    } else {
      j++;
    }

  document.getElementById("typing").textContent = currentWord.slice(0, j);

  if (!isDeleting && j === currentWord.length) {
    isDeleting = true;
    setTimeout(type, 1000);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(type, isDeleting ? 60 : 120);
  }

type();

//Scroll indicator
const dots = document.querySelectorAll(".scroll-indicator a");

const removeActiveClass = () => {
  dots.forEach((dot) => {
    dot.classList.remove("active");
  })
};

const addActiveClass = (entries, observer) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
    let currentDot = document.querySelector(`.scroll-indicator a[href ='#${entry.target.id}']`);
    removeActiveClass();
    currentDot.classList.add("active");
    }
  });
};

const options = {
  threshold: 0.3,
};

const observer = new IntersectionObserver(addActiveClass, options);
const sections = document.querySelectorAll("section");

sections.forEach(section => {
  observer.observe(section);
});

const cards = document.querySelectorAll(".project-card");

function revealCards() {
  const trigger = window.innerHeight * 0.85;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < trigger) {
      card.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealCards);
window.addEventListener("load", revealCards);