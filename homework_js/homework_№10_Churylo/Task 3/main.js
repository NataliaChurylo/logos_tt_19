function getLength(arr){
    let result = [];
    for (let key in arr){
        result[key]  = arr[key].length;
    }
    return result;
}

const arr1 = ['Ivan', 'Nataliia', 'Pavlo', 'Ira'];
const arr2 = ['Oleksiy', 'Andriana'];

const arr3 = getLength(arr1);
const arr4 = getLength(arr2);

console.log(arr1 + ' = ' + arr3);
console.log(arr3);

console.log(arr2 + ' = ' + arr4);
console.log(arr4);