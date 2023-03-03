// let num1 = [4, 9, 2, 5, 6, 7, 1, 2]; 
// let num2 = [1, 2, 3, 4, 5, 6, 7, 8]; 

// function ordenados(arreglo) {
//     for (i = 0; i < arreglo.length - 1; i++) {
//         if (arreglo[i] > arreglo[i + 1]) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(ordenados(num1))

// function generarMatriz(fila,columna){
//   let arrayfila = [];
//   let matriz = [];
//   let cont = 1;
//   for(let i=0; i<fila; i++){
//     for(let j = 0 ; j<columna ; j++){
//       arrayfila.push(cont);
//       cont++;
//     }
//     matriz.push(arrayfila);
//     arrayfila = []
//   }
//   return matriz;
// }
// console.table(generarMatriz(6,5))
// const personas =
// [
// {
// nombre: "Arlene Barr",
// legajo: 3955,
// edad: 33,
// },
// {
// nombre: "Roslyn Torres",
// legajo: 3925,
// edad: 27,
// },
// {
// nombre: "Cleo Lopez",
// legajo: 1965,
// edad: 34,
// },
// {
// nombre: "Daniel Malone",
// legajo: 3925,
// edad: 30,
// },
// {
// nombre: "Ethel Leon",
// legajo: 1915,
// edad: 34,
// },
// {
// nombre: "Harding Mitchell",
// legajo: 1905,
// edad: 25,
// }
// ]

// function ordenarAsc(array){
//   for(let i=0;  i<array.length;  i++){
//     for(let j=0; j<array.length -1; j++){
//       if(array[j].legajo > array[j+1].legajo){
//         let aux = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = aux;
//       }
//   }
//   }
//   return array
// }
// console.log(ordenarAsc(personas));

// function orderAscLegajo(array) {
//     for (let m = 0; m < array.length; m++) {
//       for (let i = 0; i < array.length - 1; i++) {
//           if (array[i].legajo > array[i + 1].legajo) {
//               let aux = array[i];
//               array[i] = array[i + 1];
//               array[i + 1] = aux;
//           }
//       }
//   }
//   return array
// }


// console.log(orderAscLegajo(personas));
// function orderDescLegajo(array) {
//   for (let m = 0; m < array.length; m++) {
//       for (let i = 0; i < array.length - 1; i++) {
//           if (array[i].legajo < array[i + 1].legajo) {
//               let aux = array[i];
//               array[i] = array[i + 1];
//               array[i + 1] = aux;
//           }
//       }
//   }
//   return array
// }

// console.log(orderDescLegajo(personas));


//  function ordenarArray(arreglo,string){
//   if(string === 'asc'){
//     return orderAscLegajo;
//   }
//    if(string === 'desc'){
//     return orderDescLegajo;

//   }
//   else{
//     return "no fue encontrado"
//   }

//  }
//  console.log(ordenarArray(personas,"desc"))



// { i: 0, j: 0, valor: 4 }
// { i: 1, j: 1, valor: 5 }
// { i: 2, j: 2, valor: 6 }

// { i: 1, j: 1, valor: 5 } i + j === 2

// { i: 0, j: 2, valor: 2 }-1
// { i: 2, j: 0, valor: 8 }-1

// { i: 0, j: 1, valor: 9 }
// { i: 1, j: 0, valor: 3 }
// { i: 1, j: 2, valor: 7 }
// { i: 2, j: 1, valor: 1 }

// function sumarDiagonal(matrix){
  //   let  rdoDiagonal = 0;
  //   for(let i=0; i<matrix.length; i++){
    //     for(let j=0; j<matrix.length; j++){
      //       console.log({i,j, tamanoArray:matrix.length, valor: matrix[i][j]})
      //       if(i===j){
        //         rdoDiagonal = rdoDiagonal + matrix[i][j]
        //       }
        //       else if(i+j === matrix.length -1){
          //       rdoDiagonal = rdoDiagonal + matrix[i][j]
          //       }
          //     }
          
          //   }
          // return rdoDiagonal
          // }
          // sumarDiagonal(matriz)
          // console.log(sumarDiagonal(matriz))

          
          
          // function sumarFila(matrix,fila){
            //   let rdoSuma = 0;
            //   for(let i=0; i<matrix[fila].length; i++){
              //     rdoSuma += matrix[fila][i] ;
              //   }
              //   return rdoSuma;
              // }
              // console.log(sumarFila(matriz,0));
              
              
              
              // const matriz = [
              //   [4,9,2],
              //   [3,5,7],
              //   [8,1,6],
              // ]

  // function encontrarPares(matrix){
  //   const elemntosPares = [];
  //   const encontrarMayor = [];
  //   for(let i=0; i<matrix.length; i++){
  //     for(let j=0; j<matrix.length; j++){
  //       if(matrix[i][j] % 2 === 0){
  //         elemntosPares.push(matrix[i][j])
  //       }
  //       if(matrix[i][j] > 5){
  //         encontrarMayor.push(matrix[i][j])
  //       }
  //     }
  //   }
  //   return elemntosPares,encontrarMayor
  // }
  // console.log(encontrarPares(matriz))

  // const matriz = [
  // [4,9,2],
  // [3,5,7],
  // [8,1,6],
  // ]

  // { i: 0, j: 1, tamanoArray: 3, valor: 9 }
  // { i: 1, j: 1, tamanoArray: 3, valor: 5 }
  // { i: 2, j: 1, tamanoArray: 3, valor: 1 }

  // { i: 1, j: 0, tamanoArray: 3, valor: 3 }
  // { i: 1, j: 1, tamanoArray: 3, valor: 5 }
  // { i: 1, j: 2, tamanoArray: 3, valor: 7 }


  // { i: 0, j: 0, tamanoArray: 3, valor: 4 }
  // { i: 0, j: 2, tamanoArray: 3, valor: 2 }
  // { i: 2, j: 0, tamanoArray: 3, valor: 8 }
  // { i: 2, j: 2, tamanoArray: 3, valor: 6 }

  // function dibujarMatriz(matrix){
  //   let marca = '';
  // for(let i=0; i<matrix.length; i++){
  //   for(let j=0; j<matrix[i].length; j++){
  //     //  console.log({i,j, tamanoArray:matrix.length, valor: matrix[i][j]})
  //     if (j=== 2){
  //       marca += '. '
  //     }
  //     else if(j === 0){
  //       marca += '. '
  //     }
  //     else if(i===parseInt(matrix.length /2)){
  //       marca += '. '
  //     }
  //     else{
  //        marca += '0 '
  //     }
  //   }
  //   marca += '\n'
  // }
  // return marca;
  // }
  // console.log(dibujarMatriz(matriz))

  function factorial(num){
    let fact = num;
    for(let i = num -1; i>0;i=i-1){
      fact = fact *i
    }
    return fact
  }
  console.log(factorial(7))