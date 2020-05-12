let str = prompt('Введіть будь-яке речення зі словами html');

str = str.toLowerCase();
console.log(str.split('html').length-1);