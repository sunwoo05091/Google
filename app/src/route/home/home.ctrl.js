const getURL = require("/Google/app/src/public/views/js/getURL");
const url = require('url');

const view = {
    home : (req, res) =>{
        res.render("./home/login");
    },

    oauth2callbac : (req, res) =>{
       
    },
    login : (req, res) =>{
        res.redirect(getURL.url);
        const {code} = url.parse(req.url);
        console.log(code);
    },
    schedule : (req, res) =>{
        res.render("./home/index");
    },
    insert : (req, res) =>{
        res.render("./home/insert");
    },
    delete : (req, res) =>{
        res.render("./home/delete");
    },
    update : (req, res) =>{
        res.render("./home/update");
    },
    popUp : (req, res) =>{
        res.render("./home/schedulePopup");
    }
}

module.exports = {
    view
}