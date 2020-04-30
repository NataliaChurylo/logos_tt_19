let name = prompt('Введіть логін:');

if(name == null) console.log('Вхід скасований')
    else if(name == 'Імя') {
        let password = prompt('Введіть пароль');
        if(password == null) console.log('Вхід скасований')
            else if(password == 'ЛОГОС') console.log('Ласкаво просимо!')
                else console.log('Пароль невірний!')
    }
    else console.log('Я вас не знаю')