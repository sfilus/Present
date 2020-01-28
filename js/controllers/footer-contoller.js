import { Controller } from "stimulus";
let domParser = new DOMParser();

export default class extends Controller {

  static get targets() {
    return ["slideList", "slideOption"]
  }

  pickSlide(event) {
    fetch(event.target.value)
      .then(response => response.text())
      .then(html => this.swapContent(html, event.target.value));
  }

  swapContent(html, templateName) {
    var currentContentElement = document.getElementById("content");
    var newContentElement = domParser.parseFromString(html, "text/html").getElementById("content");
    currentContentElement.innerHTML = newContentElement.innerHTML;
    window.history.pushState({content: newContentElement.innerHTML}, '', templateName);
  }

  getCurrentSlide() {
    for(let i = 0; i < this.slideOptionTargets.length; i++) {
      if(this.slideOptionTargets[i].selected) {
        return {
          slideOption: this.slideOptionTargets[i],
          index: i
        };
      }
    }
  }

  back() {
    let current = this.getCurrentSlide();
    if(current.index === 0) {
      console.log("You're already at the first page.");
      return;
    }

    let previous = this.slideOptionTargets[current.index - 1];
    current.selected = false;
    previous.selected = true;
    fetch(previous.value)
      .then(response => response.text())
      .then(html => this.swapContent(html, previous.value));
  }

  next() {
    let current = this.getCurrentSlide();
    if(current.index === this.slideOptionTargets.length -1) {
      console.log("You're already at the end.");
      return;
    }

    let next= this.slideOptionTargets[current.index + 1];
    current.selected = false;
    next.selected = true;

    fetch(next.value)
      .then(response => response.text())
      .then(html => this.swapContent(html, next.value))
  }
};