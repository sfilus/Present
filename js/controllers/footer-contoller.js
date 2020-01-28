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

  pickSlide(event) {
    console.log(event);
    console.log(event.target);
    fetch(event.target.value)
      .then(response => response.text())
      .then(html => this.swapContent(html, 0));
  }

  swapContent(html, templateName) {
    var currentContentElement = document.getElementById("content");
    var newContentElement = domParser.parseFromString(html, "text/html").getElementById("content");
    currentContentElement.innerHTML = newContentElement.innerHTML;
    window.history.pushState({content: newContentElement.innerHTML}, '', templateName);
  }

  back() {
    fetch(pages[0])
      .then(response => response.text())
      .then(html => this.swapContent(html, page[0]));
  }

  next() {
    fetch(pages[1])
      .then(response => response.text())
      .then(html => this.swapContent(html, pages[1]));
  }
};