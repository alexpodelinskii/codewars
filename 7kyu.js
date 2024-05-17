//Convert Hash To An Array
/*Convert a hash into an array. Nothing more, Nothing less.

{name: 'Jeremy', age: 24, role: 'Software Engineer'}
should be converted into

[["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
Good Luck!*/
function convertHashToArray(hash) {
    const resultArray = [];
    for (let key in hash) {
        resultArray.push([key, hash[key]]);
    }
    return resultArray.sort();
}

//Working with arrays I (and why your code fails in some katas)

/*
In this kata the function returns an array/list of numbers without its last element. The function is already written for you and the basic tests pass, but random tests fail. Your task is to figure out why and fix it.

Good luck!
*/
function withoutLast(arr) {
    let lenth = arr.lenth
    const arr1 = [];
    return arr1;
}
asdasdsada