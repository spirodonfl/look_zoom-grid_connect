class CarouselComponent extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'closed' });

        this.currentSlide = 1;
        this.maxSlides = 4;
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadow.innerHTML = `
<style type="text/css">
#carousel_component {}
#carousel_component #carousel_title {
    background-color: #015F5D;
    color: white;
    padding: 30px;
    font-size: 32px;
    font-weight: bold;
    text-align: center;
}
#carousel_component #carousel_menu {
    background-color: #015F5D;
    text-align: center;
    padding-bottom: 30px;
}
ul {
    list-style-type: none;
    margin: 0px;
    padding: 0px;
    padding-left: 20px;
    padding-right: 20px;

    overflow-x: auto;
    white-space: nowrap;
}
ul .slide-menu-item {
    display: inline-block;
    font-size: 20px;
    color: white;
    margin-right: 20px;
}
ul .slide-menu-item:hover {
    cursor: pointer;
}
ul .slide-menu-item.last {
    margin-right: 0px;
}
ul .slide-menu-item.active {
    font-weight: bold;
    padding-bottom: 5px;
    border-bottom: 3px solid white;
}

#carousel_component #carousel_slides {
    text-align: center;
    background-color: var(--bg-color-dark);
    background-image: url("images/carousel-slide-1.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

#carousel_component #carousel_slides .slide_mobile.show {
    --xs-display: var(--media-xs) block;
    --sm-display: var(--media-sm) block;
    --md-display: var(--media-md) none;
    --lg-display: var(--media-lg) none;
    display: var(--xs-display, var(--sm-display, var(--md-display, var(--lg-display))));
}
#carousel_component #carousel_slides .slide_full.show {
    --xs-display: var(--media-xs) none;
    --sm-display: var(--media-sm) none;
    --md-display: var(--media-md) grid;
    --lg-display: var(--media-lg) grid;
    display: var(--xs-display, var(--sm-display, var(--md-display, var(--lg-display))));
}

.slide_full {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.slide_left {
    color: var(--text-color-light);
    text-align: left;
    height: 720px;
    padding: 60px;
}
.slide_right { padding: 60px; }
.slide_right_content {
    background: rgba(255, 255, 255, 0.68);
    height: 100%;
    padding: 40px;
    text-align: left;
}

.slide_left_logo {
    margin-bottom: 24px;
}
.slide_right_logo {
    text-align: center;
}
.slide_left_text_title {
    font-size: 46px;
    margin-bottom: 30px;
}
.slide_left_text_content {
    font-size: 20px;
}

.slide_full, .slide_mobile { display: none; }

.slide_mobile_text { height: 570px; }

.slide_mobile_logo { text-align: left; }
.slide_mobile_logo img {
    width: 140px;
    padding: 20px;
}

p.title {
    font-weight: bold;
    font-size: 18px;
}
</style>
<div id="carousel_component">
    <div id="carousel_title">Your custom engineering & manufacturing partner</div>
    <div id="carousel_menu">
        <ul>
            <li data-slide-id="1" class="slide-menu-item first active">Moen</li>
            <li data-slide-id="2" class="slide-menu-item">Rollease Acmeda</li>
            <li data-slide-id="3" class="slide-menu-item">Shclage</li>
            <li data-slide-id="4" class="slide-menu-item last">Wayne Pumps</li>
        </ul>
    </div>
    <div id="carousel_slides">
        <div data-slide-id="1" class="slide_full">
            <div class="slide_left">
                <div class="slide_left_logo"><img src="images/carousel-slide-1-logo.png" /></div>
                <div class="slide_left_text">
                    <div class="slide_left_text_title">Moen partners with Grid Connect on first smart shower technology</div>
                    <div class="slide_left_text_content">Grid Connect developed WiFi technology, device firmware, and iOS / Android apps that allowed Moen to bring their Smart Shower concept to life.</div>
                </div>
            </div>
            <div class="slide_right">
                <div class="slide_right_content">
                    <div class="slide_right_logo"><img src="images/carousel-slide-1-text-image.png" /></div>
                    <p class="title">Meeting demand for smart home technology</p>
                    <p>With Grid Connect development support, Moen added product control via app (iOS or Android), voice (Amazon Alexa, Apple HomeKit, Google Assistant) and in-wall panel.</p>
                    <p class="title">Enhancing product and customer experience</p>
                    <p>Grid Connect developed the software and firmware to include a dozen presets like greeting, temperature, pressure, notifications, and timer to personalize product use.</p>
                    <p class="title">Features to help customers save water and time</p>
                    <p>With Grid Connect development support, Moen added product control via app (iOS or Android), voice (Amazon Alexa, Apple HomeKit, Google Assistant) and in-wall panel.</p>
                </div>
            </div>
        </div>
        <div data-slide-id="1" class="slide_mobile">
            <div class="slide_mobile_logo"><img src="images/carousel-slide-1-logo.png" /></div>
            <div class="slide_mobile_text">
                <div class="slide_right_content">
                    <p class="title">Meeting demand for smart home technology</p>
                    <p>With Grid Connect development support, Moen added product control via app (iOS or Android), voice (Amazon Alexa, Apple HomeKit, Google Assistant) and in-wall panel.</p>
                    <p class="title">Enhancing product and customer experience</p>
                    <p>Grid Connect developed the software and firmware to include a dozen presets like greeting, temperature, pressure, notifications, and timer to personalize product use.</p>
                    <p class="title">Features to help customers save water and time</p>
                    <p>With Grid Connect development support, Moen added product control via app (iOS or Android), voice (Amazon Alexa, Apple HomeKit, Google Assistant) and in-wall panel.</p>
                </div>
            </div>
        </div>
        <div data-slide-id="2" class="slide_full">
            <div class="slide_left">
                <div class="slide_left_logo"><img src="images/carousel-slide-1-logo.png" /></div>
                <div class="slide_left_text">
                    <div class="slide_left_text_title">SLIDE 2</div>
                    <div class="slide_left_text_content">SLIDE 2 CONTENT</div>
                </div>
            </div>
            <div class="slide_right">
                <div class="slide_right_content">
                    <div class="slide_right_logo"><img src="images/carousel-slide-1-text-image.png" /></div>
                    <p class="title">Meeting demand for smart home technology</p>
                    <p>With Grid Connect development support, Moen added product control via app (iOS or Android), voice (Amazon Alexa, Apple HomeKit, Google Assistant) and in-wall panel.</p>
                    <p class="title">Enhancing product and customer experience</p>
                    <p>Grid Connect developed the software and firmware to include a dozen presets like greeting, temperature, pressure, notifications, and timer to personalize product use.</p>
                    <p class="title">Features to help customers save water and time</p>
                    <p>With Grid Connect development support, Moen added product control via app (iOS or Android), voice (Amazon Alexa, Apple HomeKit, Google Assistant) and in-wall panel.</p>
                </div>
            </div>
        </div>
        <div data-slide-id="2" class="slide_mobile">
            <div class="slide_mobile_logo"><img src="images/carousel-slide-1-logo.png" /></div>
            <div class="slide_mobile_text">
                <div class="slide_right_content">
                    <p class="title">SLIDE 2 IS BETTER</p>
                    <p>With Grid Connect development support, Moen added product control via app (iOS or Android), voice (Amazon Alexa, Apple HomeKit, Google Assistant) and in-wall panel.</p>
                    <p class="title">Enhancing product and customer experience</p>
                    <p>Grid Connect developed the software and firmware to include a dozen presets like greeting, temperature, pressure, notifications, and timer to personalize product use.</p>
                    <p class="title">Features to help customers save water and time</p>
                    <p>With Grid Connect development support, Moen added product control via app (iOS or Android), voice (Amazon Alexa, Apple HomeKit, Google Assistant) and in-wall panel.</p>
                </div>
            </div>
        </div>
    </div>
    <div id="carousel_buttons" style="text-align: center; margin-top: -30px;">
        <img src="images/carousel-left-button.png" id="previous_button" />
        <img src="images/carousel-right-button.png" id="next_button" />
    </div>
</div>
`;
        var full_slides = this.shadow.querySelectorAll('.slide_full');
        this.hideSlides(full_slides, this.currentSlide);
        var mobile_slides = this.shadow.querySelectorAll('.slide_mobile');
        this.hideSlides(mobile_slides, this.currentSlide);
        var menu_slides = this.shadow.querySelectorAll('.slide-menu-item');
        this.hideMenuSlides(menu_slides, this.currentSlide);

        var myself = this;
        this.shadow.getElementById('next_button').addEventListener('click', function () {
            ++myself.currentSlide;
            if (myself.currentSlide > myself.maxSlides) {
                myself.currentSlide = myself.maxSlides;
            }
            myself.hideSlides(full_slides, myself.currentSlide);
            myself.hideSlides(mobile_slides, myself.currentSlide);
            myself.hideMenuSlides(menu_slides, myself.currentSlide);
        });
        this.shadow.getElementById('previous_button').addEventListener('click', function () {
            --myself.currentSlide;
            if (myself.currentSlide < 1) {
                myself.currentSlide = 1;
            }
            myself.hideSlides(full_slides, myself.currentSlide);
            myself.hideSlides(mobile_slides, myself.currentSlide);
            myself.hideMenuSlides(menu_slides, myself.currentSlide);
        });

        for (var i in menu_slides) {
            if (menu_slides[i] instanceof HTMLElement) {
                menu_slides[i].addEventListener('click', function (e) {
                    myself.currentSlide = parseInt(e.path[0].dataset.slideId);
                    myself.hideSlides(full_slides, myself.currentSlide);
                    myself.hideSlides(mobile_slides, myself.currentSlide);
                    myself.hideMenuSlides(menu_slides, myself.currentSlide);
                });
            }
        }
    }

    hideMenuSlides(slides, except) {
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

    hideSlides(slides, except) {
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

    static get observedAttributes() {
        return [];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue === newValue) {
            return;
        }
    }
}
customElements.define('carousel-component', CarouselComponent);
