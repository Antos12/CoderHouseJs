function compararDatosJson(usuario,contrasenia){
  console.log("aca llega");
  fetch('../js/clientes.json')
   .then(function(respuesta){
       return respuesta.json();

   })
   .then (function(clientes){
       console.log(clientes);
        
       let datosUsuario1JSON = clientes[0].usuario;
       let datosContrasenia1JSON = clientes[0].contra;
       console.log(datosUsuario1JSON);
       console.log(datosContrasenia1JSON);
       if (usuario==datosUsuario1JSON && contrasenia== datosContrasenia1JSON){
           alert("Has ingresado")
       } else {
           alert("Los datos ingresados son incorrectos")
       }
      
   })
     
}


/* Traer datos de un formulario de Log In */
$("#boton").click(function (e) {
    e.preventDefault();
    
    let usuario= document.getElementById("usuario").value;
    let contrasenia= document.getElementById("contrasenia").value;
    console.log(usuario);
    console.log(contrasenia);
    compararDatosJson(usuario,contrasenia);
});


