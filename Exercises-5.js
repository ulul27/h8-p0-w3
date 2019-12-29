function palindrome(kata) {
  // you can only write your code here!
  var output = '';
  for (var i = kata.length -1; i >= 0 ; i--) {
      output += kata[i]
  }
    //console.log(output)
    if(kata == output) { // disini gak jalan
      return true
    } else {
      return false 
    }
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false