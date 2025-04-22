let prevScrollpos = window.pageYOffset;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
        navbar.style.top = "0";
        navbar.classList.remove('fixed');
    } else {
        navbar.style.top = "-80px";
        navbar.classList.add('fixed');
    }
    
    if (currentScrollPos === 0) {
        navbar.classList.remove('fixed');
    } else {
        navbar.classList.add('fixed');
    }

    // Function to increase numbers
    function increaseNumbers() {
        let engaged = 0;
        // let panIndia = 0;
        let saved = 0;

        const engagedElement = document.getElementById('engagedLives');
        const panIndiaElement = document.getElementById('panIndia');
        const savedElement = document.getElementById('savedLives');

        setInterval(() => {
            if (engaged < 5000) {
                engaged += 100;
                engagedElement.textContent = engaged;
            }

            // if (panIndia < 50) {
            //     panIndia += 1;
            //     panIndiaElement.textContent = panIndia;
            // }

            if (saved < 100) {
                saved += 2;
                savedElement.textContent = saved;
            }
        }, 100);
    }

    // Call the function when the page is loaded
    window.onload = increaseNumbers();

    prevScrollpos = currentScrollPos;
});
$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 3, // Number of slides to show at a time
        slidesToScroll: 1, // Number of slides to scroll at a time
        autoplay: true, // Autoplay the slider
        autoplaySpeed: 2000, // Autoplay speed in milliseconds
        dots: true, // Show navigation dots
        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});
$(document).ready(function(){
    $('.question').click(function(){
        $(this).find('.answer').slideToggle();
        $(this).find('.arrow').toggleClass('rotate-down');
    });
});