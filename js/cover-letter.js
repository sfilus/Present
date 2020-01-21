import Turbolinks from 'turbolinks';
import { Application } from "stimulus";
import { definitionsFromContext } from "stimulus/webpack-helpers";

Turbolinks.start();

const application = Application.start();
const context = require.context("./controllers", true, /\.js$/);
application.load(definitionsFromContext(context));

//document.getElementById("right-arrow").onclick = function() {
//  Turbolinks.visit("/why-i-want-to-work-at-basecamp/slide1.html")
//};