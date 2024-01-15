import { LitElement, html, css } from 'lit'

export class CardComponent extends LitElement {
    
    constructor(){
        super()
    }

    static styles = css`
        .card-component__continer {
            padding: var(--card-component-padding, 1rem)
            border-radius: var(--card-component-border-radius, 0.5rem)
            background-color: var(--card-component-color)
            height: vr(--card-component-height, 27rem)
        }
    `
    render() {
        return html`
            <div class="card-component__container>
                <slot></slot>
            </div>
        `
    }

}

window.customElements.define('card-component', CardComponent)

