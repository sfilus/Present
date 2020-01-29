import { Controller } from "stimulus";
let domParser = new DOMParser();

export default class extends Controller {

  static get targets() {
    return ["slideList", "slideOption", "backButton", "nextButton"]
  }

  pickSlide(event) {
    let index = this.getSlideIndex(event.target.value);
    this.updateButtonStatus(index);
    
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

  getSlideIndex(templateName) {
    for(let i = 0; i < this.slideOptionTargets.length; i++) {
      if(this.slideOptionTargets[i].value === templateName) {
        return i;
      }
    }
    console.log("Error happened: couldn't find template name: ", templateName);
    return -1;
  }

  updateButtonStatus(nextPageIndex) {
    let slideListLength = this.slideOptionTargets.length;
    if(nextPageIndex === 0) {
      this.backButtonTarget.disabled = true;
    } else {
      this.backButtonTarget.disabled = false;
    }

    if(nextPageIndex >= (slideListLength - 1)) {
      this.nextButtonTarget.disabled = true;
    } else {
      this.nextButtonTarget.disabled = false;
    }
  }

  back() {
    let current = this.getCurrentSlide();
    let previous = this.slideOptionTargets[current.index - 1];
    current.slideOption.selected = false;
    previous.selected = true;

    this.updateButtonStatus(current.index - 1);

    fetch(previous.value)
      .then(response => response.text())
      .then(html => this.swapContent(html, previous.value));
  }

  next() {
    let current = this.getCurrentSlide();
    let next = this.slideOptionTargets[current.index + 1];
    current.slideOption.selected = false;
    next.selected = true;

    this.updateButtonStatus(current.index + 1);

    fetch(next.value)
      .then(response => response.text())
      .then(html => this.swapContent(html, next.value))
  }
};