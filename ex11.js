var str=prompt("Enter a  string");
var arr=str.split("");
arr.sort();
var result="";
for (var i = 0; i < arr.length; i++) {
	result+=arr[i];
}
console.log(result);