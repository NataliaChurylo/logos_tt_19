let address = prompt('Введіть url-адресу');

if (address.startsWith('http://')) console.log(address.substring(7));
else if (address.startsWith('https://')) console.log(address.substring(8));
else alert('Введіть правильну url-адресу');