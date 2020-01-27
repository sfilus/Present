import { Controller } from "stimulus";

let pages = [
  'index.html',
  '2-why-i-want-to-work-at-basecamp.html'
];

let domParser = new DOMParser();

export default class extends Controller {

  // static get targets() {
  //   return ["contentBody"]
  // }

  swapContent(html, pageIndex) {
    var currentContentElement = document.getElementById("content");
    var newContentElement = domParser.parseFromString(html, "text/html").getElementById("content");
    currentContentElement.innerHTML = newContentElement.innerHTML;
    window.history.pushState({content: newContentElement.innerHTML}, '', pages[pageIndex]);
  }

  back() {
    fetch(pages[0])
      .then(response => response.text())
      .then(html => this.swapContent(html, 0));
  }

  next() {
    fetch(pages[1])
      .then(response => response.text())
      .then(html => this.swapContent(html, 1));
  }
};