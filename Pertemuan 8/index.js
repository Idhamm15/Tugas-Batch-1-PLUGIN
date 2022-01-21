//cara mengmbil data di jason harga termurah dan harga termahal

// fetch('https://bukuprojek.herokuapp.com/buku/')


//         .then(function(response){
//             return response.json()
            
//         })
        
//         .then(data => {console.log(data.data[0].harga,
//                                     data.data[1].harga,
//                                     data.data[2].harga,
//                                     data.data[3].harga,
//                                     data.data[4].harga,
//                                     data.data[5].harga,
//                                     data.data[6].harga,
//                                     data.data[7].harga,
//                                     data.data[8].harga
                                    
                                    
//             )})
//             .filter(function (i,n){
//                 return n.harga===mathmax;
//             });

// function checkAdult(harga) {
//     return harga >= Mathmax;
//   }




        // fetch('https://bukuprojek.herokuapp.com/buku/')

        // .then(function(response){   
        //     return response.json()

        // })
        // .then(data => {console.log(data.data[0].nama,data.data[0].harga,data.data[0].tahun,data.data[0])})



        // .then(function newData(response){  
        //     let databaru = Array.filter(function(){ 
        //     return response.json() 

        //  })
        //  return databaru
        // }
        //  function newData(){
        //      let databaru = Array.filter(function(){
        //      return array.harga === Math.max
        //  })
        //  return databaru
        // }
        //.then(data => {console.log(data.data)})
        // .then(data => {console.log(newData)})
         


         //function newData() {
            //     let databaru = array.filter(function(){
            //         return array.age === 20        
            //     })
            //     return databaru
            // }
            // console.log(newData());
         

//callback
function callback1(param1,param2,callback){
    console.log(param1+param2)
    callback()
}
function callback2(){
    console.log('memanggil callback')
}
callback1(1,2,callback2)         


//promise
let promes = new Promise ((resolve,reject) =>{
    resolve('diterima')
    reject('ditolak')
})

// promes
    .then((result) => {console.log(result)})
    .catch((error) => {console.log(error)})