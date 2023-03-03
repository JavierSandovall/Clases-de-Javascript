let personas = [
  {
  id: 1,
  nombre: "Ale",
  edad: 15
  },
  {
  id: 2,
  nombre: "Javi",
  edad: 83
  },
  {
  id: 3,
  nombre: "Luis",
  edad: 26
  },
  {
  id: 4,
  nombre: "Dan",
  edad: 16
  },
  {
  id: 5,
  nombre: "Tito",
  edad: 22
  },
  {
  id: 6,
  nombre: "Marina",
  edad: 76
  },
  {
  id: 7,
  nombre: "Susy",
  edad: 35
  },
  {
  id: 8,
  nombre: "John",
  edad: 25
  },
  ]

  function bubbleSort(array){

    for(let i=0 ; i<array.length ; i++){

        for(let j=0 ; j<array.length - 1 ; j++){

            if(array[j].edad > array[j+1].edad ){

                let temporal = array[j];
                array[j] = array[j+1];
                array[j+1] = temporal;
            }
        }
    }
}

bubbleSort(personas);
console.log(personas);

function busquedaLineal(array,iddado){

  let retorno = "No se ha podido encontrar";

  for(let i=0 ; i<array.length ; i++){

      if(array[i].id == iddado){
          retorno = array[i];
      }
  }

  return retorno
}


let rdo = busquedaLineal(personas,"2")
console.log(rdo);