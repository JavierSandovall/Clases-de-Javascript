 let matriz = [
  [1,2,3],
  [4,5,9],
  [6,7,8]
];
delete matriz[2][1];
console.table(matriz)

matriz[2][1] = 19;
console.table(matriz)

// for(let i=0; i<matriz.length ; i++){//filas
//   for(j=0; j<matriz.length; j++){//columnas
//     console.log(matriz[0][i])
//   }
// }

// for(let i=0 ; i<matriz[2].length; i++){
// console.log(matriz[2][i]);
// }
function mostrarLospares(matriz){
  for(let i=0; i<matriz.length; i++){
    for(let j=0; j<matriz.length; j++){
      if(matriz[i][j] % 2=== 0){
        console.log(matriz[i][j])

      }
    }
  }
}
mostrarLospares(matriz)