// DOM elements
const topbar = document.querySelector(".top-bar");
const whoamiSection = document.querySelector("#whoami-con");
const allsections = document.querySelectorAll(".section");

// // // initial cordinate of the whami section
// // const initialCord = whoamiSection.getBoundingClientRect();
// // adding the sticky menu on scroll
// window.addEventListener("scroll",()=> {
//     console.log(window.scrollY);
//     if(window.scrollY > 10)
//         topbar.classList.add("sticky");
//     else
//         topbar.classList.remove("sticky");
// });

// const noMobile = `<div style="height: 100vh;width: 100vw; display:grid;place-items:center;">
// <img style="width:50vw" src="./img/sad_emoji.png" alt="">
// <h1 style="width: 50vw;text-align: center;font-family: 'Open Sans', sans-serif;" >Sad! Mobile devices are not supported yet!</h1>
// <h3 style="width: 50vw;text-align: center;font-family: 'Open Sans', sans-serif;">Try opeing this page on a computer</h3>
// </div>`;

const sections = document.querySelectorAll(".section");
sections.forEach((section) => {
  section.classList.add("section-hidden");
});

// call back for section observer
const secObserve = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section-hidden");
  observer.unobserve(entry.target);
};

// now make the section observer
const sectionObserver = new IntersectionObserver(secObserve, {
  root: null,
  threshold: 0.5,
});

// make all section hidden
allsections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section-hidden");
});

// lazy loading the image
const loadImg = function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener("load", () => {
      // console.log("hello");
      entry.target.classList.remove("blurry");
    });
    observer.unobserve(entry.target);
  });
};

imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
});

document
  .querySelectorAll("img[data-src]")
  .forEach((el) => imgObserver.observe(el));
