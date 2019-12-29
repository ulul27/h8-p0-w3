function angkaPalindrome(num) {
    // you can only write your code here!
    for (var i = 0 ; i > -1 ; i++) {
        num++
        var strNum = String(num)
        // console.log('num :', num, typeof(num))
        // console.log('ubah str num :', strNum, typeof(strNum))
         var ubahNum = Number(strNum)
        // console.log(typeof(ubahNum))
        if (num === ubahNum) {
            return num
        }
    }

    
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001