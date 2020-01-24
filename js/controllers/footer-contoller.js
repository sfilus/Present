import { Controller } from "stimulus";
let pages = [
  'index.html',
  '2-why-i-want-to-work-at-basecamp.html'
];

export default class extends Controller {

  back() {
    fetch(pages[0])
      .then(response => response.text())
      .then(html => this.element.innerHTML = html);
      //todo: update browser history.
      //todo: leave the footer permananet?
  }

  next() {
    fetch(pages[1])
      .then(response => response.text())
      .then(html => this.element.innerHTML = html);
  }
};