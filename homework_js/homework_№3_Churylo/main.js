// Task 1
// let n = +prompt('Введіть число');
// let factorial = 1;

// for (let i=1; i<=n; i++){
//     factorial *=i;
// }
// document.write(`${n}! = ${factorial} `);


//Task 2
// for (let i=1000; i<=9999; i+=3){
//     document.write(`${i} `)
// }


// Task 3
// let elem = 1;
// for (let i=1; i<=55; i++){
//     document.write(`${elem} `);
//     elem += 2;
// }


// Task 4
// for(let i=90; i>=0; i-=5){
//     document.write(`${i} `)
// }


// Task 5
// for (let i=1, elem = 2; i<=20; i++, elem *= 2){
//         document.write(`${elem} `)
//     }


//Task 6
// for (let a=2; a<10000; a=2*a-1){
//     document.write(`${a} `);
// }


//Task 7
// for (let i=0, a=-166; i<100; i=2*a+200, a++){
//     if ((i>10 && i<99)||(i<-10 && i>-99)) document.write(`${i} `);
// }


//Task 8
let number = +prompt('Введіть число');
let pow = +prompt('Введіть степінь');
let result = 1, res = 1, changeSign = pow;

if (pow<0){
    changeSign = -pow;
}
for (let i=1; i<=changeSign; i++){
    if (pow>0) result *= number;
    else if (pow<0) {
        res *= number;
        result = 1/res;
    }
    else result = 1;
}
document.write(result);



// if(pow>0){
//     for(i=1; i<=pow; i++){
//         result *= number;
//     }
// }
// else if(pow<0) {
//     pow = -pow;
//     for(i=1; i<=pow; i++){
//         result *= number;
//     }
//     result = 1/result;
// }
// else result = 1;
// document.write(result);