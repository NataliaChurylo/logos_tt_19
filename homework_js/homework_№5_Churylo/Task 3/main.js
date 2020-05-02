function maxNumber(){
    let max = arguments[0];
    for (let i=1; i<arguments.length; i++){
        if (arguments[i]>max) max = arguments[i];
    }
    return console.log(`${max} - найбільше число`);
}

maxNumber(-29, 200, 0, 18, 32, 29, 3);


