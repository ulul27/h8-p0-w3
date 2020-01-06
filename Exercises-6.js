function angkaPalindrome(num) {
    // you can only write your code here!
    while (true) {
        num++
        var strNum = String(num)
        var string = ''
        for (let i = strNum.length - 1; i >= 0; i--) {
            string += strNum[i]
        }

        if (num == string) {
            return num
        }
    }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11   //118   undefined811
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001