var average = (array) => {
    var sum = 0
    var count = 0
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            count++
            sum += array[i]
        }
    }
    return console.log(sum / count)

}
average([2, -78, 45, 4, -7, -6, -10, 26, 30, 8])

var squares = (array) => {
    var sum = 0
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            sum += array[i] ** 2
        }
    }
    return console.log(sum)
}
squares([1, 2, 3, 4, 5, 6])

var textArray = (array) => {
    var newArray = []
    for (var i = 0; i < array.length; i++) {
        var arr2 = array[i]
        for (var j = 0; j < arr2.length; j++) {
            if ((arr2[j] === 't' || arr2[j] === 'a') && newArray.includes(arr2) === false) {
                console.log(newArray.push(arr2))
            }
        }
    }
    return console.log(newArray)
}
textArray(['text', 'frontend', 'apple', 'ffff', 'hhhhh', 'fnfnafnttt', 'aaaaaa'])