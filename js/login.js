function compararDatosJson(usuario,contrasenia){
  
  fetch('../js/clientes.json')
   .then(function(respuesta){
       return respuesta.json();

   })
   .then (function(clientes){
       console.log(clientes);
        
       let datosUsuario1JSON = clientes[0].usuario;
       let datosContrasenia1JSON = clientes[0].contra;
       let datosUsuario2JSON = clientes[1].usuario;
       let datosContrasenia2JSON = clientes[1].contra;
       let datosUsuario3JSON = clientes[2].usuario;
       let datosContrasenia3JSON = clientes[2].contra;
       let datosUsuario4JSON = clientes[3].usuario;
       let datosContrasenia4JSON = clientes[3].contra;
       if(usuario==datosUsuario1JSON && contrasenia== datosContrasenia1JSON){
        alert("Has ingresado")
       }else{ if (usuario==datosUsuario2JSON && contrasenia== datosContrasenia2JSON){
        alert("Has ingresado")
       }else{ if (usuario==datosUsuario3JSON && contrasenia== datosContrasenia3JSON){
        alert("Has ingresado")
       }else { if (usuario==datosUsuario4JSON && contrasenia== datosContrasenia4JSON){
        alert("Has ingresado")

       }else { alert("No es un cliente registrado porfavor registrese")
       }}}}
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


