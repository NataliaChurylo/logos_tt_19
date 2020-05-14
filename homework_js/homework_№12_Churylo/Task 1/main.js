let getBox = box => document.querySelector(box);

getBox('.box').style.width = '300px';
getBox('.box').style.height = '300px';
getBox('.box').style.margin = '0 auto';
getBox('.box').style.backgroundColor = 'purple';
getBox('.box').style.border = '3px solid black';

let i = 0, color = ['red', 'yellow', 'green'];

getBox('.box').onmouseover = function() {
    this.style.backgroundColor = color[i];
    i++;
    if (i==color.length) i=0;
}

getBox('.box').onmouseout = function() {
    this.style.backgroundColor = 'purple';
}