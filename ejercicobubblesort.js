
// ejercicio 1
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
// ejercicio 2
// const edades = [33, 27, 34, 30, 34, 25];
// for(let i=0; i<edades.length; i++){
//   for(j=0; j<edades.length -1; j++){
//    if(edades[j] < edades[j+1]){
//     let aux = edades[j]
//     edades[j] = edades[j+1]
//     edades[j+1] = aux
//    }
//   }
// }
// console.log(edades)


// ejercico 3
const letras = ['C', 'A', 'D', 'E', 'H', 'Z', 'J', 'L'];

for(let i=0; i<letras.length; i++){
  for(let j=0; j<letras.length -1; j++){
    if(letras[j] > letras[j+1]){
      let aux = letras[j]
      letras[j] = letras[j+1]
      letras[j+1] = aux
    }
  }
}
console.log(letras)

// ejercicio 4
// const arrayCuentas =
// [
// {
// titular: "Arlene Barr",
// estaHabilitada: false,
// saldo: 3253.40,
// edadTitular: 33,
// tipoCuenta: "sueldo"
// },
// {
// titular: "Roslyn Torres",
// estaHabilitada: false,
// saldo: 3229.45,
// edadTitular: 27,
// tipoCuenta: "sueldo"
// },
// {
// titular: "Cleo Lopez",
// estaHabilitada: true,
// saldo: 1360.19,
// edadTitular: 34,
// tipoCuenta: "corriente"
// },
// {
// titular: "Daniel Malone",
// estaHabilitada: false,
// saldo: 3627.12,
// edadTitular: 30,
// tipoCuenta: "sueldo"
// },
// {
// titular: "Ethel Leon",
// estaHabilitada: true,
// saldo: 1616.52,
// edadTitular: 34,
// tipoCuenta: "sueldo"
// },
// {
// titular: "Harding Mitchell",
// estaHabilitada: true,
// saldo: 14089999.68,
// edadTitular: 25,
// tipoCuenta: "corriente"
// }
// ]

// function Cuentas(arrayCuentas){
//   for(let i=0; i<arrayCuentas.length; i++){
//     for(let j=0; j<arrayCuentas.length -1; j++){
//       if(arrayCuentas[j].e < arrayCuentas[j+1].){
//         let aux = arrayCuentas[j];
//         arrayCuentas[j] = arrayCuentas[j+1];
//         arrayCuentas[j+1] = aux;
//       }
           
//   }
// }
// }
// console.log(arrayCuentas)
// Cuentas(arrayCuentas)