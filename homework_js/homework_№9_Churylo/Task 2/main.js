let email = prompt('Ввведіть ваш email');

if (email.indexOf('@')>0 && email.indexOf('@')<email.length-1) alert('Правильно введений email!');
else alert('Некоректно введений email!');