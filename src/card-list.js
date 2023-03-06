import { LitElement, html, css } from 'lit';

import "@lrnwebcomponents/meme-maker/meme-maker.js";
import "undergraduate-card/src/undergraduate-card.js";
import "borzoi-card/src/borzoi-card.js";


class CardList extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    :host {
      min-height: 100vh;
      display: inline-block;
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
      <undergraduate-card name="Check Details" opened=true><slot>
        <ul><li>This is a dot</li>
        </ul></slot>
      </undergraduate-card>
      <undergraduate-card name="Check Details Again" opened=true>
      <div>Bryce Loves Captain Planet</div>
      </undergraduate-card>
      <undergraduate-card name="BTO PRO" imageLink= "https://avatars1.githubusercontent.com/u/329735?s=460&u=6648669ddd6d1c983e33bb659b9879a26d37f8ed&v=4">
      </undergraduate-card>


      <borzoi-card
      title = "Borzoi";
      image =
        "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=%5B700%2C759%5D&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F08%2F05%2Fborzoi-is-big-tiktok-535986771-2000.jpg";>
        <slot>
        <ul class="summary">
        <li>They have long noses</li>
        <li>They look like horses</li>
        <li>They can see the future</li>
        </ul>
      </slot>
      </borzoi-card>

      <borzoi-card
      title = "Labrador";
      image =
        "https://thelabradorfamily.com/wp-content/uploads/2022/03/Chocolate-Labrador-1.jpg";>

        <slot>
        <ul class="summary">
        <li>They like steak</li>
        <li>They are awesome</li>
        <li>They can read minds</li>
        </ul>
      </slot>
      </borzoi-card>

      <borzoi-card
      title = "Pug";
      image =
        "https://upload.wikimedia.org/wikipedia/commons/f/f0/Mops_oct09_cropped2.jpg";>
        <slot>
        <ul class="summary">
        <li>They are gross</li>
        <li>They live a painful life</li>
        <li>They eat souls</li>
        </ul>
      </slot>
      </borzoi-card>

      <borzoi-card
      title = "Schnauzer";
      image =
        "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQI_mKweA9SAPMgq0zRBTNJN7atXi_ttj71YRlPYMDNTxdP_emLZsD3CXRJ1T2Y42HPcHKOLfM8zI3AuL8";>
        <slot>
        <ul class="summary">
        <li>They are small</li>
        <li>They don't shead</li>
        <li>They can fly</li>
        </ul>
      </slot>
      </borzoi-card>


      <borzoi-card
      title = "Pitbull";
      image =
        "https://www.pitbullinfo.org/uploads/7/8/9/7/7897520/pitbull-dog-1_3.jpg";>
        <slot>
        <ul class="summary">
        <li>They are powerful</li>
        <li>They work as gaurd dogs</li>
        <li>They like Mr. Worldwide</li>
        </ul>
      </slot>
      </borzoi-card>
    `;
  }
}

customElements.define('card-list', CardList);
