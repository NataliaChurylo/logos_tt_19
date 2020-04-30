let season = +prompt('Введіть число:');

if(season<=0 || season>12) alert('Такого місяця не існує')
else if(season == 1 || season == 2 || season == 12) alert('Зима')
    else if(season>=3 && season<=5) alert('Весна')
        else if(season>=6 && season<=8) alert('Літо')
            else if (season>=9 && season<=11) alert('Осінь')
