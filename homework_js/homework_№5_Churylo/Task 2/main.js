let number = +prompt('Задайте число');

function primeNumber(number){
    let lich = 0;
    for (let i=1; i<=number; i++){
        if (number%i == 0){
            lich++;
        }
    }
    if (lich == 2) return console.log(`${number} - це просте число`)
    else return console.log(`${number} - це складене число`)
}

primeNumber(number);
