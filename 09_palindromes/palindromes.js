const palindromes = function (text) {
    const regex = /[\W_]/g;
    const lowRegStr = text.toLowerCase().replace(regex, '');
    const reversedText = lowRegStr.split('').reverse().join('');

    return reversedText === lowRegStr;
};

// Do not edit below this line
module.exports = palindromes;
