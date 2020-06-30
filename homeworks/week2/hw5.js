function join(arr, concatStr) {
    var r1 = '';
    for (var i = 0; i < arr.length; i +=1) {
        if (i === arr.length -1){
            r1 += arr[i];
        } else{
            r1 += arr[i] + concatStr;
        }
    }
  return r1;
}

function repeat(str, times) {
    var r2 ='';
    for(var i = 1; i <= times; i += 1) {
        r2 += str;
    }
  return r2;
}

console.log(join(["a", "b", "C"], "!"));
console.log(repeat("abc", 5));
