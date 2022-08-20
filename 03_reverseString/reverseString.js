const reverseString = function(inputString) {
    let length = inputString.length;
    let result = ""
    for(x=1; x < length + 1; x++){
        let letter = inputString.substr(-x,1)
        result = result + letter
    }

    return result
    
};

// Do not edit below this line
module.exports = reverseString;
