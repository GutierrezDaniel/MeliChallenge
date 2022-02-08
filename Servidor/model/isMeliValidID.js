
const isValidID = (id) => {
    const startsWithML = id.startsWith("ML");    
    const isNumber = !isNaN(id.substr(3));        
    if(startsWithML && isNumber) return true;
    return false;
};

module.exports = {
    isValidID
};