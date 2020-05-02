let month = prompt('Введіть число');

switch(true){
    case month==1 || month == 2 || month ==12: 
        alert('Зима');
        break;
    case month>=3 && month<=5:
        alert('Весна');
        break;
    case month>=6 && month<=8:
        alert('Літо');
        break;
    case month>=9 && month<=11:
        alert('Осінь');
        break;
    default:
        alert('Не можливо визначити пору року');
        break;
}
