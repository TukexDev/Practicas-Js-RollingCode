///////////////// Ejercicio 1 /////////////////
// 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
//     Dificultad:  🟢🟡

// let edad = +prompt("Ingresa tu edad");

// if (isNaN(edad)) {
//   document.write("El dato ingresado no corresponde a la edad.");
// } else if (edad >= 18) {
//   document.write("Podes manejar chill");
// } else {
//   document.write("Todavia no podes maneja");
// }

/////////////// Ejercicio 2 //////////////

// 2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

// 0-2: Muy deficiente
// 3-4: Insuficiente
// 5-6: Suficiente
// 7: Bien
// 8-9: Notable
// 10: Sobresaliente

// Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

// Ejemplo:

// Input: 5
// Input: 50
// Input: hola10
// Output: Suficiente
// Output: Número erróneo
// Output: Introduce un número válido


// Dificultad:  🟢🟡

// let nota = +prompt("Ingresa una nota del 0 al 10");

// if (isNaN(nota)) {
//   alert("Ingresa bien la nota");
// } else if (nota < 0 || nota > 10) {
//   alert("El número no corresponde.");
// } else {
//   switch (true) {
//     case (nota >= 0 && nota <= 2):
//       alert("Muy deficiente");
//       break;
//     case (nota >= 3 && nota <= 4):
//       alert("Insuficiente");
//       break;
//     case (nota >= 5 && nota <= 6):
//       alert("Suficiente");
//       break;
//     case (nota === 7):
//       alert("Bien");
//       break;
//     case (nota >= 8 && nota <= 9):
//       alert("Notable");
//       break;
//     case (nota === 10):
//       alert("Sobresaliente");
//       break;
//   }
// }


///////////////// Ejercicio 3 /////////////////

// 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

// Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp
