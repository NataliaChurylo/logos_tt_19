function arrToString(arr) {
    let res = [];
    for (let key in arr) {
        res[key] = arr[key] + "";
    }
    return res;
}

const arr = [1, 2, 3];
const arr1 = [10, 200, 3333];

console.log(arr);
console.log(arrToString(arr));

console.log(arr1);
console.log(arrToString(arr1));