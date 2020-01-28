import { Controller } from "stimulus";
let domParser = new DOMParser();

export default class extends Controller {

  static get targets() {
    return ["slideList", "slideOption"]
  }

  pickSlide(event) {
    console.log("In pick slide");
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
    let previousTemplate = this.slideOptionTargets[current.index - 1].value;
    fetch(previousTemplate)
      .then(response => response.text())
      .then(html => this.swapContent(html, previousTemplate));
  }

  next() {
    let current = this.getCurrentSlide();
    if(current.index === this.slideOptionTargets.length -1) {
      console.log("You're already at the end.");
      return;
    }
    let nextTemplate = this.slideOptionTargets[current.index + 1].value;
    fetch(nextTemplate)
      .then(response => response.text())
      .then(html => this.swapContent(html, nextTemplate))
  }
};