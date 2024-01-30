const input = document.querySelector('#input')
const creatButton = document.querySelector('#create_button')
const todoList = document.querySelector('#todo_list')

const createTodo = () => {
    if (input.value.trim() === '') {
        return alert("Нельзя вводить пробелы")
    }
    const div = document.createElement('div')
    div.setAttribute('class', 'block_text')
    const divButtons = document.createElement('button')
    divButtons.setAttribute('class', 'div_buttons')
    const text = document.createElement('h3')
    const deleteButton = document.createElement('button')
    deleteButton.setAttribute('class', 'delete_button')
    const editButton = document.createElement('button')
    editButton.setAttribute('class', 'edit_button')

    deleteButton.innerHTML = 'Delete'
    editButton.innerHTML = 'Edit'
    text.innerHTML = input.value
    divButtons.append(deleteButton, editButton)
    div.append(text, divButtons)
    deleteButton.onclick = () => div.remove()
    text.addEventListener('click', () => text.classList.toggle('toggle'))

    todoList.prepend(div)
    input.value = ''

    const edit_list = document.querySelector('.edit_list')


    const edit = () => {
        const edit_darkBackground = document.createElement('div')
        edit_darkBackground.setAttribute('class', 'darkBackground')
        const edit_div = document.createElement('div')
        edit_div.setAttribute('class', 'edit')
        const edit_input = document.createElement('input')
        edit_input.setAttribute('class', 'edit_input')
        edit_input.setAttribute('placeholder', 'Введите изменения')
        const edit_buttons = document.createElement('div')
        edit_buttons.setAttribute('class', 'edit_buttons')
        const edit_button_ok = document.createElement('button')
        edit_button_ok.setAttribute('class', 'edit_buttonOk')
        const edit_button_cancel = document.createElement('button')
        edit_button_cancel.setAttribute('class', 'edit_button_cancel')

        edit_button_ok.innerHTML = 'OK'
        edit_button_cancel.innerHTML = 'ОТМЕНА'
        edit_darkBackground.append(edit_div)
        edit_div.append(edit_input, edit_buttons)
        edit_buttons.append(edit_button_ok, edit_button_cancel)

        edit_list.append(edit_darkBackground)


        edit_button_cancel.onclick = () => edit_darkBackground.style.display = 'none'
        edit_button_ok.onclick = () => {
            if (edit_input.value.trim() === '') {
                return alert("Нельзя вводить пробелы")
            }
            text.innerHTML = edit_input.value
            edit_darkBackground.style.display = 'none'

        }


    }

    editButton.onclick = () => edit()


}
creatButton.onclick = () => createTodo()
window.onkeydown = (event) => {
    if (event.code === 'Enter') {
        createTodo()
    }
}

const counter = document.querySelector('.counter')
let counter_input = document.querySelector('.counter_input')
const buttons = document.querySelector('.buttons')
let plus = document.querySelector('.plus')
let minus = document.querySelector('.minus')

plus.onclick = () => {
    counter_input.value = Number(counter_input.value) + 1;
    createCounter()
}
minus.onclick = () => {
    counter_input.value = Number(counter_input.value) - 1;
    createCounter()
}

const createCounter = () => {
    if (counter_input.value > 0) {
        counter_input.style.background = 'green';
    } else if (counter_input.value < 0) {
        counter_input.style.background = 'red';
    } else {
        counter_input.style.background = 'gray';
    }
}










