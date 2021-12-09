class HeaderMenuComponent extends HTMLElement {
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
ul {
    list-style-type: none;
    margin: 0px;
    padding: 0px;
}
ul li {
    display: inline-block;
    margin-right: 20px;
}
button {
    background-color: var(--button-bg-color);
    border: 0px;
    border-radius: calc(var(--default-border-radius) * 1px);
    color: var(--text-color-light);
    padding: 10px 15px;
    font-size: calc(var(--header-menu-request-button-text-size) * 1px);
    font-weight: bold;
}
#menu_component {
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
}
#menu_component #mc_right {
    text-align: right;
}
</style>
<div id="menu_component">
    <div id="mc_left">
        <ul>
            <li>Products <img src="images/menu-arrow-down.png" style="vertical-align: middle;" /></li>
            <li>Protocols</li>
            <li>Services</li>
            <li>Manufacturers <img src="images/menu-arrow-down.png" style="vertical-align: middle;" /></li>
        </ul>
    </div>
    <div id="mc_right">
        <ul>
            <li>About us</li>
            <li>Contact</li>
            <li><button id="mcr_request_a_quote">Request a quote</button></li>
        </ul>
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
customElements.define('header-menu-component', HeaderMenuComponent);
