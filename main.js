/**
 * @author Alex
 */

//1. Sintaxis spread. Nuevo array
//define el array navegadores con 3 elementos (array de cadenas)

// define la variable navegador con otro navegador (cadena)

//Utiliza la sintaxis spread para crear un nuevo array todosNavegadores que parta
//del array navegadores y coloca  al final el elemento navegador

//muéstralos por consola
console.log("1. Sintaxis spread. Nuevo array---------------------------------------");

const navegadores = ["Chrome", "Firefox", "Edge"];
const navegador = "Safari";

const todosNavegadores = [...navegadores, navegador];
console.log(todosNavegadores);

//2. Sintaxis spread, nuevo objeto, shallow/deep copy
//crea un objeto literal con tu nombre y apellidos. Almacénalo en una variable con tus siglas

//Mediante la sintaxis spread, crea otro objeto nuevo con las propiedades del anterior
//y otras dos nuevas: ies, nacimiento




console.log("2. Sintaxis spread, nuevo objeto, shallow/deep copy-----------------------------");

const AVA = {nombre: "Alejandro", apellidos: "Vaquero Abad", }
const ies = ["IES Gran Capitán"]
ies.push("CES Lope de Vega");
// const AVAnuevo = {...AVA, ies: "IES Gran Capitán", nacimiento: "2001" };
const AVAnuevo = {...AVA, ies, nacimiento: "2001"}
console.log(AVAnuevo); // Shallow copy porque el objeto se modifica dentro del array

//Indica CLARAMENTE si es una shallow copy o deep copy. Compruébalo con un ejemplo



//3. Destructuring como parámetro y cambio de nombre de la variable
//Método getName que toma como parámetro un objeto y muestra por consola el nombre dentro del objeto
/**
 * Muestra por consola la variable name. Cambia el nombre a la variable en el destructuring. 
 * Por defecto muestra "Pepe"
 * @param {object} Objeto que contiene atributo nombre 
 */
function getName({nombre:name="Pepe"} = {}) {
    console.log(`Mi nombre es ${name}`);
}
//función getName-------------------------------------------------
//Invoca con y sin argumentos. El resultado debe ser válido
console.log("3. Destructuring como parámetro y cambio de nombre de la variable-----");


getName(AVAnuevo); 
getName({})
getName()

//4. Operador rest. Extrae nombre
//Parte del objeto anterior. Extrae mediante destructuring y el operador rest el elemento nombre y 
//crea una copia del resto en una nueva variable.

const {nombre, ...resto} = AVAnuevo;
console.log(nombre);
console.log(resto);


console.log("4. Operador rest. Extrae nombre---------------------------------------");


//5. Función arrow
//Crea una función arrow LO MÁS ESCUETA POSIBLE que devuelva si el parámetro es o no par
/**
 * Devuelve si el parámetro es impar
 * @param {number} num 
 * @returns true si es impar; false en otro caso
 */
const esImpar = number => !!(number % 2);


//función esImpar-------------------------------------------------
console.log("5. Función arrow---------------------------------------");



//6. Operador ternario
//Recorre un array de números. Mostrará una cadena con  P si es par y un I si es impar. 
//Usa la función anterior y el operador ternario
// [1, 2, 3, 4, 6, 7, 99]->IPIPPII

console.log("6. Operador ternario---------------------------------------");

let cadena = "";

[1, 2, 3, 4, 6, 7, 99].forEach(element => {
  cadena += esImpar(element) ? "I" : "P";
});

console.log(cadena);

//7. Parámetros predeterminados (default values)
//Crea la función suma que sume dos números. 
//Usa los valores por defecto. El segundo parámetro tomará  un cero como valor predeterminado (valor por defecto)
console.log("7. Parámetros predeterminados (default values)---------------------------------");

const suma = (a, b=0) => a+b;

//Invoca a la función mediante IIFEE. Usa un único argumento

//8. Template literal y modificación sin punto
// Partiendo del objeto creado con anterioridad, mofidica tu apellido todo a mayúsculas. No utilices el operador punto

//Muestra mediante un template literal una cadena con tu nombre y apellido
//Usa el destructuring 

console.log("8. Template literal y modificación sin punto----------------");

AVAnuevo['apellidos'] = AVAnuevo['apellidos'].toUpperCase();
console.log(AVAnuevo);