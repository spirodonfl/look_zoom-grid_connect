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
a {
    text-decoration: none;
    color: var(--text-color-dark);
}
#header_component {
    padding: 20px 10px;
    display: grid;
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

#hc_menu_button button {
    background-color: var(--secondary-bg-color);
    padding: 7px 16px;
    border: 1px solid var(--input-border-color);
    border-radius: calc(var(--default-border-radius) * 1px);
    vertical-align: middle;
    color: var(--text-color-light);
    width: 75px;
    font-size: 14px;
    font-weight: bold;
}
#hc_menu_button button:hover { cursor: pointer; }

#hc_logo { grid-area: logo; }
#hc_menu_button { grid-area: menuButton; }
#hc_my_account { grid-area: myAccount; }
#hc_input { grid-area: searchInput; }
#hc_cart { grid-area: cart; }
#hc_cart_small { grid-area: smallCart; }
#hc_menu_button, #hc_cart_small { display: none; }
#header_component {
    grid-template-areas: "logo searchInput myAccount cart";
    grid-template-columns: 300px 1fr 200px 200px;
    grid-template-rows: 1fr;
}
@media screen and (max-width: 1024px) {
    #header_component {
        grid-template-areas: "menuButton logo smallCart" "searchInput searchInput searchInput";
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
    }
    #hc_menu_button, #hc_cart_small { display: block; }
    #hc_cart, #hc_my_account { display: none; }
}
</style>
<div id="header_component">
    <div id="hc_menu_button">
        <button>Menu</button>
    </div>
    <div id="hc_logo">
        <img src="images/grid-connect-logo-full.png" width="100%" />
    </div>
    <div id="hc_input">
        <input type="text" placeholder="What are you looking for?" /> <img src="images/search-icon.png" />
    </div>
    <div id="hc_my_account">
        <a href="#"><strong>My Account</strong> <img src="images/user-circle-1.png" style="vertical-align: middle;" /></a>
    </div>
    <div id="hc_cart_small">
        <a href="#"><img src="images/shopping-cart-1.png" />
        ${(this.totalCartItems > 0) ? '<div id="cart_circle"></div>' : ''}</a>
    </div>
    <div id="hc_cart">
        <a href="#"><strong>Cart |</strong> ${this.totalCartItems} ${totalCartItemsText}<img src="images/shopping-cart-1.png" />
        ${(this.totalCartItems > 0) ? '<div id="cart_circle"></div>' : ''}</a>
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
