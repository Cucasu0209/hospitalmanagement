

let getHomePage = (req, res) => {
    return res.render('homepage.ejs');
}

let getAboutUs = (req, res) => {
    return res.render('test/about.ejs');
}

module.exports = {
    getHomePage: getHomePage,
    getAboutUs: getAboutUs
}