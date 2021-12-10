class HeaderComponent extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'closed' });

        this.totalCartItems = 0;
    }

    connectedCallback() {
        this.render();
    }

    render() {
        var totalCartItemsText = 'item';
        if (this.totalCartItems === 0 || this.totalCartItems >= 2) {
            totalCartItemsText = 'items';
        }
        this.shadow.innerHTML = `
<style type="text/css">
#header_component {
    padding: 20px 10px;
    display: grid;
    grid-template-columns: 300px 1fr 200px 200px;
    grid-template-rows: 1fr;
}
#header_component #hc_logo {
    text-align: center;
}
#header_component #hc_logo img {
    max-width: 240px;
}
#header_component #hc_input {
    padding-left: 10px;
    padding-right: 10px;
    display: grid;
    grid-template-columns: minmax(100px, 570px) 52px;
    grid-template-rows: 1fr;
    justify-content: center;
}
#header_component #hc_input input {
    width: 100%;
    padding: 8px 16px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-top-left-radius: calc(var(--default-border-radius) * 1px);
    border-bottom-left-radius: calc(var(--default-border-radius) * 1px);
    border: 1px solid var(--input-border-color);
}
#header_component #hc_input img {
    background-color: var(--secondary-bg-color);
    padding: 11px 16px;
    border-top-right-radius: calc(var(--default-border-radius) * 1px);
    border-bottom-right-radius: calc(var(--default-border-radius) * 1px);
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    border: 1px solid var(--input-border-color);
    vertical-align: middle;
}
#header_component #hc_cart img { vertical-align: middle; }
#header_component #hc_cart #cart_circle {
    position: absolute;
    width: 12px;
    height: 12px;
    background-color: green;
    border-radius: 100%;
    margin-top: -28px;
    margin-left: 112px;
}
</style>
<div id="header_component">
    <div id="hc_logo">
        <img src="images/grid-connect-logo-full.png" width="100%" />
    </div>
    <div id="hc_input">
        <input type="text" placeholder="What are you looking for?" /> <img src="images/search-icon.png" />
    </div>
    <div id="hc_my_account">
        My Account <img src="images/user-circle-1.png" style="vertical-align: middle;" />
    </div>
    <div id="hc_cart">
        Cart | ${this.totalCartItems} ${totalCartItemsText}<img src="images/shopping-cart-1.png" />
        ${(this.totalCartItems > 0) ? '<div id="cart_circle"></div>' : ''}
    </div>
</div>
`;
    }

    static get observedAttributes() {
        return ["total-cart-items"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue === newValue) {
            return;
        }

        if (name === "total-cart-items") {
            this.totalCartItems = newValue;
            this.render();
        }
    }
}
customElements.define('header-component', HeaderComponent);
