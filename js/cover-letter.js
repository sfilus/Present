import Turbolinks from 'turbolinks';
import { Application } from "stimulus";
import { definitionsFromContext } from "stimulus/webpack-helpers";

Turbolinks.start();

import FooterController from "./controllers/footer-contoller";

const application = Application.start();
//const context = require.context("./controllers", true, /\.js$/);
//application.load(definitionsFromContext(context));
application.register("footer", FooterController);
