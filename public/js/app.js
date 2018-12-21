import { NvApp } from "./nv-app.js"

import routes from "./routes/routes";
import controllers from "./controllers/handle-classes";


document.addEventListener("DOMContentLoaded", function () {
    let app = new NvApp();

    app.register('routes', routes).register('controllers', controllers).ini();
});

