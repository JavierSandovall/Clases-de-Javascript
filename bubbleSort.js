// let numero =[41,56,21,36,5];

// for(let m =0 ; m<numero.length; m++){
//   for(let i=0; i<numero.length -1; i++){
//     if(numero[i] < numero[i+1]){
//       let aux = numero[i];
//       numero[i] = numero[i+1];
//       numero[i+1] =aux;
  
//     }
//   }
// }

// console.log(numero)
// let personas = [
// 	{
// 		nombre: "Dua",
// 		apellido: "Lipa",
// 		ocupacion: "cantante",
// 		estatura: 173,
// 	},
// 	{
// 		nombre: "Ariana",
// 		apellido: "Grande",
// 		ocupacion: "cantante",
// 		estatura: 160,
// 	},
// 	{
// 		nombre: "Taylor",
// 		apellido: "Swift",
// 		ocupacion: "cantante",
// 		estatura: 180,
// 	}
// ];
// function agregar(arreglo){
//   arreglo.push({
//     nombre: "javier",
// 		apellido: "sandoval",
// 		ocupacion: "deportista",
// 		estatura: 179,
//   });
//    for(let i=0; i<arreglo.length; i++){
//     for(let j=0; j<arreglo.length -1; j++){
//       if(arreglo[j].estatura > arreglo[j+1].estatura){
//         let auxi = arreglo[j];
//         arreglo[j] = arreglo[j+1];
//         arreglo[j+1] = auxi

//     }
//     return arreglo
//    }
// }
// }
// agregar(arreglo)
// console.log(personas)


const algo= [[ 'Z', 'L', 'J','5','3'],[ 'H', 'E', 'D','5','3'],['K', 'A','C','5','3'],['K', 'A','C','5','3'],['K', 'A','C','5','3']]

let printAlgo = ''
for(let i=0; i<algo.length; i++){
  for(let j=0; j<algo[i].length; j++){
  console.log({i,j},algo[i][j])
   if(i===j){
    printAlgo +='x '
  
  }
  // console.log(algo[i][j])
  // else if(i+j === algo.length -1){
  //   printAlgo +='x '
  // }
  // else{
  //   printAlgo +='0 '
  // }

  // if(i===0){
  //    printAlgo +='x '
  //   printAlgo +=algo[i][j]+' '
  
  // }
  // else if(j === parseInt(algo.length/2,10)){
  //    printAlgo +='x '
  //   printAlgo +=algo[i][j]+' '
  // }
  // else if(i === algo.length - 1 && j <  parseInt(algo.length/2,10)  ){
  //    printAlgo +='x '
  //   printAlgo +=algo[i][j]+' '
  // }
  // else{
  //   printAlgo +='  '
  // }

  // }

  // { i: 0, j: 0 } Z

  // { i: 0, j: 0 } Z
  // { i: 1, j: 1 } E
  // { i: 2, j: 2 } C

  printAlgo +='\n'
}

// { i: 0, j: 2 } J
// { i: 1, j: 1 } E
// { i: 2, j: 0 } K
// console.log(printAlgo)

//       0  1  2
// 0 ->  z  l  j
// 1 ->  h  e  d
// 2->   k  a  c
// const letras = ['C', 'A', 'D', 'E', 'H', 'Z', 'J', 'L'];

// for(let j=0; j<letras.length; j++){
//   for(let i=0; i<letras.length -1; i++){
//     console.log()
//   if(letras[i] > letras[i+1]){
//      let aux = letras[i];
//     letras[i] = letras[i+1];
//     letras[i+1] = aux;
//   }
//   }
// }

