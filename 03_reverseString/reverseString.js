const reverseString = function(string) {
    return string
        .split('')  // Convert string to an array of characters
        .reverse()  // Reverse the array
        .join('');  // Join the array back into a string
};

// Do not edit below this line
module.exports = reverseString;
