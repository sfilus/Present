import { Controller } from "stimulus";
let pages = [
  'index.html',
  '2-why-i-want-to-work-at-basecamp.html'
];

export default class extends Controller {

  // connect() {
  //   console.log("Hello, Stimulus", this.element);
  // };

  back() {
    Turbolinks.visit(pages[0]);
  }

  next() {
    Turbolinks.visit(pages[1]);
  }
};