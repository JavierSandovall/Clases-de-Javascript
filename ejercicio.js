/**
 * Declara una variable que contenga una matriz
 * de 5x5 llena de puros numeros enteros y positivos
 */

/**
 * Luego, escribe un algoritmo para sumar todos
 * los numeros en la matriz.
 */
  let matriz =[
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
    [16,17,18,19,20],
    [21,22,23,24,25]
  ]
  console.table(matriz)
function sumarMatriz(matriz){
let sumar = 0;
for(let i = 0; i<matriz.length; i++){
  for(let j=0; j<matriz.length; j++){
    sumar += matriz[i][j]

  }
}
return sumar
}
 console.log(sumarMatriz(matriz))