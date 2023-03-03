// function crearMatriz(filas,columna){
// let encontrarFilas = [];
// let encontrarColumnas = [];
// let cont = 1;
// for(let i = 0; i < filas; i++){
//   for(let j = 0; j<columna; j++){
//     encontrarFilas.push(cont);
//     cont++
//   }
//   encontrarColumnas.push(encontrarFilas)
//   encontrarFilas = [];
// }
// return encontrarColumnas
// }
// console.table(crearMatriz(3,3))


// let mascotas = [
//   {
//       nombre: "lola",
//       edad: 1
//   },
//   {
//       nombre: "jack",
//       edad: 2
//   },
//   {
//       nombre: "firulais",
//       edad: 4
//   },
//   {
//       nombre: "mora",
//       edad: 3
//   },
// ]

// function ordenarAsc(array){
//   let aux 
//   for(let i = 0; i < array.length; i++){
//     for(let j = 0; j < array.length -1; j++){
//       if(array[j].edad > array[j+1].edad){
//         aux = array[j];
//         array[j] = array[j+1];
//         array[j+1] = aux;
//       }
//     }
//   }
// return array
// }
// // console.log(ordenarAsc(mascotas))

// function ordenarDesc(array){
//   let aux 
//   for(let i = 0; i < array.length; i++){
//     for(let j = 0; j < array.length -1; j++){
//       if(array[j].edad < array[j+1].edad){
//         aux = array[j];
//         array[j] = array[j+1];
//         array[j+1] = aux;
//       }
//     }
//   }
// return array
// }
// console.log(ordenarDesc(mascotas))

function encontrar(array,string){
  if(string === "Desc"){
    return ordenarDesc(array)
  }
  if(string === "Asc"){
    return ordenarAsc(array)
  }
  else{
    return " no fue encontrado"
  }
}
console.log(encontrar(mascotas, "Desc"))


// function encontrarMAsc(nombre){
//   for(let i = 0; i< mascotas.length; i++){
//     if(mascotas[i].nombre === nombre){
//       return mascotas[i]
//     }
//     else {
//       return " no esta registrado"
//     }
//   }
// }
// console.log(encontrarMAsc("lola"))



function nuevoArray(filas,columnas){
  let array = [];
  let agregarArray= [];
  let cont = 1;
  for( let i = 0; i < filas; i++){
    for ( let j = 0 ; j< columnas ; j++){
      array.push(cont)
      cont++      
    }
    agregarArray.push(array)
    array = []

  }
return agregarArray
}
console.table(nuevoArray(5,5))



