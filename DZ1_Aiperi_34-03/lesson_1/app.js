var monthBirth = prompt('Введите месяц вашего дня рождения')
var numberBirth = prompt('Введите число вашего дня рождения')
if ((monthBirth === "Январь" && numberBirth >= 20 && numberBirth <= 31) || (monthBirth === 'Февраль' && numberBirth <= 15 && numberBirth > 0)) {
    alert(monthBirth + " " + numberBirth + " - Козерог")
} else if ((monthBirth === "Февраль" && numberBirth >= 16 && numberBirth <= 28) || (monthBirth === 'Март' && numberBirth <= 11 && numberBirth > 0)) {
    alert(monthBirth + " " + numberBirth + " - Водолей")
} else if ((monthBirth === "Март" && numberBirth >= 12 && numberBirth <= 31) || (monthBirth === 'Апрель' && numberBirth <= 18 && numberBirth > 0)) {
    alert(monthBirth + " " + numberBirth + " - Рыбы")
} else if ((monthBirth === "Апрель" && numberBirth >= 19 && numberBirth <= 30) || (monthBirth === 'Май' && numberBirth <= 13 && numberBirth > 0)) {
    alert(monthBirth + " " + numberBirth + " - Овен")
} else if ((monthBirth === "Май" && numberBirth >= 14 && numberBirth <= 31) || (monthBirth === 'Июнь' && numberBirth <= 19 && numberBirth > 0)) {
    alert(monthBirth + " " + numberBirth + " - Телец")
} else if ((monthBirth === "Июнь" && numberBirth >= 20 && numberBirth <= 30) || (monthBirth === 'Июль' && numberBirth <= 20 && numberBirth > 0)) {
    alert(monthBirth + " " + numberBirth + " - Близнецы")
} else if ((monthBirth === "Июль" && numberBirth >= 21 && numberBirth <= 31) || (monthBirth === 'Август' && numberBirth <= 9 && numberBirth > 0)) {
    alert(monthBirth + " " + numberBirth + " - Рак")
} else if ((monthBirth === "Август" && numberBirth >= 10 && numberBirth <= 30) || (monthBirth === 'Сентябрь' && numberBirth <= 15 && numberBirth > 0)) {
    alert(monthBirth + " " + numberBirth + " - Лев")
} else if ((monthBirth === "Сентябрь" && numberBirth >= 16 && numberBirth <= 31) || (monthBirth === 'Октябрь' && numberBirth <= 30 && numberBirth > 0)) {
    alert(monthBirth + " " + numberBirth + " - Дева")
} else if ((monthBirth === "Октябрь" && numberBirth === 31) || (monthBirth === 'Ноябрь' && numberBirth <= 22 && numberBirth > 0)) {
    alert(monthBirth + " " + numberBirth + " - Весы")
} else if ((monthBirth === "Ноябрь" && numberBirth >= 23 && numberBirth <= 30) || (monthBirth === 'Ноябрь' && numberBirth <= 29 && numberBirth > 0)) {
    alert(monthBirth + " " + numberBirth + " - Скорпион")
} else if ((monthBirth === "Ноябрь" && numberBirth === 30) || (monthBirth === 'Декабрь' && numberBirth <= 17 && numberBirth > 0)) {
    alert(monthBirth + " " + numberBirth + " - Змееносец")
} else if ((monthBirth === "Декабрь" && numberBirth >= 18 && numberBirth <= 31) || (monthBirth === 'Январь' && numberBirth <= 19 && numberBirth > 0)) {
    alert(monthBirth + " " + numberBirth + " - Стрелец")
} else {
    alert('Что то пошло не так , проверьте данные')
}

