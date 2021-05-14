const express = require("express");
const path = require("path");
let router = express.Router();

router.get("/logo", (req, res) => {
    res.status(200).sendFile(path.resolve('public/logo_2.png'));
});

router.get("/js/index", (req, res) => {
    res.status(200).sendFile(path.resolve('public/js/index.js'))
});

router.get("/mystyles", (req, res) => {
    res.sendFile(path.resolve('public/mystyles.css'));
});

router.get("/header", (req,res) => {
    res.sendFile(path.resolve('public/header.css'));
})
  

module.exports = router;