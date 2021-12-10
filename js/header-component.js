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
    align-items: center;
}
#header_component #hc_logo {
    text-align: center;
}
#header_component #hc_logo img {
    max-width: 240px;
}
#header_component #hc_input {
    display: grid;
    grid-template-columns: minmax(100px, 570px) 52px;
    grid-template-rows: 1fr;
    justify-content: center;

    --xs-padding-left: var(--media-xs) 0px;
    --sm-padding-left: var(--media-sm) 0px;
    --md-padding-left: var(--media-md) 10px;
    --lg-padding-left: var(--media-lg) 10px;
    padding-left: var(--xs-padding-left, var(--sm-padding-left, var(--md-padding-left, var(--lg-padding-left))));

    --xs-padding-right: var(--media-xs) 0px;
    --sm-padding-right: var(--media-sm) 0px;
    --md-padding-right: var(--media-md) 10px;
    --lg-padding-right: var(--media-lg) 10px;
    padding-right: var(--xs-padding-right, var(--sm-padding-right, var(--md-padding-right, var(--lg-padding-right))));

    --xs-padding-top: var(--media-xs) 20px;
    --sm-padding-top: var(--media-sm) 20px;
    --md-padding-top: var(--media-md) 0px;
    --lg-padding-top: var(--media-lg) 0px;
    padding-top: var(--xs-padding-top, var(--sm-padding-top, var(--md-padding-top, var(--lg-padding-top))));
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
#header_component #hc_cart #cart_circle, #header_component #hc_cart_small #cart_circle {
    position: absolute;
    width: 12px;
    height: 12px;
    background-color: green;
    border-radius: 100%;
    margin-top: -28px;
    margin-left: 22px;
}

#hc_cart_small {
    justify-self: right;
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

#header_component {
    --xs-grid-template-areas: var(--media-xs) "menuButton logo smallCart" "searchInput searchInput searchInput";
    --sm-grid-template-areas: var(--media-sm) "menuButton logo smallCart" "searchInput searchInput searchInput";
    --md-grid-template-areas: var(--media-md) "logo searchInput myAccount cart";
    --lg-grid-template-areas: var(--media-lg) "logo searchInput myAccount cart";
    grid-template-areas: var(--xs-grid-template-areas, var(--sm-grid-template-areas, var(--md-grid-template-areas, var(--lg-grid-template-areas))));

    --xs-grid-template-columns: var(--media-xs) 1fr 1fr 1fr;
    --sm-grid-template-columns: var(--media-sm) 1fr 1fr 1fr;
    --md-grid-template-columns: var(--media-md) 300px 1fr 200px 200px;
    --lg-grid-template-columns: var(--media-lg) 300px 1fr 200px 200px;
    grid-template-columns: var(--xs-grid-template-columns, var(--sm-grid-template-columns, var(--md-grid-template-columns, var(--lg-grid-template-columns))));

    --xs-grid-template-rows: var(--media-xs) 1fr;
    --sm-grid-template-rows: var(--media-sm) 1fr;
    --md-grid-template-rows: var(--media-md) 1fr 1fr;
    --lg-grid-template-rows: var(--media-lg) 1fr 1fr;
    grid-template-rows: var(--xs-grid-template-rows, var(--sm-grid-template-rows, var(--md-grid-template-rows, var(--lg-grid-template-rows))));
}

#hc_menu_button, #hc_cart_small {
    --xs-display: var(--media-xs) block;
    --sm-display: var(--media-sm) block;
    --md-display: var(--media-md) none;
    --lg-display: var(--media-lg) none;
    display: var(--xs-display, var(--sm-display, var(--md-display, var(--lg-display))));
}
#hc_cart, #hc_my_account {
    --xs-display: var(--media-xs) none;
    --sm-display: var(--media-sm) none;
    --md-display: var(--media-md) block;
    --lg-display: var(--media-lg) block;
    display: var(--xs-display, var(--sm-display, var(--md-display, var(--lg-display))));
    justify-self: center;
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
