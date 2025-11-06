// Plantilla para alumnos - Tema07 Ejercicio 1
// Completa las funciones marcadas con TODO y ejecuta desde el navegador.

// Ejercicio 1 - raizCuadrada (plantilla)
document.getElementById('run-e1').addEventListener('click', function () {
  const v = parseFloat(document.getElementById('a-e1').value);
  const out = document.getElementById('out-e1');
  // TODO: implementar raizCuadrada(numero) 
  // function raizCuadrada(numero) {
  //   return Math.sqrt(numero);
  // }
  const raizCuadrada = (numero) => Math.sqrt(numero);
  let res = raizCuadrada(v);
  if (!isNaN(res)) {
    out.textContent = `Resultado: ${res}`;
  } else {
    document.getElementById("out-e1").innerHTML = "<div class = 'alert alert-danger'>Valor no válido</div>"
  }



});

// Ejercicio 2 - alerta (plantilla)
document.getElementById('run-e2').addEventListener('click', function () {
  const msg = document.getElementById('a-e2').value || 'Mensaje de ejemplo';
  // function alerta(mensaje){
  //   alert(mensaje);
  // }
  const alerta = (mensaje) => alert(mensaje);
  document.getElementById("out-e2").textContent = alerta(msg);
  // document.getElementById('out-e2').textContent = 'Implementa la función alerta(mensaje) para mostrar un alert en el navegador.';
});

// Ejercicio 3 - new Function (plantilla)
document.getElementById('run-e3').addEventListener('click', function () {
  const suma = new Function('a', 'b', 'return a + b;');
  // TODO: usa new Function para construir y ejecutar una función que sume a y b
  let a = Number(document.getElementById("a-e3a").value);
  let b = Number(document.getElementById("a-e3b").value);
  document.getElementById("out-e3").textContent = "El resultado de la suma es: " + suma(a, b);
});

// Ejercicio 4 - Hoisting con let (plantilla)
document.getElementById('run-e4').addEventListener('click', function () {
  // TODO: reproduce el ejemplo en el código editando esta función.
  muestraMensaje(mensaje);
  var mensaje = 'Mensaje de prueba';
  function muestraMensaje(texto) {
    console.log(texto);
  }
  document.getElementById("out-e4").textContent = "JS reordena internamente el código, elevando a var mensaje, sin embargo no eleva el valor asignado a la variable, lo que provoca que no tenga valor asignado al ejecutar."
});

// Ejercicio 5 - IIFE (plantilla)
document.getElementById('run-e5').addEventListener('click', function () {

  // TODO: crea una IIFE que haga console.log y devuelva un valor. Luego muestra el resultado aquí.
  const resultado = (function () {
    console.log("...");
    return 3;
  })();
  document.getElementById("out-e5").textContent = `El valor es: ${resultado}`;
});

// Ejercicio 6 - Función anónima dividir (plantilla)
document.getElementById('run-e6').addEventListener('click', function () {

  // TODO: define y usa esa función para devolver el resultado
  const dividir = function (a, b) {
    if (b != 0) {
      return "El resultado de la división es: " + a / b;
    } else {
      return "Error, indeterminación k/0";
    }
  };
  let a = Number(document.getElementById("a-e6a").value);
  let b = Number(document.getElementById("a-e6b").value);
  document.getElementById("out-e6").textContent =  dividir(a, b);
});

// Ejercicio 7 - Función flecha multiplicar (plantilla)
document.getElementById('run-e7').addEventListener('click', function () {

  // TODO: implementa una función flecha multiplicar = 
  const multiplicar = (a, b) => a * b;
  let a = Number(document.getElementById("a-e7a").value);
  let b = Number(document.getElementById("a-e7b").value);
  document.getElementById("out-e7").textContent = "El resultado de la multiplicación es: " +  multiplicar(a, b);
});

// Ejercicio 8 - Parámetros por defecto (plantilla)
document.getElementById('run-e8').addEventListener('click', function () {

  // TODO: implementar function saludar
  function saludar(nombre = "Invitado"){
    document.getElementById("out-e8").textContent = `Hola, ${nombre}`
  }
  let nombre = document.getElementById("a-e8").value;
  if(nombre === ''){
    saludar();
  }else{
    saludar(nombre);
  }
});

let contador = 0;
// Ejercicio 9 - Funciones anidadas (plantilla)
document.getElementById('run-e9').addEventListener('click', function () {

  // TODO: implementar función externa e interna
  function externa(){
    
    contador ++;
    function interna(){
      return contador;
    }
    return interna();
  }
  document.getElementById("out-e9").textContent = externa();
});

// Ejercicio 10 - Métodos nativos (plantilla)
document.getElementById('run-e10').addEventListener('click', function () {

  // TODO: usa los métodos nativos vistos (length, toUpperCase, trim, indexOf, Math.random, Date.now)
  let textoInput = document.getElementById("a-e10").value;

  let length = textoInput.length;
  let upperCase = textoInput.toUpperCase();
  let trim = textoInput.trim();
  let index = textoInput.indexOf('Mundo');
  let random = Math.random().toFixed(4);
  let date = Date(Date.now().toLocaleString());

  let resultado = `Length: ${length}<br>
  Uppercase: ${upperCase} <br> 
  Trim: ${trim} <br> 
  Index: ${index} <br> 
  Random: ${random} <br> 
  Date: ${date}`;
  document.getElementById("out-e10").innerHTML = resultado;
});
