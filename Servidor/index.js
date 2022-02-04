const express = require("express");
const app = express();
const cors = require('cors');

const itemsRoute = require("./routes/items");

const PORT = process.env.PORT || 3001;


app.use(cors({ origin: "*" }));
app.use("/api/items", itemsRoute);



app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});