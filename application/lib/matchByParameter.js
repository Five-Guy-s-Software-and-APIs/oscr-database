/**
 * Returns true if query parameters match data
 * 
 * @param {Object} query from URL
 * 
 * @param {Object} data
 * 
 * @returns {boolean} if query and data match
 */
 function matchByParameter(query, data) {
    let isInData = true;
    for(let parameter in data) {
      //If the parameter does not exist in query, or is empty, move on to the next parameter
      if(!query.hasOwnProperty(parameter) || !query[parameter]) continue;
      
      //If the parameter is a number, parse it as a number and compare it
      if(!isNaN(query[parameter])) {
      isInData = (data[parameter] === parseInt(query[parameter])) && isInData;
        continue;
      }
  
      //If the parameter is a boolean value, combine it with current value
      if(typeof(data[parameter]) == "boolean") {
        isInData = data[parameter] && isInData;
        continue;
      }
  
      //If parameter is a string, check if data contains the query string
      isInData = (data[parameter].toUpperCase().includes(query[parameter].toUpperCase()) && isInData);
    }
    return isInData;
  }

module.exports = {
    matchByParameter,
}