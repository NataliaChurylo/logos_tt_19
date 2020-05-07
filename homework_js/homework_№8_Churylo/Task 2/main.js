let number = prompt('Задайте радіус кола');
function getArea(number){
    if (number == '' || number == null) alert('Будь ласка, введіть радіус!')
    else if (isNaN(number)) alert('Повинне бути числове значення!')
    else {
        let s = Math.PI * Math.pow(number,2);
        alert(`Площа круга з радіусом ${number} = ${s.toFixed(2)} квадратних одиниць`);
    }
}

getArea(number);
