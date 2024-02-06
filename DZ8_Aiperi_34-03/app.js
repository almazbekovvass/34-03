let movies = [
    {title: 'spider man', year: 2020, rating: '7.7', director: 'dj frow'},
    {title: 'Отель', year: 2024, rating: '8.9', director: 'Орозгуль Абдыкадырова'},
    {title: 'Оно', year: 2018, rating: '3.5', director: 'Ф.В Вилли'},
    {title: 'Паразиты', year: 2017, rating: '9.7', director: 'Ди Джи'}
]

let table = document.getElementById('movieTable')

movies.forEach((movie, index) =>{
    let row = table.insertRow(-1)
    row.insertCell(0).innerText = movie.title
    row.insertCell(1).innerText = movie.year
    row.insertCell(2).innerText = movie.rating
    row.insertCell(3).innerText = movie.director
    let buyButton = row.insertCell(4)
    buyButton.innerHTML = '<button class="buyButton">Купить</button>'
})

let modal = document.getElementById('myModal')
let span = document.getElementsByClassName("close")[0]
let confirmPurchase = document.getElementById('btn')
let selectedCell

table.addEventListener('click', (e) =>{
    if (e.target && e.target.className === 'buyButton') {
        modal.style.display = "block"
        selectedCell = e.target.parentElement
    }
})

span.onclick = ()=> {
    modal.style.display = "none"
}

confirmPurchase.onclick = () => {
    selectedCell.classList.add('background')
    selectedCell.innerHTML = ''
    modal.style.display = "none";
}

window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}





