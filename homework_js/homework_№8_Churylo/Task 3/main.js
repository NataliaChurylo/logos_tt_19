let number = prompt('Введіть число');
function getSqrt(number){
    if (number == '' || number == null) alert('Будь ласка, введіть число!')
    else if (isNaN(number)) alert('Повинне бути числове значення!')
        else if (number < 0) alert('Введіть додатнє число!')
            else {
                let s = Math.sqrt(number);
                alert(`Корінь квадратний з ${number} = ${s}`);
    }
}

getSqrt(number);