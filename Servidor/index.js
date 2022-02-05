const express = require("express");
const app = express();
const cors = require('cors');
const PORT = require("./config/portConfig");

const itemsRoute = require("./routes/items");



app.use(cors({ origin: "*" }));
app.use("/api/items", itemsRoute);



app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});