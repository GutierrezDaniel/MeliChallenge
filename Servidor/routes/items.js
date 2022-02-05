const express = require("express");
const server = express();
const route = express.Router();



const { isQueryValid, isPathIdValid } = require("../middlewares/items");
const { searchQueryItems, searchByIDItem } = require("../controllers/getItemsData");


route.get("/:id", isPathIdValid, searchByIDItem);
route.get("/", isQueryValid, searchQueryItems);
server.use("/api/items", route);

module.exports = server;
