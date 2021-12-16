//const dataFilm
const dataFilm = [
    {judul: 'Doctor Strange', durasi: '2 Jam', genre: 'Action', tahun: 2018},
    {judul: 'Iron Man 1', durasi: '2 Jam', genre: 'Action', tahun: 2008},
    {judul: 'End Game', durasi: '3 Jam', genre: 'Action', tahun: 2019},
    {judul: 'Infinity War', durasi: '2 Jam', genre: 'Action', tahun: 2019},
    {judul: 'Captain Marvel', durasi: '2 Jam', genre: 'Action', tahun: 2018}
]


//Kita akan melakukan filter dengan durasi 2 jam,tahun 2018 dan 2008
function CariDataFilm () {
    //buat fungsi, yang di dalamnya melakukan method filter

    let newData = dataFilm.filter(function (a){
     return a.durasi === '2 Jam' && a.tahun === 2018 || a.tahun === 2008
     //a digunakan sebagai penginisialisasi array dataFilm
     //kemudian panggil nama properti yang ingin kita filter
    }) 
    return newData 
}
console.log(CariDataFilm());
// maka akan tercetak data dimana durasi dari 2 jam dan tahun 2018 dan 2008