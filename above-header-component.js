class AboveHeaderComponent extends HTMLElement {
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
#above_header_component {
    background-color: var(--bg-color-dark);
    color: var(--text-color-light);
    padding: 12px;
}
#ahc_telephone {
    position: absolute;
    left: 10;
}
#ahc_telephone img {
    vertical-align: middle;
    margin-right: 8px;
}
#ahc_text {
    text-align: center;
    width: 100%;
    font-size: calc(var(--above-header-text-size) * 1px);
}
#ahc_text .secondary_text_color {
    color: var(--secondary-text-color);
}
</style>
<div id="above_header_component">
    <div id="ahc_telephone"><img src="images/telephone-icon.png" /> (630) 245-1445</div>
    <div id="ahc_text"><span class="secondary_text_color">Free shipping*</span> on orders over $75</div>
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
customElements.define('above-header-component', AboveHeaderComponent);
