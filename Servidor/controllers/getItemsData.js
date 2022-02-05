const axios = require("axios").default;

const urlsBackend = require("../config/urls_backendMeli");
const { expectedQueryResponse,  expectedPathIdResponse} = require("../model/reqFormater");

const handleRequest = async (url, res) => {
  const responce = await axios.get(url).catch((error) => {
    if (error.response)
      return res.status(500).send({error:"the query was not successful"});
    if (error.request)
      return res
        .status(500)
        .send({error:"the request was made but no response was received"});
  });
  return await responce;
};

const searchQueryItems = (req, res) => {
  handleRequest(urlsBackend.URL_Query + req.query.q, res).then((items) => {
    const formatedReq = expectedQueryResponse(items);
    res.status(200).json(formatedReq);
  });
};

const searchByIDItem = (req, res) => {
  axios
    .all([
      axios.get(urlsBackend.URL_ItemById + req.params.id),
      axios.get(urlsBackend.URL_ItemById + req.params.id + "/description"),
    ])
    .then(
      axios.spread(({ data: item }, { data: description }) => {
        const formatedReq = expectedPathIdResponse(item, description);
        res.status(200).json(formatedReq);
      })
    )
    .catch((error) => {
      if (error.response)
        return res.status(500).send({error:"the query was not successful"});
      if (error.request)
        return res
          .status(500)
          .send({error:"the request was made but no response was received"});
    });
};

module.exports = {
  searchQueryItems,
  searchByIDItem,
};
