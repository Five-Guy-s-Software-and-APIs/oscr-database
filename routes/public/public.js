const express = require("express");
const path = require("path");
let router = express.Router();


router.get("/searchbar", (req, res) => {
    res.status(200).sendFile(path.resolve('public/searchbar.html'));
});

router.get("/js/index", (req, res) => {
    res.status(200).sendFile(path.resolve('public/js/index.js'))
});

router.get("/mystyles", (req, res) => {
    res.sendFile(path.resolve('public/mystyles.css'));
});
  

module.exports = router;