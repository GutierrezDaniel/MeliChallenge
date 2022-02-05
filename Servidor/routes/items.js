const express = require("express");
const route = express.Router();

const { isQueryValid, isPathIdValid } = require("../middlewares/items");

const { searchQueryItems, searchByIDItem } = require("../controllers/getItemsData");

route.get("/:id", isPathIdValid, searchByIDItem);
route.get("/", isQueryValid, searchQueryItems);

module.exports = route;
