const sumAll = function(numOne,numTwo) {
    if(typeof(numOne) === "number" && Math.sign(numOne) === 1 && typeof(numTwo) === "number" && Math.sign(numTwo) === 1){

        let bigNum = 0
        let smallNum = 0
        let sum = 0

        if(numOne > numTwo){

            bigNum = numOne
            smallNum = numTwo

        } else{

            bigNum = numTwo
            smallNum = numOne
        }

        for(x = smallNum; x <= bigNum; x++){

            sum = sum + x
        }

        return sum

    } else {
        return "ERROR"
    }
    
};

// Do not edit below this line
module.exports = sumAll;
