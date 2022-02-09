const express = require("express");
const server = express();
const cors = require('cors');
const route = express.Router();



const { isQueryValid, isPathIdValid } = require("../middlewares/items");
const { searchQueryItems, searchByIDItem } = require("../controllers/getItemsData");

server.use(cors());
route.get("/:id", isPathIdValid, searchByIDItem);
route.get("/", isQueryValid, searchQueryItems);
server.use("/api/items", route);

module.exports = server;
