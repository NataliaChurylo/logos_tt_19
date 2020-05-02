let number = +prompt('Введіть число');

let fib = number =>{
    let a=1, b=0, sum=1;
    console.log(a);
    for (let i=1; i<number; i++){
        sum=a+b;
        b=a;
        a=sum;
        console.log(a);
    }
}

fib(number);
