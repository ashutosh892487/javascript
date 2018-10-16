var myObj = [5, [22], [[14]], [[4]],[5,6]];
function flattenDeep(myObj) {
  return myObj.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
}
var arr=flattenDeep(myObj);
console.log(arr);