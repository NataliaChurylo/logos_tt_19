let i=4;
let password = prompt('Введіть пароль:');

while (i>0){
    if (password != '123456'){
        i--;
        if (i==0) alert ('Будь ласка, спробуйте пізніше!');
        else password = prompt('Ви ввели невірний пароль, спробуйте ще раз. Залишилося '+ i + ' спроби');
    }
    else {
        alert ('Запрошуємо на сайт!');
        i=0;
    }
}