pm.test("Nombre es Víctor", function(){

  let nombre = pm.response.json().nombre;
 
   pm.response.to.have.status(200);
 
 });