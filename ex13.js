var myObj = [5, [22], [[14]], [[4]],[5,6]];
 result = Object.keys(myObj).reduce(function (r, k) {
        return r.concat(k, myObj[k]);
    }, []);
    
console.log(result);