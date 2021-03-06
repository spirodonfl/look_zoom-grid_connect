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
a {
    text-decoration: none;
    color: var(--text-color-dark);
}
a:hover { cursor: pointer; }
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
button:hover { cursor: pointer; }
#menu_component {
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
}
#menu_component #mc_right {
    text-align: right;
}

#menu_component {
    --xs-display: var(--media-xs) none;
    --sm-display: var(--media-sm) none;
    --md-display: var(--media-md) grid;
    --lg-display: var(--media-lg) grid;
    display: var(--xs-display, var(--sm-display, var(--md-display, var(--lg-display))));
}
#mobile_menu_component {
    --xs-display: var(--media-xs) block;
    --sm-display: var(--media-sm) block;
    --md-display: var(--media-md) none;
    --lg-display: var(--media-lg) none;
    display: var(--xs-display, var(--sm-display, var(--md-display, var(--lg-display))));
}

#mobile_menu_component {
    padding: 20px;
    overflow-x: auto;
    white-space: nowrap;
}
</style>
<div id="menu_component">
    <div id="mc_left">
        <ul>
            <li><a href="#">Products <img src="images/menu-arrow-down.png" style="vertical-align: middle;" /></a></li>
            <li><a href="#">Protocols</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Manufacturers <img src="images/menu-arrow-down.png" style="vertical-align: middle;" /></a></li>
        </ul>
    </div>
    <div id="mc_right">
        <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact</a></li>
            <li><button id="mcr_request_a_quote">Request a quote</button></li>
        </ul>
    </div>
</div>
<div id="mobile_menu_component">
    <ul>
        <li><button id="mcr_request_a_quote">Request a quote</button></li>
        <li><a href="#">Products</li>
        <li><a href="#">Protocols</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Manufacturers</a></li>
        <li><a href="#">About us</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</div>
`;

        var myself = this;
        this.shadow.querySelector('#mcr_request_a_quote').addEventListener('click', function (e) {
            var customEvent = new CustomEvent('request-a-quote-clicked', {bubbles: true, composed: true, detail: { evt: e }});
            myself.dispatchEvent(customEvent);
        });
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
