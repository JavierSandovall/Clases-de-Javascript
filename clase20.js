let personas = [
    {
      nombre: "Dua",
      apellido: "Lipa",
      ocupacion: "cantante",
      estatura: 173,
    },
    {
      nombre: "Ariana",
      apellido: "Grande",
      ocupacion: "cantante",
      estatura: 160,
    },
    {
      nombre: "Taylor",
      apellido: "Swift",
      ocupacion: "cantante",
      estatura: 180,
    }
];

/*
for(let i=0 ; i<personas.length ; i++){

    for(let j=0 ; j<personas.length - 1 ; j++){

        if(personas[j].estatura < personas[j+1].estatura){

            let aux = personas[j];
            personas[j] = personas[j+1];
            personas[j+1] = aux;
        }
    }
}
*/
//console.log(personas);


//Crear una funcion que agrege al array un nuevo objeto y los ordene dada su estatura

function armarArreglo(arreglo){

    arreglo.push({
        nombre: "Diomedes",
        apellido: "Diaz",
        ocupacion: "cantante",
        estatura: 170,
    });

    [4, 7, 1, 10, 3];

//  i = 0 && h=0 -> [4, 7, 1, 10, 3]
//  i = 1 && h=0  -> [4, 1, 7, 10, 3]
//  i = 2 && h=0  -> [4, 1, 7, 10, 3]
//  i = 3 && h=0  -> [4, 1, 7, 3, 10]

//  i = 0 && h=1 -> [1, 4, 7, 3, 10]
//  i = 1 && h=1  -> [1, 4, 7, 3, 10]
//  i = 2 && h=1  -> [4, 1, 7, 3, 10]
//  i = 3 && h=1  -> [4, 1, 7, 3, 10]

    for(let h=0 ; h<arreglo.length ; h++){
        
        for(let i=0 ; i< arreglo.length - 1 ; i++){

            if(arreglo[i].estatura > arreglo[i+1].estatura){

                let aux = arreglo[i];
                arreglo[i] = arreglo[i+1];
                arreglo[i+1] = aux;

            }
            console.log({arreglo,i,h})
        }
    }

    return arreglo;

}



//console.log(armarArreglo(personas));


/*Crear una funcion que reciba por parametro un arreglo y un string. 

Si el string es "ASC" debera ordenar el arreglo de forma ascendente

Si el stringen cambio es "DES" debera ordenarlo de forma descendente */

// function ordenarAscPorEstatura(arreglo){
//     for(let h=0 ; h<arreglo.length ; h++){

//         for(let i=0 ; i< arreglo.length - 1 ; i++){

//             if(arreglo[i].estatura > arreglo[i+1].estatura){

//                 let aux = arreglo[i];
//                 arreglo[i] = arreglo[i+1];
//                 arreglo[i+1] = aux;

//             }
//         }
//     }
//     return arreglo;
// }

// function ordenarDesPorEstatura(arreglo){
//     for(let h=0 ; h<arreglo.length ; h++){

//         for(let i=0 ; i< arreglo.length - 1 ; i++){

//             if(arreglo[i].estatura < arreglo[i+1].estatura){

//                 let aux = arreglo[i];
//                 arreglo[i] = arreglo[i+1];
//                 arreglo[i+1] = aux;

//             }
//         }
//     }
//     return arreglo;
// }


// function ordenarArray(arreglo, string){

//     string = string.toUpperCase();

//     if(string === "ASC"){

//         let arregloOrdenado = ordenarAscPorEstatura(arreglo);
//         return arregloOrdenado;
//     }

//     if(string === "DES"){
//         return ordenarDesPorEstatura(arreglo);
//     }
//     else{
//         return "No fue encontrado su codigo";
//     }

// }

// console.log(ordenarArray(personas,"asc"));

// console.log(ordenarArray(personas,"des"));
//console.log("asc".toUpperCase());