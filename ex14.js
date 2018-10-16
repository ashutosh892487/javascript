function sortByAge(a,b) {
	// body...
	if(a.age>b.age)
		return -1;
	if (a.age<b.age) {return 1;}
	return 0;
}
var myObj =
[{name:'Saurabh', age: 30, occupation: "Team Leader"},
{name:'Anupriya', age: 32, occupation: "Team Leader"},
{name:'Kalyani', age: 25, occupation: "Programmer"},
{name:'Damodaran', age: 27, occupation: "Programmer"},
{name:'Krishnakath', age: 22, occupation: "Programmer"},
{name:'Venketraman', age: 28, occupation: "Programmer"}];
for (var i = 0; i < myObj.length; i++) {
	if (myObj[i].occupation=="Programmer")
	 {
	 	console.log(myObj[i]);
	 }
}
myObj.sort(sortByAge);
console.log(myObj);
var result = myObj.reduce(function(result, myObj){
 result[myObj.occupation] = (result[myObj.occupation] || []).concat(myObj.name,myObj.age);
 return result;
}, {});console.log(result);
var nameInMyObj = myObj.map(function (myObj) {
  return myObj.name;
});console.log(nameInMyObj);