import { Application } from "stimulus";
//import { definitionsFromContext } from "stimulus/webpack-helpers";

import FooterController from "./controllers/footer-contoller";
import ContentController from "./controllers/content-controller";

const application = Application.start();
//const context = require.context("./controllers", true, /\.js$/);
//application.load(definitionsFromContext(context));

addEventListener("DOMContentLoaded", () => {
  application.register("footer", FooterController);
  application.register("content", ContentController);
});