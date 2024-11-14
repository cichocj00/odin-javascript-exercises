const fibonacci = function(member) {
    if (member == 0) return 0;

    if (member < 0) return "OOPS"; 

    const fibonacciArray = [1, 1];

    for (let i = 2; i < member; ++i) {
        fibonacciArray[i] = fibonacciArray[i - 1] + fibonacciArray[i - 2];
    }

    return fibonacciArray[fibonacciArray.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
