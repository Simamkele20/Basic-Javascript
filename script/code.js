let arr1 = [23,2,17,20]
let  arr2 = [56,23,87,2]

let unique1 = arr1.filter((o) => arr2.indexOf(o) === -1);
let unique2 = arr2.filter((o) => arr1.indexOf(o) === -1);

const unique = unique1.concat(unique2);

console.log(unique);
