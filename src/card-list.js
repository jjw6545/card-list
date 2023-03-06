import { LitElement, html, css } from 'lit';

import "@lrnwebcomponents/meme-maker/meme-maker.js";
import "undergraduate-card/src/undergraduate-card.js";

class CardList extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    :host {
      min-height: 100vh;
      display: inline-flex;
      flex-direction: row;
      align-items: top;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--card-list-background-color);
    }

    main {
      flex-grow: 1;
    }

    .logo {
      margin-top: 36px;
      animation: app-logo-spin infinite 20s linear;
    }

    @keyframes app-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }

    .app-footer a {
      margin-left: 5px;
    }
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
      <undergraduate-card>
      </undergraduate-card>
      <undergraduate-card name="HI">
      </undergraduate-card>
      <undergraduate-card name="Check Details"><slot>
        <ul><li>This is a dot</li>
        </ul></slot>
      </undergraduate-card>
      <undergraduate-card name="Check Details Again">
      <div>Bryce Loves Captain Planet</div>
      </undergraduate-card>
      <undergraduate-card name="BTO PRO" imageLink= "https://avatars1.githubusercontent.com/u/329735?s=460&u=6648669ddd6d1c983e33bb659b9879a26d37f8ed&v=4">
      </undergraduate-card>
    `;
  }
}

customElements.define('card-list', CardList);