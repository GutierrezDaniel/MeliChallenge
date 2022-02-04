const express = require("express");
const route = express.Router();

const {
    isQueryValid,
    isPathIdValid
} = require("../middlewares/items");

const {
    searchQueryItems
} = require("../controllers/getItemsData");


route.get("/:id", isPathIdValid, (req, res) => (res.status(200).send("path valida")));
route.get("/", isQueryValid, searchQueryItems, (req, res,next, data) => {
    console.log({req,next,data});
    res.status(200).send("query valida")
});

module.exports = route;