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