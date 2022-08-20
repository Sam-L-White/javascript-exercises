const repeatString = function(string, num) {
    let repeatedString = ""

    if (num >= 0) {

        for(x = 0; x < num; x++){
            repeatedString = repeatedString + string
        }
        return repeatedString
    
    } else{
        return 'ERROR'
    }
    

    
};

// Do not edit below this line
module.exports = repeatString;
