// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// write your code here...
function stringToUpperCase(str) {
    return str.toUpperCase();
}

// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
// write your code here...
function capitalizeWords(str) {
    return str.split(' ').map(element => element.charAt(0).toUpperCase() + element.slice(1)).join(' ');
}

// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
// write your code here...
function retrievePriceValue(str) {
    return str.slice(1);
}