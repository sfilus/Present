import { Controller } from "stimulus";

export default class extends Controller {

  static get targets() {
    return ["contentBody", "slideOption", "slideList"];
  }

  backState(event) {
    this.contentBodyTarget.outerHTML = event.state.content;
    this.setSlideOption(event.state.template);
  }

  setSlideOption(templateName) {
    this.slideOptionTargets.forEach(element => {
      if(element.value === templateName) {
        element.selected = true;
        //this.updateButtonStatus(index);
        //would need to add back button and next button as targets on this controller.
      } else {
        element.selected = false;
      }
    });
  }

  //TODO: should probably refactor this into a single controller, so that this method is reusable.
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