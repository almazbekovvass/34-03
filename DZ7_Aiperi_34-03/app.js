const puzzle_text = document.querySelectorAll('.puzzle_text')
const puzzle_button = document.querySelectorAll('.puzzle_button')
const answer = document.querySelectorAll('.answer')
const puzzle = document.querySelectorAll('.puzzle')


puzzle_button.forEach((i) => {
    i.onclick = () => {
        const answer = i.nextElementSibling
        answer.classList.toggle('hidden')
        i.innerHTML = answer.classList.contains('hidden') ? 'СКРЫТЬ ОТВЕТ' : 'ОТВЕТ';

    }
})




