let getBox = box => document.querySelector(box);

getBox('.box').onmouseover = function() {
    this.style.backgroundColor = 'yellow';
    this.style.color = 'blue';
    this.style.border = '3px solid green';
    this.innerText = 'Хочеш знати який?';
}

getBox('.box').onmousedown = function() {
    this.style.backgroundColor = 'black';
    this.style.color = 'white';
    this.style.border = '3px solid yellow';
    this.innerText = 'А я тобі не скажу!';
}

getBox('.box').onmouseup = function() {
    this.style.backgroundColor = 'yellow';
    this.style.color = 'blue';
    this.style.border = '3px solid green';
    this.innerText = 'Хочеш знати який?';
}

getBox('.box').onmouseout = function() {
    this.style.backgroundColor = '';
    this.style.border = '';
    this.style.color = '';
    this.innerText = 'У мене є секрет!';
}