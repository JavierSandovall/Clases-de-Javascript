/*- 

Matrices:
1. Crear una matriz de 3 x 4 
2. Crear una funcion que suma todos los valores de la matriz que sean pares
3. Crear una funcion que cambie todos los valores de la matriz que sean multiplos de 5 por 
un numero 1
4. Crear una funcion que genere un nuevo array donde se guarden todos los numeros impares de 
la matriz
5. Crear una funcion que retorne la multiplicacion de todos los elementos de la fila 1


Bubble Sort:
1. Armá un array llamado estudiantes de 3 objetos, que cada uno de ellos tenga: nombre, edad y notaFinal.
2. Crear una funcion que ordene esos objetos por edad de forma ascendente
3. Crear una funcion que retorne un nuevo array. Este deberá contener solo los objetos cuya notaFinal sean mayores o iguales a 7 
4. Agregar un atributo id a cada objeto que inicie en 1 y sea secuencial*/


//1. Crear una matriz de 3 x 4


//2. Crear una funcion que suma todos los valores de la matriz que sean pares

function sumarPares(matrix){

    let suma= 0;

    for(let m=0 ; m<matrix.length ; m++){

        for(let n=0 ; n<matrix[m].length ; n++){   //OJO LA CONDICION

            if(matrix[m][n] % 2 === 0){
                suma += matrix[m][n];
            }

        }
    }
    return suma;
}

//console.log(sumarPares(matriz));

//Crear una funcion que cambie todos los valores de la matriz que sean multiplos de 5 por 
//un numero 1


function cambiarPor1(matrix){

    for(let m=0 ; m<matrix.length ; m++){

        for(let n=0 ; n<matrix[m].length ; n++){   //OJO LA CONDICION

            if(matrix[m][n] % 5 === 0){
                matrix[m][n] = 1;
            }

        }
    }
    return matrix;
}

//console.table(cambiarPor1(matriz));


//Crear una funcion que genere un nuevo array donde se guarden todos los numeros impares de 
//la matriz


function retornarLosImpares(matrix){

    let nuevoArray = [];

    for(let m=0 ; m<matrix.length ; m++){

        for(let n=0 ; n<matrix[m].length ; n++){   //OJO LA CONDICION

            if(matrix[m][n] % 2 !== 0){
                nuevoArray.push(matrix[m][n]);
            }

        }
    }
    return nuevoArray;
}

//console.log(retornarLosImpares(matriz));

let matriz = [
    [10,56,36,98],
    [52,10,25,69],
    [85,41,23,56]
]

//Crear una funcion que retorne la multiplicacion de todos los elementos de la fila 1

function multiplicarFila(matrix, fila){

    let rdoMultiplicacion = 1;

    for(let i=0 ; i<matrix[fila].length ; i++){

        rdoMultiplicacion *= matrix[fila][i];

        //rdoMultiplicacion = rdoMultiplicacion * matrix[fila][i];

    }

    return rdoMultiplicacion;
}

//console.log(multiplicarFila(matriz,2));

//Armá un array llamado estudiantes de 3 objetos, que cada uno de ellos tenga: nombre, edad y notaFinal.

let estudiantes = [
    {
        nombre : "Pepe",
        edad : 65,
        notaFinal : 9
    },
    {
        nombre : "Susana",
        edad : 30,
        notaFinal : 7
    },
    {
        nombre : "Juancito",
        edad : 15,
        notaFinal : 4
    }
]

/*2. Crear una funcion que ordene esos objetos por edad de forma ascendente
3. Crear una funcion que retorne un nuevo array. Este deberá contener solo los objetos cuya notaFinal sean mayores o iguales a 7 
4. Agregar un atributo id a cada objeto que inicie en 1 y sea secuencial*/

//Crear una funcion que ordene esos objetos por edad de forma ascendente

function ordenarPorEdad(arreglo){

    for(let i=0 ; i<arreglo.length ; i++){

        for(let n=0 ; n<arreglo.length - 1; n++){

            if(arreglo[n].edad > arreglo[n+1].edad){

                let aux = arreglo[n];
                arreglo[n] = arreglo[n+1];
                arreglo[n+1] = aux;
            }

        }
    }
    return arreglo;
}

//console.log(ordenarPorEdad(estudiantes));


// Crear una funcion que retorne un nuevo array. Este deberá contener solo los objetos cuya notaFinal sean mayores o iguales a 7

function devolverAprobados(arreglo){

    let nuevoArray = [];

    for(let i=0 ; i<arreglo.length ; i++){

        if(arreglo[i].notaFinal >= 7 ){

            nuevoArray.push(arreglo[i]);
        }
    }

    return nuevoArray;
}

console.log(devolverAprobados(estudiantes));


for(let i=0 ; i<matriz.length ; i++){
    console.log(matriz[i][1]);
}

