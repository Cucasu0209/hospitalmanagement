import express from "express";
import homeController from "../controllers/homeController";
let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/aboutus', homeController.getAboutUs);

    router.get('/trungdeptrai', (req, res) => {
        return res.send("Hello World trung deptrai");
    })

    return app.use("/", router);
}

module.exports = initWebRoutes;