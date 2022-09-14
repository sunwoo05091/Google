const view = {
    home : (req, res) =>{
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