import { Controller } from "stimulus";

export default class extends Controller {

  static get targets() {
    return ["contentBody", "slideOption", "slideList", "nextButton", "backButton"];
  }

  backState(event) {
    this.contentBodyTarget.outerHTML = event.state.content;
    this.setSlideOption(event.state.template);
  }

  setSlideOption(templateName) {
    for(let i = 0; i < this.slideOptionTargets.length; i++) {
      let element = this.slideOptionTargets[i];
      if(element.value === templateName) {
        element.selected = true;
        this.updateButtonStatus(i);
      } else {
        element.selected = false;
      }
    }
  }

  //todo: probably should refactor this into a single controller so I can share this function.
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

}