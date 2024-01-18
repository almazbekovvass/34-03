var array = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol’, ‘br']
var object = {}
for (var i = 0; i <= array.length; i++) {
    if (object[array[i]]) {
        object[array[i]]++
    } else {
        object[array[i]] = 1
    }
}
console.log(object)

var firstArray = [1, 2, 3, 45, 32, 56, 61, 23, 12, 2, 34, 5, 6, 3, 76, 67, 87, 76]
var secondArray = [1, 45, 32, 3, 4, 2, 56, 76, 67, 87, 89, 8, 56, 54]
var newArray = []
for (var num = 0; num <= firstArray.length; num++) {
    if (secondArray.includes(firstArray[num])) {
        newArray.push(firstArray[num])
    }
}
console.log(newArray)