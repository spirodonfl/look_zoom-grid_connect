class NoticeComponent extends HTMLElement {
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
#notice_component {
    background-color: var(--bg-color-light);
    padding: 7px;
}
#nc_text {
    text-align: center;
    width: 100%;
}
#nc_close {
    position: absolute;
    right: 10;
    margin-top: -20px;
}
#nc_close:hover {
    cursor: pointer;
}
</style>
<div id="notice_component">
    <div id="nc_text"><slot name="text">SAMPLE</slot></div>
    <div id="nc_close">X</div>
</div>
`;

        var myself = this;
        this.shadow.querySelector('#nc_close').addEventListener('click', function (e) {
            var customEvent = new CustomEvent('close-clicked', {bubbles: true, composed: true, detail: { evt: e }});
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
customElements.define('notice-component', NoticeComponent);
