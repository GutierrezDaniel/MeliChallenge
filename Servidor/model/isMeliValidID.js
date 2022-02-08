
const isValidID = (id) => {
    const startsWithML = id.startsWith("ML");    
    const isNumber = !isNaN(id.substr(3));  
    console.log('llega: ',id, "startsWithML:",startsWithML, "isNumber:",isNumber);  
    if(startsWithML && isNumber) return true;
    return false;
};

module.exports = {
    isValidID
};