//function remove tanda seru
function removeTandaSeru(a){
    let x = a.split('!')
    return x.join('')  
}
console.log(removeTandaSeru("!Hello! World!"))


//function tambah hari
let hari = ['senin', 'selasa', 'rabu', 'jumat', 'minggu'];
function TambahHari(){
    hari.splice(3,0,'kamis')
    hari.splice(5,0,'sabtu')
    
    hari.forEach((e) => {
        console.log( 'hari ini hari ' + e)
    })
    
}
console.log(TambahHari())