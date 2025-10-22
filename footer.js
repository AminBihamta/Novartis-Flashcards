class SiteFooter extends HTMLElement {
  static get observedAttributes() {
    return ["next-text", "next-href", "title-text"];
  }

  connectedCallback() {
    this.render();
  }
  attributeChangedCallback() {
    this.render();
  }

  render() {
    const nextText = this.getAttribute("next-text") || "Next";
    const nextHref = this.getAttribute("next-href") || "#";
    const titleText =
      this.getAttribute("title-text") || "Alternative Funding Flashcards";

    this.innerHTML = `
      <footer
        style="padding: 2vw; border-top: 1px solid #002068; gap: 1vw; z-index: 100; !important"
        class="w-full text-center flex flex-row justify-evenly items-center"
      >
        <p
          class="m-0 p-0"
          style="font-size: 1.1vw; color: #002068; font-weight: 300; width: 15.8vw; flex-shrink: 0;"
        >
          ${titleText}
        </p>
        <svg width="1" height="42" viewBox="0 0 1 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0.5" y1="0" x2="0.500002" y2="42" stroke="#002068" />
        </svg>
        <p class="text-left" style="color: #002068; font-size: 0.7vw; max-width: 46vw">
          <b>Legal Disclaimer:</b> This document is provided for your guidance
          reflecting our experiences in multiple jurisdictions. Please engage your
          country legal team as early as possible in the planning stage to ensure
          the models discussed are legally allowed and feasible in your country.
        </p>
      <a class="home-button" href="Click To Start.html">
        <svg
          width="53"
          height="53"
          viewBox="0 0 53 53"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="52"
            height="52"
            rx="26"
            stroke="#002068"
          />
          <path
            d="M16.6667 37.9904H22.82V28.1837H30.5133V37.9904H36.6667V22.9904L26.6667 15.4271L16.6667 22.9904V37.9904ZM15 39.6571V22.1571L26.6667 13.3438L38.3333 22.1571V39.6571H28.8467V29.8504H24.4867V39.6571H15Z"
            fill="#002068"
          />
        </svg>
      </a>

        <button type="button" onclick="history.back()" aria-label="Go back" class="flex" style="gap: 0.5vw">
          <svg width="1.7vw" height="1.7vw" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.7127 9L10 13.7174L14.7143 18.4317" stroke="#002068" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M17.8571 23.1463H25.7143C28.8571 23.1463 30.4286 21.5749 30.4286 18.4321C30.4286 13.7178 28.8571 13.7178 25.7143 13.7178H10" stroke="#002068" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <span style="font-size: 1.1vw; text-decoration: underline; color: #002068">Back</span>
        </button>

        <a class="rounded-full flex items-center next-page-button" href="${nextHref}">
          ${nextText}
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 7.5L12.5 11L9 14.5" stroke="#002068" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11ZM1.496 11C1.496 16.2489 5.75109 20.504 11 20.504C16.2489 20.504 20.504 16.2489 20.504 11C20.504 5.75109 16.2489 1.496 11 1.496C5.75109 1.496 1.496 5.75109 1.496 11Z" fill="#002068" />
          </svg>
        </a>
      </footer>
    `;
  }
}

customElements.define("site-footer", SiteFooter);
