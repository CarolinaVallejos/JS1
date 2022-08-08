


// Actividad Simulador 1. Ingreso de horas.

/*

let HorasTrabajadas = parseInt(prompt("Ingresar Cantidad de horas trabajadas"));
alert("La cantidad de horas trabajadas son = " + HorasTrabajadas);
while (HorasTrabajadas != "ESC") {

    const horas = 1050

    function retorno() { return "HorasTrabajadas" }
    const retornoFuncion = retorno()

    function horasT() { return "horas" }
    const funcionretorno = horasT()

    console.log("La cantidad de hs trabajadas son: " + HorasTrabajadas)
    console.log("Pago por hora:" + horas)


    ////  mutiplicacion
    const resultado = HorasTrabajadas * horas
    console.log("El monto a pagar es de : " + resultado);
    HorasTrabajadas = prompt ("Ingresar Nueva Cantidad de horas Trabajadas");
}



// Actividad Simulador 2

// ingresar préstamo

function MontoPrestamo(){
    let MontoPrestamo = parseInt(prompt("Ingresar Monto del Préstamo"));
    alert("La cantidad del préstamo es = " + MontoPrestamo)
    return MontoPrestamo
}

//Funcion para ingresar cuotas a pagar
function IngresarCuotas(){
    let IngresarCuotas = parseInt(prompt("En cuantas cuotas desea abonar el préstamo ? Elija de 1 a 12"));
    alert("Desea pagar el préstamo en " + IngresarCuotas + " cuotas?")
    return IngresarCuotas
}

//Resultado de funciones
let cantidad = MontoPrestamo()
let cuotas = IngresarCuotas()

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

*/
// Actividad Complementaria
// Array


let NombreUsuario = prompt ("Ingresar Nombre");
alert ("El nombre Ingresado es :"+ " " +NombreUsuario)

let HorasTrabajadas = parseInt(prompt("Ingresar Horas"));
alert("Horas Ingresadas");


const RegistroHoras = [8,10,6,9,12,15,7]
RegistroHoras.push(HorasTrabajadas)
console.log(RegistroHoras.length)
console.log (RegistroHoras)
 


const totalHoras = RegistroHoras.reduce((acumulador, elemento) => acumulador + elemento, 0)

console.log(totalHoras)











