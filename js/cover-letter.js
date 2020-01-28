import { Application } from "stimulus";
import FooterController from "./controllers/footer-contoller";
import HistoryController from "./controllers/history-controller";

const application = Application.start();

addEventListener("DOMContentLoaded", () => {
  application.register("footer", FooterController);
  application.register("history", HistoryController);
});