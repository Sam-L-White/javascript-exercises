const removeFromArray = function() {
    let array = arguments[0]
    for(x = 1; x <= arguments.length; x++){
        array = array.filter((arrayValue) => arrayValue !== arguments[x])
    }
    console.log(array)
    return array

    
};

// Do not edit below this line
module.exports = removeFromArray;
