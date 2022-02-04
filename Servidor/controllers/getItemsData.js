const axios = require("axios").default;

const urlsBackend = require("../model/urls_backendMeli");

const handleRequest = async (url, res) => {
  const responce = await axios.get(url)  
  .catch((error) => {
    if (error.response)
      return res.status(500).send("the query was not successful");
    if (error.request)
      return res
        .status(500)
        .send("the request was made but no response was received");
  });
  return await responce;
};

const searchQueryItems = (req, res) => {
    handleRequest(`${urlsBackend.URL_Query}?q=${req.query}`, res)  
    .then( items => res.status(200).send(items.data));
};

module.exports = {
  searchQueryItems,
};
