let participantes = [
    {
    nombre: "Andres",
    likes: 15
    },
    {
        nombre: "Jorge",
        likes: 18
        },
        {
    nombre: "Andrea",
    likes: 17
    },
    {
        nombre: "Joaquin",
        likes: 22
        },
    {
    nombre: "Laura",
    likes: 30
    },
    {
        nombre: "Juan",
        likes: 33
        },
    {
    nombre: "Lucas",
    likes: 40
    },
    {
        nombre: "Mateo",
        likes: 30
        },
    {
    nombre: "Maria",
    likes: 28
    },
    {
        nombre: "Magdalena",
        likes: 22
        },
    {
    nombre: "Sebastian",
    likes: 15
    },
    {
        nombre: "Esteban",
        likes: 15
        },
    {
    nombre: "Mauro",
    likes: 23
    },
    {
        nombre: "Helena",
        likes: 12
        },
    {
    nombre: "Emma",
    likes: 50
    },
]

//Ejercicio 1
function contarLikes(arreglo){
    for(let i=0; i<arreglo.length; i++){
        for(let j=0; j<arreglo.length -1; j++){
            if(arreglo[j].likes > arreglo[j+1].likes){
                let cambio = arreglo[j];
                arreglo[j]=arreglo[j+1];
                arreglo[j+1]= cambio;
            }
        }
    }

}
contarLikes(participantes);
console.log(participantes);

//Ejercicio 2
let clima = [
    {
        dia: 1,
        mes: 1,
        minima: 5,
        maxima: 22,
    },
    {
        dia: 3,
        mes: 2,
        minima: 20,
        maxima: 27,
    },
    {
        dia: 4,
        mes: 4,
        minima: 17,
        maxima: 30,
    }
]

function ordenarClimaAsc(arreglo){
    for(let i=0; i<arreglo.length; i++){
        for(let j=0; j<arreglo.length -1; j++){
            if(arreglo[j].minima > arreglo[j+1].minima){
                let cambio = arreglo[j];
                arreglo[j]=arreglo[j+1];
                arreglo[j+1]= cambio;
            }
        }
    }

}
ordenarClimaAsc(clima);
console.log(clima);

function ordenarClimaDesc(arreglo){
    for(let i=0; i<arreglo.length; i++){
        for(let j=0; j<arreglo.length -1; j++){
            if(arreglo[j].maxima < arreglo[j+1].maxima){
                let cambio = arreglo[j];
                arreglo[j]=arreglo[j+1];
                arreglo[j+1]= cambio;
            }
        }
    }

}
ordenarClimaDesc(clima);
console.log(clima);