// function analysisWord(phrase) {
//   console.log(phrase);
//   const listOfWords = phrase.split(" ");
//   console.log(listOfWords);
//   let punto = 0;
//   for (let i = 0; i < listOfWords.length; i++) {
//     console.log(listOfWords[i]);
//     if (listOfWords[i] === "jajaja") {
//       punto = punto + 1;
//     }else if(listOfWords[i]=== "risa"){
//       punto=punto + 2
//     }else if(listOfWords[i] === "xD"){
//       punto=punto + 3
//     }else if(listOfWords[i] === "jejeje"){
//       punto = punto + 4
//     }
//   }
//   console.log(punto);
//   if (punto <= 5 && punto >= 1) {
//     return "Patient has bright red face";
//   } else if (punto >= 6 && punto <= 12) {
//     return "Patient is unable to speak";
//   } else if (punto >= 13 && punto <= 20) {
//     return "Patient's sides are mildly bruised";
//   } else if (punto >= 21 && punto <= 30) {
//     return "Patient has broken jaw, fractured ribs";
//   } else if (punto <= 31 && punto >= 49) {
//     return "Patient is in a coma";
//   } else if (punto >= 50) {
//     return "Patient is dead";
//   }
// }

// console.log(
//   analysisWord(
//     "risa epale eso que hicimos me dio mucha risa xD lo deberiamos repetir que risa jajaja"
//   )
// );

let numeros = [
  [10, 3, 2, 1, 4, 7],
  [5, 5, 10, 100, 4],
  [5, 125, 10, 1020, 4],
  [5, 5, 5097, 100, 4]
];

// Dada una matriz, recorrer sus valores y sumar solo los números que
// estén por encima o sean iguales a 10, pero menores que 1000.

function sumadenumeros(array) {
  let suma = 0;
  for (let i = 0; i < array.length; i++){
      for (let j = 0; j < array[i].length; j++){
          if (array[i][j] >= 10 && array[i][j] < 1000) {
              suma += array[i][j]
          }
      }
  }
  return suma;
}

let resultado = sumadenumeros(numeros);
console.log(resultado);