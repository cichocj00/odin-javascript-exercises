const repeatString = function(text, count) {
    let outputString = '';

    if (count < 0) {
        return 'ERROR';
    }

    for (let i = 0; i < count; ++i) {
        outputString += text;
    }

    return outputString;
};

// Do not edit below this line
module.exports = repeatString;
