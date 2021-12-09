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
</style>
<div id="carousel_component">
    <div id="carousel_title" style="background-color: #015F5D; color: white; padding: 30px; font-size: 32px; font-weight: bold; text-align: center;">Your custom engineering & manufacturing partner</div>
    <div id="carousel_menu" style="background-color: #015F5D; text-align: center; padding-bottom: 30px;">
        <ul style="list-style-type: none; margin: 0px; padding: 0px;">
            <li style="display: inline-block; font-size: 20px; color: white; margin-right: 20px; font-weight: bold; padding-bottom: 5px; border-bottom: 3px solid white;">Moen</li>
            <li style="display: inline-block; font-size: 20px; color: white; margin-right: 20px;">Rollease Acmeda</li>
            <li style="display: inline-block; font-size: 20px; color: white; margin-right: 20px;">Shclage</li>
            <li style="display: inline-block; font-size: 20px; color: white;">Wayne Pumps</li>
        </ul>
    </div>
    <div id="carousel_slides" style="text-align: center; background-color: var(--bg-color-dark);">
        <img src="images/carousel-slide-1.png" />
    </div>
    <div id="carousel_buttons" style="text-align: center; margin-top: -30px;">
        <img src="images/carousel-left-button.png" />
        <img src="images/carousel-right-button.png" />
    </div>
</div>
`;
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
