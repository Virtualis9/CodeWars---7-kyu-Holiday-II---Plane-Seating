// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.


function doubleChar(str) {
return console.log(str.split('').map(char => char + char).join(''))
}
doubleChar('hey')

