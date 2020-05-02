let diapazon = function(start, end){
    while (start <= end){
        let lich = 0;
        for (let i=1; i<=start; i++){
            if (start%i == 0) lich++;
        }
        if (lich == 2) console.log (start);
        start++;
    }
}

let start = +prompt('Введіть перше число');
let end = +prompt('Введіть друге число');

if (start>end){
    let change = end;
    end = start;
    start = change;
}

diapazon(start, end)
