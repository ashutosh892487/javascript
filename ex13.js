var flatten = function(a, shallow,r){
  if(!r){ r = []}
   
if (shallow) {
  return r.concat.apply(r,a);
  }
      
   for(var i=0; i<a.length; i++){
        if(a[i].constructor == Array){
            flatten(a[i],shallow,r);
        }else{
            r.push(a[i]);
        }
    }
    return r;
}

console.log(flatten([5, [22], [[14]], [[4]],[5,6]]));