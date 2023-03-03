// let numeroEstudiantes = 355;
//  numeroEstudiantes = numeroEstudiantes -5;
//  console.log(numeroEstudiantes)


// let miEdad=  20;
//  let mensaje = "mi nombre es javier y tengo " + miEdad + " anos";
//  console.log(mensaje)



// const num = [11, 14,12, 5,3,2,]
// function ordenar(array){
//   for(let i=0; i<array.length; i++){
//     for(let j=0; j<array.length -1; j++){
//       if(num[j] > num[j+1]){
//         let aux = num[j];
//         num[j] = num[j+1];
//         num[j+1] = aux
//       }
//     }
//   }
// }
//  ordenar(num)
//  console.log(num)


const number = [
  {
    nombre : "javier",
    edad : 20
},
{
  nombre : "jose",
  edad : 19
}
]
function buscar(array){
  let aux
  for(let i=0; i<array.length; i++){

    for(let j=0; j<array.legth -1 ; j++){

      if(array[j].edad > array[j+1].edad){

        aux = array[j+1];
        array[j+1] = array[j];
        array[j] = aux;
      }
    }
    
  }
  
}
buscar(number)
console.log(number)