let teclasNumeros
let teclasOperadores
let acumuladorSuma
let listaNumeros=[]

let contenedorNumeros = document.getElementById ('numeros')
let contenedorResultado = document.getElementById('resultado')

function insertarTeclasNumeros()
{
        
   for (let index = 0; index < 9; index++) {
     teclasNumeros = `<div id="btn-${index+1}" class="Tecla-numero"> ${index+1}</div>` 
     contenedorNumeros.innerHTML += (teclasNumeros)
   }          
}
insertarTeclasNumeros()

let btnSumar = document.getElementById('btn-suma')
let btnResta = document.getElementById('btn-resta')
let btnMultiplica = document.getElementById('btn-multiplica')
let btnDivide = document.getElementById('btn-divide')
let btnIgual = document.getElementById('btn-igual')
let teclaBorrar = document.getElementById ('btn-borrar')

let btn_parentesisAbierto = document.getElementById ('btn-parentesisAbierto')
let btn_parentesisCerrado = document.getElementById ('btn-parentesisCerrado')

let numeroUno = document.getElementById ('btn-1')
let numeroDos = document.getElementById ('btn-2')
let numeroTres = document.getElementById ('btn-3')
let numeroCuatro = document.getElementById ('btn-4')
let numeroCinco = document.getElementById ('btn-5')
let numeroSeis = document.getElementById ('btn-6')
let numeroSiete = document.getElementById ('btn-7')
let numeroOcho = document.getElementById ('btn-8')
let numeroNueve = document.getElementById ('btn-9')


numeroUno.addEventListener("click", clicNumeroUno)
numeroDos.addEventListener("click", clicNumeroDos)
numeroTres.addEventListener("click", clicNumeroTres)
numeroCuatro.addEventListener("click", clicNumeroCuatro)
numeroCinco.addEventListener("click", clicNumeroCinco)
numeroSeis.addEventListener("click", clicNumeroSeis)
numeroSiete.addEventListener("click", clicNumeroSiete)
numeroOcho.addEventListener("click", clicNumeroOcho)
numeroNueve.addEventListener("click", clicNumeroNueve)
btn_parentesisAbierto.addEventListener("click", clicParentesisAbierto)
btn_parentesisCerrado.addEventListener("click", clicParentesisCerado)

btnIgual.addEventListener("click", mostrarResultado)
btnSumar.addEventListener("click", sumar)
btnResta.addEventListener("click", resta)
btnMultiplica.addEventListener("click", multiplicar)
btnDivide.addEventListener("click", dividir)
teclaBorrar.addEventListener("click", borrar)

let operaciones = document.getElementById('operaciones')
let acumulador =""
let acumuladorNumber =0
let operacionSumar =0
let operacionResta=0


function clicNumeroUno(){
 operaciones.innerHTML+=("1");
 acumulador+="1"
 acumuladorNumber=Number(acumulador)
 console.log(acumuladorNumber)
 
  
}
function clicNumeroDos(){
  operaciones.innerHTML+=("2");
  acumulador+="2"
  acumuladorNumber=Number(acumulador)
  console.log(acumuladorNumber)
}
function clicNumeroTres(){
  operaciones.innerHTML+=("3");
  acumulador+="3"
  acumuladorNumber=Number(acumulador)
  console.log(acumuladorNumber)
   
 }
 function clicNumeroCuatro(){
   
   operaciones.innerHTML+=("4");
   acumulador+="4"
   acumuladorNumber=Number(acumulador)
   console.log(acumuladorNumber)
 }

 function clicNumeroCinco(){
   
  operaciones.innerHTML+=("5");
  acumulador+="5"
  acumuladorNumber=Number(acumulador)
  console.log(acumuladorNumber)
}
function clicNumeroSeis(){
   
  operaciones.innerHTML+=("6");
  acumulador+="6"
  acumuladorNumber=Number(acumulador)
  console.log(acumuladorNumber)
}
function clicNumeroSiete(){
   
  operaciones.innerHTML+=("7");
  acumulador+="7"
  acumuladorNumber=Number(acumulador)
  console.log(acumuladorNumber)
}
function clicNumeroOcho(){
   
  operaciones.innerHTML+=("8");
  acumulador+="8"
  acumuladorNumber=Number(acumulador)
  console.log(acumuladorNumber)
}
function clicNumeroNueve(){
   
  operaciones.innerHTML+=("9");
  acumulador+="9"
  acumuladorNumber=Number(acumulador)
  console.log(acumuladorNumber)
}


function sumar(){
  operaciones.innerHTML+=("+");
  listaNumeros.push(acumuladorNumber)
  listaNumeros.push("+")
  acumuladorNumber=0
  acumulador=""
  console.log("Boton suma")
  console.log(listaNumeros)
}

function resta(){
  operaciones.innerHTML+=("-");
  listaNumeros.push(acumuladorNumber)
  listaNumeros.push("-")
  acumuladorNumber=0
  acumulador=""
  console.log("Boton resta")
  console.log(listaNumeros)
}
function multiplicar(){
  operaciones.innerHTML+=("*");
  listaNumeros.push(acumuladorNumber)
  listaNumeros.push("*")
  
  acumulador=""
  console.log("Boton multiplica")
  console.log(listaNumeros)

}
function dividir(){
  operaciones.innerHTML+=("/");
  listaNumeros.push(acumuladorNumber)
  listaNumeros.push("/")
  acumuladorNumber=0
  acumulador=""
  console.log("Boton divide")
  console.log(listaNumeros)

}


function clicParentesisAbierto(){
  operaciones.innerHTML+=("(");
  listaNumeros.push(acumuladorNumber)
  listaNumeros.push("*(")
  acumuladorNumber=0
  acumulador=""
  console.log("Parentesis abierto")
  console.log(listaNumeros)

}
function clicParentesisCerado(){
  operaciones.innerHTML+=(")");
  listaNumeros.push(acumuladorNumber)
  listaNumeros.push(")*")
  console.log("Parentecis abierto")
  console.log(listaNumeros)
}


function calculos(){
  let total =0
  
  for (let i = 0; i < listaNumeros.length; i++) {

    total = total + listaNumeros[i]
    
  }
  console.log("total: "+total+ typeof total)
  total = eval(total)
 return total
}
function mostrarResultado(){
  
  contenedorResultado.innerHTML=calculos();
}
function borrar(){
  listaNumeros.length=0
  acumulador=""
  console.log("hiciste clic en borrar")
  operacionSumar=0
  acumuladorNumber=0
  contenedorResultado.innerHTML=""
  operaciones.innerHTML=""
}




