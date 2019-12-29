var input = ['0001', 'Roman Alamsyah ', 'Bandar Lampung', '21/05/1989', 'Membaca'];

function dataHandling2(text) {
    
    text.splice(5,0, 'Pria','SMA Internasional Metro');
    console.log(text)
    var date = text[3].split('/')
    var tanggal = Number(date[0])
    var bulan = Number(date[1])
    var tahun = Number(date[2])

    switch(bulan) {
        case 1:   { console.log('Januari'); break; }
        case 2:   { console.log('Februari'); break; }
        case 3:   { console.log('Maret'); break; }
        case 4:   { console.log('April'); break; }
        case 5:   { console.log('Mei'); break; }
        case 6:   { console.log('Juni'); break; }
        case 7:   { console.log('Juli'); break; }
        case 8:   { console.log('Agustus'); break; }
        case 9:   { console.log('September'); break; }
        case 10:  { console.log('Oktober'); break; }
        case 11:  { console.log('November'); break; }
        case 12:  { console.log('Desember'); break; }
        default: { console.log('Salah'); break; }
    }

    var gabungDate = []
    gabungDate.push(tanggal)
    gabungDate.push(bulan)
    gabungDate.push(tahun)
    gabungDate.sort(function(value1, value2) { return value2 - value1 });
    console.log(gabungDate)

    console.log(date.join('-'))

    var potongNama = text[1].slice(0, 15)
    console.log(potongNama)
}
dataHandling2(input)