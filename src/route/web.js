import express from "express";
import homeController from "../controllers/homeController";
let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/aboutus', homeController.getAboutUs);
    router.get('/crud', homeController.getCRUD);
    router.get('/get-crud', homeController.displayCRUD);
    router.post('/post-crud', homeController.postCRUD);

    return app.use("/", router);
}

module.exports = initWebRoutes;