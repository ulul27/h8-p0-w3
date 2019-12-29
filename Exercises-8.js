function pasanganTerbesar(num) {
    // you can only write your code here!
    var output = [];
    var strNum = String(num)
    
    for (var i = 0 ; i < strNum.length; i++) {
         if (i == strNum.length - 1) {
             break
         } else {
             output.push(strNum[i] + strNum[i+1])
         }
     }
     
    for (var i = 0 ; i < output.length ; i++) {
        for (var j = i+1 ; j < output.length ; j++) {
            if (output[i] < output[j]) {
                var temp = output[i]
                output[i] = output[j]
                output[j] = temp
            }
        }
    }
    
    return output[0]
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99