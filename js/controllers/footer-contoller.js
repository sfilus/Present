import { Controller } from "stimulus";

export default class extends Controller {
  connect() {
    console.log("Hello, Stimulus", this.element);
  };
  next() {
    console.log("no soup for you!");
  }
};