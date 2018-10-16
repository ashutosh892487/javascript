var string=prompt("Enter a String");
console.log(string);
var character=prompt("Enter a character for counting its occurance in the string");
console.log(character);
var arr=string.split("");
var count=0;
for (var i in  arr) {
	if(arr[i]==character)
	{
		count++;
	}
}
console.log(count);