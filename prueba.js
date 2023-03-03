
//primer ejercicio
let personas = [
  {
      nombre : "Raul",
      edad : 25
  },
  {
      nombre : "Jose",
      edad : 9
  },
  {
      nombre : "Mina",
      edad : 7
  },
  {
      nombre : "Lucas",
      edad : 15
  },
  {
      nombre : "Jorge",
      edad : 32
  },
  {
      nombre : "Luciano",
      edad : 26
  },
  {
      nombre : "Lucrecia",
      edad : 75
  },
]

function encontrarMayor(array){
  let nuevoArray = [];

  for(let i=0 ; i<array.length ; i++){

      if(array[i].edad >= 26 ){

          nuevoArray.push(array[i]);
      }
  }

  return nuevoArray;
}
console.log(encontrarMayor(personas))





// Ejercicio 2
// Realizar una función que reciba por parámetro el arreglo de objetos del ejercicio 1 y un String. Esta función deberá ordenar los objetos mediante el algoritmo Bubble Sort según su edad de forma ascendente o descendente según lo indique el string recibido por parámetro, teniendo en cuenta los siguientes criterios:
// Si el String es “ASC” o “asc” encontes ordenar de menor a mayor
// Si el String es “DESC” o “desc” entonces ordenar de mayor a menor
// Ejercicio 2
// 
let personas = [
  {
      nombre : "Raul",
      edad : 25
  },
  {
      nombre : "Jose",
      edad : 9
  },
  {
      nombre : "Mina",
      edad : 7
  },
  {
      nombre : "Lucas",
      edad : 15
  },
  {
      nombre : "Jorge",
      edad : 32
  },
  {
      nombre : "Luciano",
      edad : 26
  },
  {
      nombre : "Lucrecia",
      edad : 75
  },
]
function ordenarAsc(array){
    let aux 
    for(let i = 0; i < array.length; i++){
      for(let j = 0; j < array.length -1; j++){
        if(array[j].edad > array[j+1].edad){
          aux = array[j];
          array[j] = array[j+1];
          array[j+1] = aux;
        }
      }
    }
  return array
  }


  function ordenarDesc(array){
    let aux
  for(let i=0; i<array.length ; i++){
    for(let j = 0 ; j < array.length -1; j++){
      if(array[j].edad< array[j+1].edad){
        aux = array[j];
        array[j] = array[j+1];
        array[j+1] = aux;
        }
    }
  }
  return array;
  }

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
  console.log(encontrar(personas, "Asc"))

  
//  ejercicio 3
//   Desarrollar una función que retorne la suma de todos los valores de la fila 2.
//   Desarrollar una función que retorne un nuevo array que contenga solo los elementos pares que se encuentren dentro de la matriz.
  
//   IMPORTANTE: Realiza el correspondiente llamado a cada una de las funciones para demostrar el correcto funcionamiento de las mismas.
//   let matriz = [
//     [1,2,3,4,5],
//     [6,7,8,9,10],
//     [11,12,13,14,15]
// ]
// function sumar(matrix,fila){
//   let sum = 0;
//   for(let i=0; i<matrix[fila].length; i++){
//     sum += matrix[fila][i];
// }
// return sum
// }
// console.log(sumar(matriz,2))


// function encontrarPares(matrix){
//   const  pares =[];
//   for(let i=0; i<matrix.length; i++){
//     for(let j=0; j<matrix.length; j++){
//       if(matrix[i][j] % 2 === 0){
//         pares.push(matrix[i][j])
//       }
//     }
// }
// return pares
// }
// console.log(encontrarPares(matriz))
