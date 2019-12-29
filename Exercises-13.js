function targetTerdekat(arr) {
    // you can only write your code here!
    var posX = [];
    var indeksO = 0;
    var isFind = false
    var output = '';


    for (var i = 0 ; i < arr.length ; i++) {
        if (arr[i] == 'o') {
            indeksO = i
        }
    }
    //console.log(indeksO)
    var count = 0
    for (var i = indeksO ; i < arr.length ; i++) {
        if (arr[i+1] == 'x') {
            count++
            isFind = true
            posX.push(['posXRight',count])
            break
        } else {
            count++    
        }
    }

    count = 0
    for (var i = indeksO ; i >= 0 ; i--) {
        if (arr[i-1] == 'x'){
            count++
            isFind = true
            posX.push(['posXLeft' , count])
            break
        } else {
            count++
        }
    }
    if (isFind == false) {
        return 0
    }
    if (posX.length == 1) {
        output = posX[0][1]
    } else if (posX[0][1] < posX [1][1]) {
        output = posX[0][1]
    } else {
        output = posX[1][1]
    }
    return output
}
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2