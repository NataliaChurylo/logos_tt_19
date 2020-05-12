function arrCopy(arr) {
    let res = [];
    for (let key in arr)
        res[key] = arr[key];

    return res;
}

function arrConcatCopy(arr) {
    let res = arr.concat();
    return res;
}

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3, [10, 20]];

let arr3 = arrCopy(arr1);
arr3[3] = [29];
let arr4 = arrConcatCopy(arr2);
arr4.reverse();

console.log(arr1);
console.log(arr3);
console.log(arr2);
console.log(arr4);