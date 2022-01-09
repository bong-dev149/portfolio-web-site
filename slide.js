'use strict';
const sliderFun = function() {
    const sliderContent = [
        {
            skillName: 'C',
            skillInfo: 'C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system. By design, C provides constructs that map efficiently to typical machine instructions.',
            skillImagePath: './img/c.png'
        },
        {
            skillName: 'JavaScript',
            skillInfo: 'JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.',
            skillImagePath: './img/js.png'
        },
        {
            skillName: 'Python',
            skillInfo: 'Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation. Its language constructs as well as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects',
            skillImagePath: './img/python.png'
        },
        {
            skillName: 'Java',
            skillInfo: 'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
            skillImagePath: './img/java.png'
        },
        {
            skillName: 'MySQL',
            skillInfo: 'MySQL is an open-source relational database management system. Its name is a combination of "My", the name of co-founder Michael Widenius\'s daughter, and "SQL", the abbreviation for Structured Query Language',
            skillImagePath: './img/mysql.png'
        },
        {
            skillName: 'Linux',
            skillInfo: 'Linux is a family of open-source Unix-like operating systems based on the Linux kernel, an operating system kernel first released on September 17, 1991, by Linus Torvalds. Linux is typically packaged in a Linux distribution.',
            skillImagePath: './img/linux.png'
        },
        {
            skillName: 'HTML/CSS',
            skillInfo: 'The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.',
            skillImagePath: './img/html.png'
        }
        
    ];
    let output = '';
    const slider = document.querySelector(".slider");
    sliderContent.forEach((slide,i)=> {
        output += `<div class="slides" data-index="${i}">
        <div class="slide-header">${slide.skillName}</div>
        <div class="slide-info-container">
            <div class="slide-text">${slide.skillInfo}</div>
            <div class="slide-img">
                <img class="slider-img" src="${slide.skillImagePath}" alt="${slide.skillName}">
            </div>
        </div>
    </div>`;
    });
    output+=`<button class="slide-btn" id="slide-left">&#8592</button>
    <button class="slide-btn" id="slide-right">&#8594</button>
    <div class="dots"></div>`;
    slider.innerHTML = output;
    
    
    
    const dotHolder = document.querySelector(".dots");
    const createDots = function () {
        slides.forEach(function (_, i) {
          dotHolder.insertAdjacentHTML(
            'beforeend',
            `<button class="dots__dot" data-slide="${i}"></button>`
          );
        });
    };
    
    const activateDot = function (slide) {
        document
          .querySelectorAll('.dots__dot')
          .forEach(dot => dot.classList.remove('dots__dot--active'));
    
        document
          .querySelector(`.dots__dot[data-slide="${slide}"]`)
          .classList.add('dots__dot--active');
      };
    
    
    
    // slide functionality
    const slides = document.querySelectorAll(".slides");
    const slideLeftBtn = document.querySelector("#slide-left");
    const slideRightBtn = document.querySelector("#slide-right");
    
    slides.forEach((slide,i)=> {
        slide.style.transform = `translateX(${i*100}%)`;
    });
    
    let currentSlide = 0;
    
    const goToSlide = function(n) {
        slides.forEach(
            (s, i) => (s.style.transform = `translateX(${100 * (i - n)}%)`)
        );
        activateDot(n);
    }
    
    const nextSlide = function() {
        if(currentSlide < slides.length-1 ) {
            currentSlide++;
        } else {
            currentSlide = 0;
        }
        goToSlide(currentSlide);
    }
    
    const prevSlide = function() {
        if(currentSlide>0) {
            currentSlide--;
            goToSlide(currentSlide);
        }
    }
    
    dotHolder.addEventListener('click', function (e) {
        if (e.target.classList.contains('dots__dot')) {
          const { slide } = e.target.dataset;
          currentSlide = slide;
          goToSlide(slide);
          activateDot(slide);
        }
    });
    
    const init = function() {
        createDots();
        currentSlide = 0;
        goToSlide(0);
        activateDot(0);
    }
    init();
    
    slideLeftBtn.addEventListener("click",prevSlide);
    slideRightBtn.addEventListener("click",nextSlide);
    
};
sliderFun();