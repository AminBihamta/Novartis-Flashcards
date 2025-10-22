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
        style="padding: 3vw; border-top: 1px solid #002068; gap: 1vw; z-index: 100; !important"
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
            stroke="white"
          />
          <path
            d="M16.6667 37.9904H22.82V28.1837H30.5133V37.9904H36.6667V22.9904L26.6667 15.4271L16.6667 22.9904V37.9904ZM15 39.6571V22.1571L26.6667 13.3438L38.3333 22.1571V39.6571H28.8467V29.8504H24.4867V39.6571H15Z"
            fill="white"
          />
        </svg>
      </a>

        <button type="button" onclick="history.back()" aria-label="Go back" class="flex" style="gap: 0.5vw">
          

          <svg width="1.7vw" height="1.7vw" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.71271 1L1 5.71743L5.71429 10.4317" stroke="#F2F2F4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.85714 15.1454H16.7143C19.8571 15.1454 21.4286 13.5739 21.4286 10.4311C21.4286 5.7168 19.8571 5.7168 16.7143 5.7168H1" stroke="#F2F2F4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          <span style="font-size: 1.1vw; text-decoration: underline; color: #002068">Back</span>
        </button>

        <a class="rounded-full flex items-center next-page-button" href="${nextHref}">
          ${nextText}
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 7.5L13.5 11L10 14.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 21C16.523 21 21 16.523 21 11C21 5.477 16.523 1 11 1C5.477 1 1 5.477 1 11C1 16.523 5.477 21 11 21Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        </a>
      </footer>
    `;
  }
}

customElements.define("site-footer", SiteFooter);
