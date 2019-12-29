function bubbleSort(items) {
    var length = items.length;
    for (var i = 0; i < length; i++) { //Number of passes
        for (var j = 0; j < (length - i - 1); j++) { //Notice that j < (length - i)
            //Compare the adjacent positions
            if (items[j] > items[j + 1]) {
                //Swap the numbers
                var tmp = items[j]; //Temporary variable to hold the current number
                items[j] = items[j + 1]; //Replace current number with adjacent number
                items[j + 1] = tmp; //Replace adjacent number with current number
            }
        }
    }
}

function tambah(a, b) {
    return a + b;
}

function groupAnimals(animals) {
    // you can only write your code here!
    //animals.sort()
    bubbleSort(animals);

    var tampungKecil = []
    var tampungBesar = []

    for (var i = 0; i < animals.length; i++) {
        if (tampungKecil.length == 0) {
            tampungKecil.push(animals[i])
        } else if (animals[i][0] == animals[i - 1][0]) {
            tampungKecil.push(animals[i])
        } else if (animals[i][0] != animals[i - 1][0]) {
            tampungBesar.push(tampungKecil)
            tampungKecil = []
            tampungKecil.push(animals[i])
        }
    }
    tampungBesar.push(tampungKecil)
    return tampungBesar
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]