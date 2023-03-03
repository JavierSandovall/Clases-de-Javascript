/*Si tenemos un array con objetos Persona, las personas tienen nombre, apellido, edad,
estado civil.
El array está ordenado por apellido.
*/

let personas = [
    {
        nombre: 'jairo' ,
        apellido: 'velazque',
        edad: 15,
        estadoCivil: 'soltero',
    },
    {
        nombre: 'rocio' ,
        apellido: 'gomez',
        edad: 13,
        estadoCivil: 'soltero',
    },
    {
        nombre: 'monica' ,
        apellido: 'martinez',
        edad: 31 ,
        estadoCivil: 'soltero',
    },
    {
        nombre: 'juan',
        apellido: 'lob',
        edad: 40,
        estadoCivil: 'casado',
    }, 
    {
        nombre: 'luis',
        apellido: 'lopez',
        edad: 29,
        estadoCivil: 'casado' ,
    }
]

function bubbleSort(array){

    for(let i=0 ; i<array.length ; i++){

        for(let j=0 ; j<array.length - 1 ; j++){

            if(array[j].apellido > array[j+1].apellido ){

                let temporal = array[j];
                array[j] = array[j+1];
                array[j+1] = temporal;
            }
        }
    }
}

bubbleSort(personas);
//console.log(personas);

function busquedaLineal(array,apellidoDado){

    let retorno = "No se ha podido encontrar";

    for(let i=0 ; i<array.length ; i++){

        if(array[i].apellido === apellidoDado){
            retorno = array[i];
        }
    }

    return retorno
}


let rdo = busquedaLineal(personas,"gomez")
console.log(rdo);


function estadoCivil (array, estado){

    let contador=0;

    for(let i=0 ; i<array.length ; i++){

        if(array[i].estadoCivil === estado){

            contador ++;

        }

    }

    return contador;
        
}

let resultado = estadoCivil(personas, "casado");
