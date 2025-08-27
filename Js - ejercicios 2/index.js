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


// let cadena = "";
// let texto;

// do {
//   texto = prompt("Ingresa texto, al finalizar presiona Cancelar para salir.)");

//   if (texto !== null) {   //para arrancar cuando exista un valor que no sea nul
//     if (cadena === "") {   //inicio la variable cadena = al texto que se ingresa
//       cadena = texto;
//     } else {
//       cadena += "-" + texto; //A partir de la segunda vuelta, los txtos se suman con el guion.
//     }
//   }

// } while (texto !== null); //para que siga el programa hasta que no se pulse cancelar

// if (cadena !== "") {
//   document.write(cadena);
// } else {
//   document.write("No se ingresó ninguna cadena.");
// } 

///////////////// Ejercicio 4 /////////////////

//  4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos. //     Dificultad:  🟢🟡🔴

// let sumaTotal = 0;       // Para acumular la suma de los números
// let numero;         // los numeros que se ingresen por el prompt

// do {
//   numero = prompt("Ingresa un número para sumar, presiona Cancelar para salir.");

//   if (numero !== null) { // Como el ejercicio 3, para iniciar con un valor distinto a null
//     numero = Number(numero); // problemas para usar +prompt porque lo convierte automaticamente en numero y nunca se convierte en null. Se toma el numero y se lo convierte.

//     if (isNaN(numero)) {    // se valida el numero
//       alert("No es un numero mi rey.");
//     } else {
//       sumaTotal+= numero;       // Si es válido se suma
//     }
//   }

// } while (numero !== null); // Repite hasta que se pulse cancelar

// document.write("La suma total es: " + sumaTotal);

///////////////// Ejercicio 5 /////////////////

//  5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).
    
//     El algoritmo para calcular la letra del dni es el siguiente :
    
//     El número debe ser entre 0 y 99999999
//     Debemos calcular el resto de la división entera entre el número y el número 23.
//     Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
//     Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
//     Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».
//     Ejemplo: 
//     Input:  40773821 
//     Output: ‘L’
//     Dificultad:  🟢🟡
// --------------------------------

// let input = prompt("Ingrese un número del 0 a 99999999, presionar Cancelar para salir")

// while(input !== null){
//     const dni = Number (input);
//     if(!isNaN(dni) && dni >= 0 && dni <= 99999999){
//         const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
//         const letra = letras.charAt (dni % 23);
//         alert(`la letra correspondiente al dni ingresado es: ${letra}`);
//     } else {
//         alert("El número ingresado no es válido debe ser dentro de los rangos mencionados.");
//     }
//     dni = prompt("Ingrese un nuevo DNI, presionar Cancelar para salir");
// }

// document.write("Fin del programa");

///////////////// Ejercicio 6 /////////////////



///////////////// Ejercicio 9 /////////////////

//9- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal.

// for (let i = 1; i <= 500; i++) {
//   if (i % 4 === 0) {
//     document.write(`<p>${i} (es multiplo de 4)</p>`);
//   } else if (i % 9 === 0) {
//     document.write(`<p>${i} (es multiplo de 9)</p>`);
//   }
//   if (i % 5 === 0) {
//     document.write(`<p>${i}</p>`);
//     document.write(`<p>---------------------------------------------</p>`);
//   } else {
//     document.write(`<p>${i}</p>`);
//   }
// }
