import { Application } from "stimulus";
import FooterController from "./controllers/footer-contoller";
import ContentController from "./controllers/content-controller";

const application = Application.start();

addEventListener("DOMContentLoaded", () => {
  application.register("footer", FooterController);
  application.register("content", ContentController);
});