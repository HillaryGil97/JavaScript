//El tipico Hola mundo para empezar con el pie derecho
console.log("Hola mundo ^^/")

//VARIABLES
/*actualemente ya no es necesario declarar variables con "var", es más común encontrar "const" o "let"

const -> no tiene manera de establecer un valor (int, float, char, etc.) por lo que es más ligera
let -> Si permite cambiar a los que apunta el valor pero solo se usa en caso de modulos o funciones
*/

const nombre   = 'Tony'
const apellido = 'Stark'

console.log(nombre, apellido)

if (true) {
    const nombre = 'Peter'
    console.log(nombre)
    //el buscador siempre va a buscar el valor de la variable en el padre siguiente del
    //la función donde se esta utilizando la variable por lo que es más practico que el archivo
    //busque el valor en todo el archivo.
}

//let se ocupa solo si sabemos que la variable se va a cambiar dentro de la misma función

if (true) {
    let nombre = ''
    nombre = 'Peter'
    console.log(nombre)
}

console.log(nombre)