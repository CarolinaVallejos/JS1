// Array
/*

let nombreUsuario = prompt ("Ingresar Nombre");
alert ("El nombre Ingresado es :"+ " " +nombreUsuario)

if (nombreUsuario.length == 0 ) { 
console.log("Ingreso Invalido")
}else{ 
    console.log (nombreUsuario)
 }

let horasTrabajadas = parseInt(prompt("Ingresar Horas"));
alert("Evaluando Horas Ingresadas");

 //Reduce
const registroHoras = [8,10,6,9,12,15,7]
registroHoras.push(horasTrabajadas)
console.log(registroHoras.length)
console.log (registroHoras)
 


const totalHoras = registroHoras.reduce((acumulador, elemento) => acumulador + elemento, 0)

console.log(totalHoras)


// Verificación

while (horasTrabajadas < 0 || isNaN(horasTrabajadas)) {
    alert ("Valor Inválido");
    } horasTrabajadas = prompt ("Ingrese un nuevo valor");
    
    registroHoras.push (horasTrabajadas)
     


//MIN MAX- Horas
console.log( Math.max(...registroHoras ) )   
 
//SORT
const itemsHoras = [...registroHoras];
itemsHoras.sort(function(a, b) {
    return a - b;
  });
  console.log(itemsHoras);

//Date
console.log( new Date() )


// DOM

let contenedor = document.getElementsByTagName("div");
console.log(contenedor[0].innerHTML);
console.log(contenedor[1].innerHTML);
console.log(contenedor[2].innerHTML);

let principal = document.getElementById("principal")
console.log (principal.innerHTML)
// MODIFICO
principal.innerHTML = "Gestión De Tiempo"
console.log (principal.innerHTML)
*/
//EVENTO


let boton = document.getElementById("opcion");
boton.onclick = () => { console.log("Respuesta") };
boton.onmousemove = () => { console.log("Mover") }

// evento teclado y boton submit

let validacion = document.getElementById("formulario");
validacion.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
  e.preventDefault();
  console.log("Formulario Entregado");
}

let campo  = document.getElementById("name")
campo.addEventListener("input", () => {
     console.log(campo.value)
})

