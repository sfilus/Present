import { Controller } from "stimulus";

export default class extends Controller {

  static get targets() {
    return ["contentBody", "slideOption", "slideList"];
  }

  backState(event) {
    console.log("options", this.slideOptionTargets);
    console.log("select", this.slideListTarget);
    this.contentBodyTarget.outerHTML = event.state.content;
  }

};