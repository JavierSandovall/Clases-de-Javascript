// let num = [2, 4, 5, 7, 8,];
// for(let i=0; i<num.length; i++){
//   for(let j=0; j<num.length-1; j++){
//     if(num[j] < num[j+1]){
//       let aux = num[j];
//       num[j] = num[j+1];
//       num[j+1] = aux;


//     }
//   }
// }
// console.log(num)
// const edades = [33, 27, 34, 30, 34, 25];
// for(let i=0; i<edades.length; i++){
//   for(j=0; j<edades.length -1; j++){
//    if(edades[j] > edades[j+1]){
//     let aux = edades[j]
//     edades[j] = edades[j+1]
//     edades[j+1] = aux
//    }
//   }
// }
// console.log(edades)




// let personas = [
//   {
//       nombre : "Raul",
//       edad : 25
//   },
//   {
//       nombre : "Jose",
//       edad : 9
//   },
//   {
//       nombre : "Mina",
//       edad : 7
//   },
//   {
//       nombre : "Lucas",
//       edad : 15
//   },
//   {
//       nombre : "Jorge",
//       edad : 32
//   },
//   {
//       nombre : "Luciano",
//       edad : 26
//   },
//   {
//       nombre : "Lucrecia",
//       edad : 75
//   },
// ]

// function encotraMayor(array){
//   let nuevoArray =[]
//   for(let i=0; i<array.length; i++){
//     if(array[i].edad <= 9){
//       nuevoArray.push(array[i])

//     }
//   }
//   return nuevoArray

// }
// console.log(encotraMayor(personas))

// function ordenarDesc(array){
//   let aux
// for(let i=0; i<array.length ; i++){
//   for(let j = 0 ; j < array.length -1; j++){
//     if(array[j].edad< array[j+1].edad){
//       aux = array[j];
//       array[j] = array[j+1];
//       array[j+1] = aux;
//       }
//   }
// }
// return array;
// }



let listaDeCompras = [['cereal', 3],['galletas', 4], ['leche', 6]]

console.log('voy a comprar ' + listaDeCompras[0][1] + " unidades " + listaDeCompras[0][0])
console.log('voy a comprar ' + listaDeCompras[1][1] + " unidades " + listaDeCompras[1][0])
console.log('voy a comprar ' + listaDeCompras[2][1] + " unidades " + listaDeCompras[2][0])
