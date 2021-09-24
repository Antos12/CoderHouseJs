
/* Esta funcion fija los nombres de los imputs del formulario porque sino cuando ingresar los datos los imputs volvian 
abajo y se tapaban los datos ingresados */

/* Funcion para fijar los campos del formulario */ 
 function fijarCamposFormulario(){
 var inputs = document.getElementsByClassName("formulario_input");
 for(var i=0; i< inputs.length; i++){
    inputs[i].addEventListener('keyup', function(){
       if(this.value.length>=1){
            this.nextElementSibling.classList.add("fijar");
        } else{
            this.nextElementSibling.classList.remove("fijar");
        }
    } );
}
 }



class Usuario {
    constructor (nombre, correo, telefono, mensaje, mensajeExito) {
            this.nombre = nombre;
            this.correo	 = correo;
            this.telefono  = telefono;
            this.mensaje = mensaje;
            this.mensajeExito= this.mensajeExito;
        }
}
/* Muestro los datos almacenados */
function mostrarDatos(){
    var datosAlmacenados= JSON.parse(localStorage.getItem("mensaje"));
    let posicionar = document.getElementById("testingRespuesta")
 
    let i = (datosAlmacenados.length - 1)
    
    let contenedor = document.createElement("div")
    contenedor.setAttribute("id", "contenedor")

    let mensajeExito= document.createElement("p")
    mensajeExito.setAttribute("id","mensajeExito")
    mensajeExito.textContent = `Su mensaje fue enviado con exito`

    let nombre = document.createElement("h3")
    nombre.setAttribute("id", "nombre")
    nombre.textContent = `Nombre: ${datosAlmacenados[i].nombre}`

    let email = document.createElement("p")
    email.setAttribute("id", "email")
    email.textContent = `Email: ${datosAlmacenados[i].correo}`

    let telefono = document.createElement("b")
    telefono.setAttribute("id","telefono")
    telefono.textContent=`Telefono: ${datosAlmacenados[i].telefono}`

    let mensaje = document.createElement("b")
    mensaje.setAttribute("id","mensaje")
    mensaje.textContent =  `Mensaje: ${datosAlmacenados[i].mensaje}` 
    
    
    contenedor.appendChild(mensajeExito)
    contenedor.appendChild(nombre)
    contenedor.appendChild(email)
    contenedor.appendChild(telefono)
    contenedor.appendChild(mensaje)
    posicionar.appendChild(contenedor)
    
    
   
}

/* Obtengo datos del formulario y los guardos en el local Storage */

let arrayMensajes = []

var getData = function(){
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var telefono = document.getElementById("telefono").value;
    var mensaje = document.getElementById("mensaje").value;
    const usuario = new Usuario(nombre, correo, telefono, mensaje)
    console.log(usuario)
    arrayMensajes.push(usuario)
    let mensajeJson= JSON.stringify(arrayMensajes);
    localStorage.setItem("mensaje", mensajeJson);
    console.log(mensajeJson)
    fijarCamposFormulario();
    mostrarDatos();
   
}




