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

function ordenar (lista)
{
  for(i = 0; i < lista.length; i++)
  {
    for(j = 0; j < lista.length - 1; j++)
    {
      if(lista[j].edad > lista[j + 1].edad)
      {
        let aux = lista[j + 1];
        lista[j + 1] = lista[j];
        lista[j] = aux;
      }
    }
  }
  return lista;
}
//console.log(ordenar(personas));

function buscandoBinario(lista, item)
{
  let minimo = 0;
  let maximo = lista.length - 1;
  let listaOrdenada = ordenar(lista);

  while (minimo <= maximo)
  {
    let medio = parseInt((maximo + minimo) / 2);
    let adivinar = listaOrdenada[medio].edad;

    if(adivinar == item)
    {
      return lista[medio];
    }

    if(adivinar > item)
    {
      maximo = medio - 1;
    }
    else
    {
      minimo = medio + 1;
    }
  }
  return null;
}
console.log(buscandoBinario(personas, 25));
    