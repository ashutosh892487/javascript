function compareGrade(average) {
	// body...
	if (average>90 || average<=100) 
		{
			grad="A";
			return grad;
		}
		else  if (average>80 || average<=90) 
			{
				grad="B";
				return grad;
			}
		else  if (average>70 || average<=80) 
			{
				grad="C";
				return grad;
			}
		else  if (average>60 || average<=70) 
			{
				grad="D";
				return grad;
			}		 else {grad="F";
				return grad;}
}
var student=[
{name:'David'  ,marks:80},
{name:'Vinoth'  ,marks:77},
{name:'Divya' ,marks:88},
{name:'Ishitha' ,marks:95},
{name:'Thomas'  ,marks:68}];
var average=0;
for (var i = student.length - 1; i >= 0; i--) {
	average+=student[i].marks;
}
average/=student.length;
console.log(average);
grad=compareGrade(average);
console.log(grad);