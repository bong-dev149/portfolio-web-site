const hamMenu = document.querySelector('.ham-burger-menu');
const hamLines = document.querySelectorAll('.ham-line');
const hamLine1 = hamLines[0];
const hamLine2 = hamLines[1];
const hamLine3 = hamLines[2];
const navMenu = document.querySelector('.nav-buttons');


let isCross = false;


const toggleCross = () => {
    if(isCross) {
        hamLine1.classList.remove('hl-1-cross');
        hamLine2.classList.remove('hl-2-cross');
        hamLine3.classList.remove('hl-3-cross');
        isCross=false;
    } else {
        hamLine1.classList.add('hl-1-cross');
        hamLine2.classList.add('hl-2-cross');
        hamLine3.classList.add('hl-3-cross');
        isCross=true;
    }
}

const toggleMenu = () => {
    if(isCross) {
        navMenu.classList.remove('close-menu');
        navMenu.classList.add('show-menu');
    } else {
        navMenu.classList.remove('show-menu');
        navMenu.classList.add('close-menu');
    }
}

hamMenu.addEventListener("click",()=>{
    toggleCross();
    toggleMenu();
});

navMenu.addEventListener('click',()=> {
    toggleCross();
    toggleMenu();
});