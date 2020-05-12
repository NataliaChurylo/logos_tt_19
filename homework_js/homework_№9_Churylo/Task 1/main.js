let str = prompt ('Введіть будь-яке речення');
let lich = 0;

for (let i=0; i<str.length; i++){
    if (str[i]==' ') lich++;
}

console.log(`Кількість пробілів у реченні = ${lich}`)