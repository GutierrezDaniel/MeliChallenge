
const { isValidID } = require('../model/isMeliValidID');

const isQueryValid = (req, res, next) => {
    const { query } = req;
    if (query.hasOwnProperty('q')) return next();
    return res.status(400).send({error:"query not supported"});
};

const isPathIdValid = (req, res, next) => {
    const { id } = req.params;    
    if (isValidID(id)) return next();
    return res.status(400).send({error: "this id is not valid"});
};

module.exports = {
    isQueryValid,
    isPathIdValid
};