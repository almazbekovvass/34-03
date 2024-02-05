const buttons = document.querySelectorAll('button')
const modalList = document.querySelector('.modal_list')
const wrapper = document.querySelector('.wrapper')
const column = document.querySelectorAll('.column')
const  createWindow = () => {
    const darkBg = document.createElement('div')
    darkBg.setAttribute('class', 'darkBg')
    const modalWindow = document.createElement("div")
    modalWindow.setAttribute('class','modalWindow')
    const textModalWindow = document.createElement('div')
    textModalWindow.setAttribute('class','textModalWindow')
    textModalWindow.innerHTML = 'Подтверждение'
    const modalWindowButton = document.createElement('button')
    modalWindowButton.setAttribute('class','modalWindowButton')
    modalWindowButton.innerHTML = 'OK'
    modalWindow.append(textModalWindow, modalWindowButton)
    darkBg.append(modalWindow)
    modalList.append(darkBg)

    modalWindowButton.onclick=() => {
        darkBg.style.display='none'
        this.column.style.background= 'silver'
        this.buttons.style.display='none'
    }


}
buttons.forEach ((button) => {
    button.onclick=()=> {
        createWindow()
    }

})





