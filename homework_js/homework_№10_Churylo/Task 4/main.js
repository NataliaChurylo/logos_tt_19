function removeDublicates(arr){
    arr = arr.join().toLowerCase();
    let result = arr.split(',');
    return [... new Set(result)];
}

const arr1 = ['html','css','HTML','js'];
const arr2 = ['html','css','html','js','html','js','python','js','scss','HTml'];

console.log(arr1);
console.log(removeDublicates(arr1));

console.log(arr2);
console.log(removeDublicates(arr2));
