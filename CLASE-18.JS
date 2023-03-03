let numeros = [
	[10, 3, 2, 1, 4, 7],
	[5, 5, 10, 100, 4],
	[5, 125, 10, 1020, 4],
	[5, 5, 5097, 100, 4]
];

/*/**
 * Suma los valores que sean mayores
 * o iguales a 10, pero menor a 1000.
 */
let suma = 0;

function sumaMatriz (Matriznumeros){
    for(i=0 ; i<Matriznumeros.length ; i++){
        for (j=0; j<Matriznumeros[i].length ; j++){
            if (Matriznumeros[i][j] >= 10 && Matriznumeros[i][j] < 1000){
                suma = suma + Matriznumeros[i][j];
            }
        }
    }
    return suma;
}

console.log(sumaMatriz(numeros));
