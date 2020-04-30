let name = prompt ('Введіть ваше ім*я','Nataliia');
let divMainHeight = prompt ('Задайте висоту першого блоку','300');
let divMainWidth = prompt ('Задайте ширину першого блоку','300');
let divMainBGColor = prompt ('Задайте фоновий колір першого блоку','red');
let divSecondHeight = prompt ('Задайте висоту другого блоку','100');
let divSecondWidth = prompt ('Задайте ширину другого блоку','100');
let divSecondBG = prompt ('Задайте фон другого блоку','https://icons.iconarchive.com/icons/dapino/teenage-girl/256/girl-swear-icon.png');

document.write(`<div style = 'margin: 0 auto; height: ${divMainHeight}px; width: ${divMainWidth}px; background:${divMainBGColor}; border-radius: 10%; display: flex; justify-content: center; align-items: center; flex-direction:column;'><div style = 'height: ${divSecondHeight}px; width: ${divSecondWidth}px; background-image: url(${divSecondBG}); background-size: cover;'></div><h2>Welcome, ${name}</h2></div>`)