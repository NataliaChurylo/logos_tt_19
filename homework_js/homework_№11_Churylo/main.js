document.body.style.background = prompt('Задайте фон для сторінки');
document.body.style.fontStyle = prompt('Задайте тип шрифта на сторінці');

let title = document.querySelector('h1');
title.style.textAlign = prompt('Задайте розташування заголовка на сторінці');

let plink = document.querySelector('p');
plink.style.background = prompt('Задайте фон для параграфа з посиланнями');
plink.style.color = prompt('Задайте колір тексту для параграфа з посиланнями');

for (let i=0; i<3; i++){
    let link = document.createElement('a');
    link.innerText= prompt(`Введіть адресу ${i+1}го сайту`);
    plink.appendChild(link).href = `${link.innerText}`;
    link.innerText += ' ';
    link.style.color = prompt(`Введіть колір посилання ${i+1}го сайту`);
    link.target = '_blank';
}

let div = document.querySelector('div');
div.style.color = prompt('Задайте колір тексту для div');
div.style.fontSize = prompt('Задайте розмір тексту');
div.style.fontWeight = prompt('Задайте жирність тексту');

let ul = document.querySelector('ul');
ul.type = prompt('Задайте тип маркера для маркованого списку');



