const nav = document.querySelector(".nav");
const navMenu = document.querySelector(".nav-items");
const btnToggleNav = document.querySelector(".menu-btn");
const workEls = document.querySelectorAll(".work-box");
const workImgs = document.querySelectorAll(".work-img");
const mainEl = document.querySelector("main");
const exploreBtn = document.querySelector(".explore-all-btn");
const workBoxes = document.querySelector(".work-boxes");

const toggleNav = () => {
  nav.classList.toggle("hidden");

  // Prevent screen from scrolling when menu is opened
  document.body.classList.toggle("lock-screen");

  if (nav.classList.contains("hidden")) {
    btnToggleNav.textContent = "menu";
  } else {
    // When menu is opened after transition change text respectively
    setTimeout(() => {
      btnToggleNav.textContent = "close";
    }, 475);
  }
};

btnToggleNav.addEventListener("click", toggleNav);

navMenu.addEventListener("click", (e) => {
  if (e.target.localName === "a") {
    toggleNav();
  }
});

document.body.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !nav.classList.contains("hidden")) {
    toggleNav();
  }
});

// Animating work instances on scroll

workImgs.forEach((workImg) => workImg.classList.add("transform"));

let observer = new IntersectionObserver(
  (entries) => {
    const [entry] = entries;
    const [textbox, picture] = Array.from(entry.target.children);
    if (entry.isIntersecting) {
      picture.classList.remove("transform");
      Array.from(textbox.children).forEach(
        (el) => (el.style.animationPlayState = "running")
      );
    }
  },
  { threshold: 0.1 }
);

workEls.forEach((workEl) => {
  observer.observe(workEl);
});

// Toggle theme and store user preferred theme for future

const switchThemeEl = document.querySelector('input[type="checkbox"]');
const storedTheme = localStorage.getItem("theme");

switchThemeEl.checked = storedTheme === "dark";

if (storedTheme === "dark") {
  document.body.classList.add("dark");
} else {
  document.body.classList.add("light");
}

switchThemeEl.addEventListener("click", () => {
  const isChecked = switchThemeEl.checked;

  if (!isChecked) {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    localStorage.setItem("theme", "light");
  } else {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
    localStorage.setItem("theme", "dark");
  }
});
// Trap the tab when menu is opened

const lastFocusedEl = document.querySelector('a[aria-data="last-focused"]');

document.body.addEventListener("keydown", (e) => {
  if (e.key === "Tab" && document.activeElement === lastFocusedEl) {
    e.preventDefault();
    btnToggleNav.focus();
  }
});

const logosWrappers = document.querySelectorAll(".logo-group");

const sleep = (number) => new Promise((res) => setTimeout(res, number));

logosWrappers.forEach(async (logoWrapper, i) => {
  const logos = Array.from(logoWrapper.children);
  await sleep(1400 * i);
  setInterval(() => {
    let temp = logos[0];
    logos[0] = logos[1];
    logos[1] = logos[2];
    logos[2] = temp;
    logos[0].classList.add("hide", "to-top");
    logos[1].classList.remove("hide", "to-top", "to-bottom");
    logos[2].classList.add("hide", "to-bottom");
  }, 5600);
});

// Extra projects data (you can add as many as you like)
const extraProjects = [
  {
    title: "The React Quiz",
    description: "The React Quiz App",
    technologies: ["HTML", "CSS", "React Js"],
    live: "https://eatnsplit-h.netlify.app/",
    github: "https://github.com/Malik-Haziq/eat-n-split/",
    image: "assets/images/work/react.PNG",
    alt: "React Quiz",
  },
  {
    title: "Eat n split",
    description: "Eat-n-split react app",
    technologies: ["HTML", "CSS", "React Js"],
    live: "https://eatnsplit-h.netlify.app/",
    github: "https://github.com/Malik-Haziq/eat-n-split/",
    image: "assets/images/work/eat-n-split.webp",
    alt: "Eat n split",
  },
  {
    title: "Travel List",
    description: "React app to keep track of your traveling goals",
    technologies: ["HTML", "CSS", "React Js"],
    live: "https://travellist-h.netlify.app/",
    github: "https://github.com/Malik-Haziq/travel-list",
    image: "assets/images/work/travel-list.webp",
    alt: "Travel List",
  },
  {
    title: "SMS",
    description: "One-on-One Online Tutoring website",
    technologies: ["HTML", "CSS", "Tailwind CSS", "Javascript", "PHP"],
    live: "https://sciencemathsmart.com",
    github: "https://github.com/Malik-Haziq/ScienceMathSmart",
    image: "assets/images/work/sms.webp",
    alt: "Science Math Smart",
  },
  {
    title: "Organic Food Store",
    description: "E-commerce Site for organic food",
    technologies: ["HTML", "CSS", "Bootstrap", "Javascript", "PHP"],
    live: "https://github.com/Toqeernaqvi/organicFoodWebsite",
    github: "https://github.com/Toqeernaqvi/organicFoodWebsite",
    image: "assets/images/work/organic-food.webp",
    alt: "organic food website screenshot",
  },
  {
    title: "Bankist",
    description: "A banking web app template",
    technologies: ["HTML", "CSS", "Javascript"],
    live: "https://bankist-p.netlify.app",
    github: null,
    image: "assets/images/work/bankist.webp",
    alt: "bankist web app template",
  },
  {
    title: "Mapty",
    description: "Web app to track your running or cycling",
    technologies: ["HTML", "CSS", "Javascript"],
    live: "https://mapty-p.netlify.app/",
    github: null,
    image: "assets/images/work/matpy.webp",
    alt: "mapty web app template",
  },
  {
    title: "OmniFood",
    description: "A Food delivery website template",
    technologies: ["HTML", "CSS", "Javascript"],
    live: "https://omni-food-p.netlify.app/",
    github: null,
    image: "assets/images/work/omnifood.webp",
    alt: "omnifood website template",
  },
];

function runAnimation(workEl) {
  const [textbox, picture] = Array.from(workEl.children);
  picture.classList.remove("transform");
  Array.from(textbox.children).forEach(
    (el) => (el.style.animationPlayState = "running")
  );
}

exploreBtn.addEventListener("click", function (e) {
  e.preventDefault();

  extraProjects.forEach((project) => {
    const box = document.createElement("div");
    box.classList.add("work-box");

    box.innerHTML = `
       <div class="work-textbox">
         <h3 class="h3">${project.title}</h3>
         <p class="work-text">${project.description}</p>
         <ol class="work-technologies">
           ${project.technologies.map((tech) => `<li>${tech}</li>`).join("")}
         </ol>
         <div class="work-links">
           <a href="${
             project.live
           }" target="_blank" rel="noopener" class="link">Explore this project</a>
           ${
             project.github
               ? `<a href="${project.github}" target="_blank" rel="noopener" title="Source code">
             <img src="assets/images/social-links/github.svg" alt="GitHub" loading="lazy" />
           </a>`
               : ""
           }
         </div>
       </div>
       <picture class="work-img">
         <img loading="lazy" src="${project.image}" alt="${project.alt}" />
       </picture>
     `;

    box.querySelector(".work-img").classList.add("transform");

    workBoxes.appendChild(box);

    observer.observe(box);

    const rect = box.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      runAnimation(box);
    }
  });

  exploreBtn.style.display = "none";
});
