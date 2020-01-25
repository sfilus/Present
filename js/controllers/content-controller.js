import { Controller } from "stimulus";

export default class extends Controller {

  static get targets() {
    return ["contentBody"]
  }

  backState(event) {
    this.contentBodyTarget.outerHTML = event.state.content;
  }

};