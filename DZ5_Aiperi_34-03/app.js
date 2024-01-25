var array = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol’, ‘br']
var object = {}
for (var i = 0; i <= array.length; i++) {
    if (object[array[i]]) {
        object[array[i]]++
    } else {
        object[array[i]] = 1
    }
}
let keys = Object.values(object)
let sortedObject = keys.sort((n1, n2) => n2 - n1)
console.log(sortedObject)

let shortname = (name, lastname, surname) => {
    console.log(`${lastname} ${name[0].toUpperCase()}.${surname[0].toUpperCase()}`)
}
shortname('Айпери', "Алмазбекова", "Алмазбековна")

let filtering = (books) => {
    let filterU = books.filter((book) => book.toLowerCase().includes('у'))
    let other = books.filter((book) => book.toLowerCase().includes('у') === false)
    console.log(filterU)
    console.log(other)
}
filtering(['уапрарпопо', "эпрроол", 'у'])

const nameBD = [
    {name:'John', age: '18 января 2000'},
    {name:'Tim', age: '1 февраль 2004'},
    {name:'Adilet', age: '22 сентябрь 2010'},
    {name:'Aruuke', age: '18 октябрь 1997'},
    {name:'Will', age: '18 декабрь 1999'},
    {name:'Tommas', age: '18 ноябрь 2003'}
]
nameBD.forEach(i => console.log(`Пользователь ${i.name} родился ${i.age}`))







