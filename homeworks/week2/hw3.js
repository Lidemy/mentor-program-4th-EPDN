function reverse(str) {
    var newStr = '';
    for (var i = str.length -1; i >= 0; i -=1 ) {
        newStr += str[i];
    }

    return newStr;
  
}

reverse('1abc2');
