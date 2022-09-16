const express = require("express");
const router = express.Router();

const crtl = require('./home.ctrl');

router.get("/", crtl.view.login);
router.get("/schedule", crtl.view.schedule);
router.get("/schedulePopup", crtl.view.popUp);
router.get("/insert", crtl.view.insert);
router.get("/delete", crtl.view.delete);
router.get("/update", crtl.view.update); 

module.exports = router;