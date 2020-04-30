let ask = prompt('25*25 = ?');
let lich = 0;

if (ask == 625) lich++;

ask = prompt('629-326 = ?')
if (ask == 303) lich ++;

ask = prompt('1000/4 = ?')
if (ask == 250) lich ++;

ask = prompt('27*5 = ?')
if (ask == 135) lich ++;

ask = prompt('2 593 + 934 = ?')
if (ask == 3527) lich ++;

ask = prompt('2 000 * 18 = ?')
if (ask == 36000) lich ++;

ask = prompt('(20 + 653)*2 = ?')
if (ask == 1346) lich ++;

ask = prompt('(2 593 + 934) - (1 890 - 423) = ?')
if (ask == 2060) lich ++;

ask = prompt('94^0 = ?')
if (ask == 1) lich ++;

ask = prompt('(50-38)^3 = ?')
if (ask == 1728) lich ++;

if(lich>=0 && lich<=4) alert('Ви відповіли на ' + lich + ' питань із 10. \n\n Ваш рівень знань - ПОЧАТКІВЕЦЬ.');
else if (lich>4 && lich<=8) alert('Ви відповіли на ' + lich + ' питань із 10. \n\n Ваш рівень знань - СЕРЕДНЯЧОК.');
    else if (lich == 9 || lich == 10) alert('Ви відповіли на ' + lich + ' питань із 10. \n\n Ваш рівень знань - ЕКСПЕРТ.');

