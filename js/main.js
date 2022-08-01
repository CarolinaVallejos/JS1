/*let num1 = 12
let num2 = 21
alert( num1 + num2)
console.log( num1 + num2)
 


let nombreIngresado   = prompt("Ingresar nombre");

if((nombreIngresado == "CARO") || (nombreIngresado =="caro")  || (nombreIngresado == "Caro")){
    alert("El nombre ingresado es Caro"); 
}else{
    alert("Error: El nombre ingresado NO ES Caro"); 
}
*/



// Actividad 1

/*
let edad = prompt("Ingresar edad");
//Repetir con While hasta  "ESC"
while(edad != "ESC" ){
    alert(" Edad Ingresada "+ edad);
    
    edad = prompt("Ingresar edad nuevamente");
}


//Actividad 2:

for ( let i = 1; i <= 25; i++) {
// en cada repetición se pide nombre y apellido de alumno
let IngresarNombre = prompt ("Ingresar Nombre");
let IngresarApellido = prompt ( "Ingresar Apellido");
// Ingresar Asistencia de Clases usando numero de repetición
alert ("Asistencia N°:" + " " +i+" "+ IngresarNombre+" "+ IngresarApellido );
}



// Actividad 3: Switch

let usuario = prompt(" Ingrese usuario");
while(usuario != "ESC" ){
switch (usuario) {
    case "profesores":
        alert("Hola Profesores");
        break;
    case "directores":
        alert("Hola Directores");
        break;
    default:
        alert("Error Usuario");
        break;
    }
    usuario = prompt("Ingresar un usuario válido");
}


 



// Actividad Simulador 1. Ingreso de horas.



    let cantidad1 = parseInt(prompt("Ingresar Cantidad de horas trabajadas"));
    alert("La cantidad de horas trabajadas son = " + cantidad1)
    let horas = 1050
    
    function retorno (){return "cantidad1"}
    const retornoFuncion = retorno()
    
    function horasT () { return "horas"}
    const funcionretorno = horasT ()

    console.log("La cantidad de hs trabajadas son: "+ cantidad1)
    console.log("Pago por hora:" +horas)
    
    
    ////  mutiplicacion
    let resultado = cantidad1 * horas
    console.log ("El monto a pagar es de : " + resultado)


*/

// Actividad Simulador 2

// ingresar préstamo

function cantidad1(){
    let cantidad1 = parseInt(prompt("Ingresar Monto del Préstamo"));
    alert("La cantidad del préstamo es = " + cantidad1)
    return cantidad1
}

//Funcion para ingresar cuotas a pagar
function cuotas1(){
    let cuotas1 = parseInt(prompt("En cuantas cuotas desea abonar el préstamo ? Elija de 1 a 12"));
    alert("Desea pagar el préstamo en " + cuotas1 + " cuotas?")
    return cuotas1
}

//Resultado de funciones
let cantidad = cantidad1()
let cuotas = cuotas1()

//Muestro resultado
console.log("La cantidad total del préstamo es: " + cantidad)
console.log("Las cuotas son:" + cuotas)

//Divido la cant de cuotas
function dividir(dato1, dato2){
   let resultado = dato1 / dato2;
   return resultado
}


let division = dividir(cantidad, cuotas)

//Resultado
console.log("Usted debe pagar " + cuotas + " cuotas de " + division)
    
    

   

    










