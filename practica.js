
// TODO : DADO EL SIGUIENTE ARREGLO DE MASCOTAS
    //    ORDENARLO DE FORMA DESCENDENTE EN BASE A LA EDAD

    
let mascotas = [
    {
        nombre: "lola",
        edad: 1
    },
    {
        nombre: "jack",
        edad: 2
    },
    {
        nombre: "firulais",
        edad: 4
    },
    {
        nombre: "mora",
        edad: 3
    },
]


let numeros = [12, 1, 3, 15, 7]


//ASCENDENTE
const ordenar = array =>{

    // let aux = undefined
    let aux

    for(let i = 0; i < array.length; i++){

        for(let j = 0; j < array.length - 1; j++ ){

            if( array[j].edad > array[j + 1].edad ){

                aux = array[j]
                array[j] = array[j + 1]
                array[j + 1] = aux

            }

        }

    }

}

ordenar( mascotas )

console.log( mascotas )



// TODO : DADA LA SIGUIENTE MATRIZ REALIZAR LOS SIGUIENTES EJERCICIOS

let matrix = [
    [14, 12, 17, 41],
    [55, 16, 61, 23],
    [13, 22, 13, 32],
    [12, 61, 18, 23],
]


// console.log( matrix[0][3] )
// console.log( matrix[1][2] )
// console.log( matrix[2][1] )
// console.log( matrix[3][0] )

// for ( let i = 0; i < matrix.length; i++ ) {
    
//     console.log(matrix[i][ matrix.length - i - 1 ]) //  [0][3] - [1][2] - [2][1] - [3][0]

// }



// console.log( matrix[0][0] )
// console.log( matrix[1][1] )
// console.log( matrix[2][2] )
// console.log( matrix[3][3] )

// for (let i = 0; i < matrix.length; i++) {
    
//     console.log( matrix[i][i] )

// }

// UN SOLO CICLO FOR =>

// UNA FILA => LE PIDO LA LONGITUD A ESA FILA

// UNA COLUMNA => LE PIDO LA LONGITUD A LA MATRIZ
// DIAGONAL PRINCIPAL => LE PIDO LA LONGITUD A LA MATRIZ
// DIAGONAL SECUNDARIA => LE PIDO LA LONGITUD A LA MATRIZ

// DOBLE FOR
// RECORRER MATRIZ COMPLETA

//TODO 1) CREAR UNA FUNCION QUE RECIBA POR PARAMETRO A LA MATRIZ Y
    //    ADEMAS LA POSICION DE UNA COLUMNA.
    //    NUESTRA FUNCION DEBE REMPLAZAR TOD0S LOS ELEMENTOS DE ESA COLUMNA
    //    POR UN STRING QUE DIGA "hello"

    function recorrerCol(mat, posicionCol){

        let acc = 0

        for(let i = 0; i < mat.length; i++){

            // acc = acc + mat[i][posicionCol]
            acc += mat[i][posicionCol]

        }

        return acc

    }

    let resultado = recorrerCol(matrix, 2 )

    console.log(resultado)


//TODO 2) CREAR UNA FUNCION QUE RECIBA POR PARAMETRO A LA MATRIZ Y
    //    ADEMAS LA POSICION DE UNA FILA.
    //    NUESTRA FUNCION DEBE RETORNAR EL RESULTADO DE MULTIPLICAR
    //    TOD0S LOS ELEMENTOS DE ESA FILA

//TODO 3) CREAR UNA FUNCION QUE RECIBA POR PARAMETRO A LA MATRIZ 
    //    Y RETORNE UN ARREGLO CON TOD0S LOS ELEMENTOS DE LA DIAGONAL SECUNDARIA

    const recorrerDiagonal = mat =>{

        let arr = []

        for (let i = 0; i < mat.length; i++) {
            
            arr.push( mat[i][mat.length - i - 1] )

        }

        return arr

    }

    let arrSecundaria = recorrerDiagonal(matrix)
    console.log( arrSecundaria )

//TODO 4) CREAR UNA FUNCION QUE RECIBA POR PARAMETRO A LA MATRIZ 
    //    Y RETORNE LA SUMA DE TOD0S LOS ELEMENTOS DE LA MATRIZ
    //    TENIENDO EN CUENTA SOLO LOS NUMEROS IMPARES


    let matrix2 = [
        [14, 12, 17, 41],
        [55, 16, 61, 23],
        [13, 22, 13, 32],
        [12, 61, 18, 23],
    ]

    const recorrerMat = mat =>{

        let acc = 0

        for (let i = 0; i < mat.length; i++) {

            for (let j = 0; j < mat[i].length; j++) {
                
                if( mat[i][j] % 2 !== 0 ){
                    acc += mat[i][j]
                }

            }
            
        }

        return acc

    }

    let resultadoMatriz = recorrerMat(matrix2)
    console.log( resultadoMatriz )