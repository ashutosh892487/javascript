var array1=prompt("Enter first array");
var Mynumbers1=array1.split(" ");
var array2=prompt("Enter second array");
var Mynumbers2=array2.split(" ");
var result=[];
var flag=0;
for(var i=0;i<Mynumbers1.length;i++)
{
  for(var j=0;j<Mynumbers2.length;j++)
  {
    if(Mynumbers1[i]==Mynumbers2[j])
    {
      flag=1;
      break;
    }
  }
  if(flag==0)
  {
    result.push(Mynumbers1[i]);
  }
  flag=0;
}

for(var k=0;k<Mynumbers2.length;k++)
{
  for(var l=0;l<Mynumbers1.length;l++)
  {
    if(Mynumbers2[k]==Mynumbers1[l])
    {
      flag=1;
      break;
    }
  }
  if(flag==0)
  {
    result.push(Mynumbers2[k]);
  }
  flag=0;
}

console.log(Mynumbers1);
console.log(Mynumbers2);
console.log(result);