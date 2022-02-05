const server = require("./routes/items");
const cors = require('cors');

const PORT = process.env.PORT || 3001;

server.use(cors());

server.listen(PORT, () => {
  if(process.env.NODE_ENV !== 'production') console.log(`Server listening on ${PORT}`);
});
