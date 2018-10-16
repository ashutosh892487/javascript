function removeDuplicates(num) {
  var x,
      len=num.length,
      out=[],
      obj={};
 
  for (x=0; x<len; x++) {
    obj[num[x]]=0;
  }
  for (x in obj) {
    out.push(x);
  }
  return out;
}
var array=prompt("Enter");
var Mynum=array.split(" ");
result = removeDuplicates(Mynum);
console.log(Mynum);
console.log(result);