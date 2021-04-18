/**
 * Returns true if query parameters match any of the data parameters
 * 
 * @param {object} query from client
 * 
 * @param {object} data being compared
 * 
 * @returns {boolean} if query and data match
 */
 function matchByParameter(query, data) {
    let isInData = true;
    for(let parameter in data) {
      //If the parameter is empty, move on to the next parameter
      if(!query[parameter]) continue;
      
      if(Array.isArray(query[parameter])) {
        let arrMatch = false;
        for(let item of query[parameter]) {
          arrMatch = match(item, data[parameter]) || arrMatch;
        }
        isInData = arrMatch && isInData;
        continue
      }

      isInData = match(query[parameter], data[parameter]) && isInData;
    }
    return isInData;
  }

function match(query, data) {
    //If the parameter is a number, parse it as a number and compare it
    if(!isNaN(query)) {
      return (data === parseInt(query));
    }
  
    //If the parameter is a boolean value, combine it with current value
    if(typeof(data) == "boolean") {
      return data;
    }
  
    //If parameter is a string, check if data contains the query string
    if(typeof(query) == "string") {
      return data.toUpperCase().includes(query.toUpperCase());
    }
}

module.exports = {
    matchByParameter,
}