class HeroComponent extends HTMLElement {
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
    #hero_component_wrapper {
        width: 100%;
        background-color: var(--bg-color-dark);
    }
    #hero_component {
        ${
            (this.getAttribute("image-one") === null) ?
                '--this-hero-image-one: var(--hero-image-one);'
            :
                '--this-hero-image-one: url("' + this.getAttribute("image-one") + '");'
        }
        ${
            (this.getAttribute("image-two") === null) ?
                '--this-hero-image-two: var(--hero-image-two);'
            :
                '--this-hero-image-two: url("' + this.getAttribute("image-two") + '");'
        }
        ${
            (this.getAttribute("image-three") === null) ?
                '--this-hero-image-three: var(--hero-image-three);'
            :
                '--this-hero-image-three: url("' + this.getAttribute("image-three") + '");'
        }
        display: grid;
        grid-template-areas: "imageOne"
                             "imageTwo"
                             "imageThree";
        grid-template-columns: 1fr;
        grid-template-rows: 380px 220px 220px;


        max-width: 1440px;
        margin: 0px auto;
    }
    @media only screen and (min-width: 769px) {
        #hero_component {
            grid-template-areas: "imageOne imageTwo"
                                 "imageOne imageThree";
            grid-template-columns: minmax(100px, 945px) minmax(100px, 495px);
            grid-template-rows: 290px 290px;
        }
    }
    #hc_image_one {
        grid-area: imageOne;
        overflow: hidden;

        background: var(--hero-layer-one) no-repeat center center/cover, var(--this-hero-image-one) no-repeat center center/cover;
    }
    #hc_image_two {
        grid-area: imageTwo;
        overflow: hidden;

        background: var(--hero-layer-two) no-repeat center center/cover, var(--this-hero-image-two) no-repeat center center/cover;
    }
    #hc_image_three {
        grid-area: imageThree;
        overflow: hidden;

        background: var(--hero-layer-three) no-repeat center center/cover, var(--this-hero-image-three) no-repeat center center/cover;
    }
    #hero_component .hc_text {
        padding: 10%;
        text-align: center;

        font-weight: bold;
        font-size: calc(calc(var(--hero-main-text-size) - 4) * 1px);
        color: var(--text-color-light);
    }
    @media only screen and (min-width: 769px) {
        #hero_component .hc_text {
            padding: 20%;
            font-size: calc(var(--hero-main-text-size) * 1px);
        }
    }
    #hero_component .hc_text .hc_subtext {
        font-weight: normal;
        text-align: center;
        font-size: calc(var(--hero-sub-text-size) * 1px);
        color: var(--text-color-light);
        margin-bottom: 30px;
    }
    #hero_component .hc_text button {
        background-color: var(--bg-color-light);
        padding: 15px 35px;
        color: var(--input-text-color);
        font-size: calc(var(--hero-button-text-size) * 1px);
        border: 0px;
        border-radius: calc(var(--default-border-radius) * 1px);
    }
    #hero_component .hc_text button:hover { cursor: pointer; }
</style>
<div id="hero_component_wrapper">
    <div id="hero_component">
        <div id="hc_image_one">
            <div class="hc_text">
                <div><slot name="text-one">TEXT ONE</slot></div>
                <p class="hc_subtext"><slot name="subtext-one">SUBTEXT ONE</slot></p>
                <button><slot name="text-cta">Call-to-action</slot></button>
            </div>
        </div>
        <div id="hc_image_two">
            <div class="hc_text"><slot name="text-two">TEXT TWO</slot></div>
        </div>
        <div id="hc_image_three">
            <div class="hc_text"><slot name="text-three">TEXT THREE</slot></div>
        </div>
    </div>
</div>
`;

        var myself = this;
        this.shadow.querySelector('button').addEventListener('click', function (e) {
            var customEvent = new CustomEvent('cta-click', {bubbles: true, composed: true, detail: { evt: e }});
            myself.dispatchEvent(customEvent);
        });
    }

    static get observedAttributes() {
        return ["image-one", "image-two", "image-three"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue === newValue) {
            return;
        }

        if (name === "image-one" || name === "image-two" || name === "image-three") {
            this.render();
        }
    }
}
customElements.define('hero-component', HeroComponent);
