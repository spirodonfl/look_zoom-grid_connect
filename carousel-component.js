class CarouselComponent extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'closed' });
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
}
ul .slide-menu-item {
    display: inline-block;
    font-size: 20px;
    color: white;
    margin-right: 20px;
}
ul .slide-menu-item.last {
    margin-right: 0px;
}
ul .slide-menu-item.active {
    font-weight: bold;
    padding-bottom: 5px;
    border-bottom: 3px solid white;
}
#carousel_component #carousel_slides .slide_mobile { display: none; }
@media screen and (max-width: 1024px) {
    #carousel_component #carousel_slides .slide_full { display: none; }
    #carousel_component #carousel_slides .slide_mobile { display: block; }
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
    <div id="carousel_slides" style="text-align: center; background-color: var(--bg-color-dark); background-image: url(\"images/carousel-slide-1.png\")">
        <div data-slide-id="1" class="slide_full">
            <div id="slide_left">
                <div id="slide_left_logo"><img src="images/carousel-slide-1-logo.png" /></div>
                <div id="slide_left_text">
                    <div id="slide_left_text_title">Moen partners with Grid Connect on first smart shower technology</div>
                    <div id="slide_left_text_content">Grid Connect developed WiFi technology, device firmware, and iOS / Android apps that allowed Moen to bring their Smart Shower concept to life.</div>
                </div>
            </div>
            <div id="slide_right">
                <div id="slide_right_logo"><img src="images/carousel-slide-1-text-image.png" /></div>
                <p class="title">Meeting demand for smart home technology</p>
                <p>With Grid Connect development support, Moen added product control via app (iOS or Android), voice (Amazon Alexa, Apple HomeKit, Google Assistant) and in-wall panel.</p>
                <p class="title">Enhancing product and customer experience</p>
                <p>Grid Connect developed the software and firmware to include a dozen presets like greeting, temperature, pressure, notifications, and timer to personalize product use.</p>
                <p class="title">Features to help customers save water and time</p>
                <p>With Grid Connect development support, Moen added product control via app (iOS or Android), voice (Amazon Alexa, Apple HomeKit, Google Assistant) and in-wall panel.</p>
            </div>
        </div>
        <div data-slide-id="1" class="slide_mobile">
            <div id="slide_mobile_logo"><img src="images/carousel-slide-1-logo.png" /></div>
            <div id="slide_mobile_text">
                <p class="title">Meeting demand for smart home technology</p>
                <p>With Grid Connect development support, Moen added product control via app (iOS or Android), voice (Amazon Alexa, Apple HomeKit, Google Assistant) and in-wall panel.</p>
                <p class="title">Enhancing product and customer experience</p>
                <p>Grid Connect developed the software and firmware to include a dozen presets like greeting, temperature, pressure, notifications, and timer to personalize product use.</p>
                <p class="title">Features to help customers save water and time</p>
                <p>With Grid Connect development support, Moen added product control via app (iOS or Android), voice (Amazon Alexa, Apple HomeKit, Google Assistant) and in-wall panel.</p>
            </div>
        </div>
        <div data-slide-id="2" class="slide_full">
            <div id="slide_left">
                <div id="slide_left_logo"><img src="images/carousel-slide-1-logo.png" /></div>
                <div id="slide_left_text">
                    <div id="slide_left_text_title">SLIDE 2</div>
                    <div id="slide_left_text_content">SLIDE 2 CONTENT</div>
                </div>
            </div>
            <div id="slide_right">
                <div id="slide_right_logo"><img src="images/carousel-slide-1-text-image.png" /></div>
                <p class="title">Meeting demand for smart home technology</p>
                <p>With Grid Connect development support, Moen added product control via app (iOS or Android), voice (Amazon Alexa, Apple HomeKit, Google Assistant) and in-wall panel.</p>
                <p class="title">Enhancing product and customer experience</p>
                <p>Grid Connect developed the software and firmware to include a dozen presets like greeting, temperature, pressure, notifications, and timer to personalize product use.</p>
                <p class="title">Features to help customers save water and time</p>
                <p>With Grid Connect development support, Moen added product control via app (iOS or Android), voice (Amazon Alexa, Apple HomeKit, Google Assistant) and in-wall panel.</p>
            </div>
        </div>
        <div data-slide-id="2" class="slide_mobile">
            <div id="slide_mobile_logo"><img src="images/carousel-slide-1-logo.png" /></div>
            <div id="slide_mobile_text">
                <p class="title">SLIDE 2 IS BETTER</p>
                <p>With Grid Connect development support, Moen added product control via app (iOS or Android), voice (Amazon Alexa, Apple HomeKit, Google Assistant) and in-wall panel.</p>
                <p class="title">Enhancing product and customer experience</p>
                <p>Grid Connect developed the software and firmware to include a dozen presets like greeting, temperature, pressure, notifications, and timer to personalize product use.</p>
                <p class="title">Features to help customers save water and time</p>
                <p>With Grid Connect development support, Moen added product control via app (iOS or Android), voice (Amazon Alexa, Apple HomeKit, Google Assistant) and in-wall panel.</p>
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
        this.hideSlides(full_slides, '1');
        var mobile_slides = this.shadow.querySelectorAll('.slide_mobile');
        this.hideSlides(mobile_slides, '1');
        var menu_slides = this.shadow.querySelectorAll('.slide-menu-item');
        this.hideMenuSlides(menu_slides, '1');

        var myself = this;
        this.shadow.getElementById('next_button').addEventListener('click', function () {
            myself.hideSlides(full_slides, '2');
            myself.hideSlides(mobile_slides, '2');
            myself.hideMenuSlides(menu_slides, '2');
        });
    }

    hideMenuSlides(slides, except) {
        for (var i in slides) {
            if (slides[i] instanceof HTMLElement) {
                if (slides[i].dataset.slideId === except) {
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
                if (slides[i].dataset.slideId === except) {
                    slides[i].style.display = 'block';
                } else {
                    slides[i].style.display = 'none';
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
