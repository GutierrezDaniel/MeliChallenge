const express = require("express");
const route = express.Router();

const {
    isQueryValid,
    isPathIdValid
} = require("../middlewares/items");


route.get("/items/:id", isPathIdValid, (req, res) => (res.status(200).send("path valida")));
route.get("/items", isQueryValid, (req, res) => (res.status(200).send("query valida")));

module.exports = route;