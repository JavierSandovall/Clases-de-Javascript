let mundial = [
  {
    pais : "argentina",
    mundial : "campeon de mundo",
    anos : 2000,
  },
  {
    pais : "brasil",
    mundial : "campeon del mundo",
    anos : 2006,
  },
  {
    pais : "venezuela",
    mundial : " no es campeon del mundo",
  },
  {
    pais : "colombia",
    mundial : " no es campeon del mundo",
  },
  {
    pais : "francia",
    mundial : "campeon del mundo",
    anos : 2009,
  }
]


// let valorCampeonDelMundo = "colombia";
// const resultado = mundial.find(mundialItem => mundialItem.pais === valorCampeonDelMundo)
// console.log(resultado)
function findPersona(name) {
  for (let i = 0; i < mundial.length; i++) {
    
    if (mundial[i].pais === name ) {
      return mundial[i];
      // console.log('persona encontrada')
      // break;
    }
  }
}

console.log(findPersona("colombia"));


