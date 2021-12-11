var currentSlide = 1;
var maxSlides = 4;
function hideMenuSlides(slides, except) {
    for (var i in slides) {
        if (slides[i] instanceof HTMLElement) {
            if (parseInt(slides[i].dataset.slideId) === except) {
                slides[i].classList.add('active');
            } else {
                slides[i].classList.remove('active');
            }
        }
    }
}

function hideSlides(slides, except) {
    for (var i in slides) {
        if (slides[i] instanceof HTMLElement) {
            if (parseInt(slides[i].dataset.slideId) === except) {
                slides[i].classList.add('show');
            } else {
                slides[i].classList.remove('show');
            }
        }
    }
}
window.addEventListener('load', function () {
    var full_slides = document.querySelectorAll('.slide_full');
    hideSlides(full_slides, currentSlide);
    var mobile_slides = document.querySelectorAll('.slide_mobile');
    hideSlides(mobile_slides, currentSlide);
    var menu_slides = document.querySelectorAll('.slide-menu-item');
    hideMenuSlides(menu_slides, currentSlide);

    document.getElementById('next_button').addEventListener('click', function () {
        ++currentSlide;
        if (currentSlide > maxSlides) {
            currentSlide = maxSlides;
        }
        hideSlides(full_slides, currentSlide);
        hideSlides(mobile_slides, currentSlide);
        hideMenuSlides(menu_slides, currentSlide);
    });
    document.getElementById('previous_button').addEventListener('click', function () {
        --currentSlide;
        if (currentSlide < 1) {
            currentSlide = 1;
        }
        hideSlides(full_slides, currentSlide);
        hideSlides(mobile_slides, currentSlide);
        hideMenuSlides(menu_slides, currentSlide);
    });

    for (var i in menu_slides) {
        if (menu_slides[i] instanceof HTMLElement) {
            menu_slides[i].addEventListener('click', function (e) {
                currentSlide = parseInt(e.path[0].dataset.slideId);
                hideSlides(full_slides, currentSlide);
                hideSlides(mobile_slides, currentSlide);
                hideMenuSlides(menu_slides, currentSlide);
            });
        }
    }
});