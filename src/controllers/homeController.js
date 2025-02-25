import db from "../models/index";
import CRUDService from "../services/CRUDService";

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        console.log("--------------------");
        console.log(data);
        console.log("--------------------");

        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });

    } catch (e) {
        console.log(e);
    }
}

let getAboutUs = (req, res) => {
    return res.render('test/about.ejs');
}

let getCRUD = (req, res) => {
    return res.render('crud.ejs');
}

let displayCRUD = async (req, res) => {
    let data = await CRUDService.getAllUsers();

    console.log(data);

    return res.render('displayCRUD.ejs', {
        dataTable: data
    });
}

let postCRUD = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body);
    console.log(message);
    return res.send('post crush from server');
}

module.exports = {
    getHomePage: getHomePage,
    getAboutUs: getAboutUs,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayCRUD: displayCRUD

}