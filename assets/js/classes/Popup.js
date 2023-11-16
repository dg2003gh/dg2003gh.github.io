export default class Popup {
  constructor(title, content, milliseconds) {
    this.title = title;
    this.content = content;
    this.milliseconds = milliseconds;
  }

  buildPopup() {
    let Popup = `
        <article>
        <header><strong>${this.title}</strong></header>
        <div>
            ${this.content}
        </div>
        </article>

    `;
  }
}
