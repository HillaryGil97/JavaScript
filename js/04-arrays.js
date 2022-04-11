//ARREGLOS

//recuerda que en los arreglos la posición comienza desde el 0
const arreglo = [1,2,3,4]

console.log(arreglo)
console.log(arreglo[3])

//push se usa para agregar un nuevo valor en el arreglo
arreglo.push(5)
console.log(arreglo)

//los arreglos tambien se pasan por referencia, como los objetos por lo que si se 
//requiere hacer una copia de una arreglo es neceario usar el operador spreed[...]

//Tarea 1

const arr = [1,2,3,4]
arr.push(5)
const arr2 = [...arr]

arr2.push(6)

console.log(arr)
console.log(arr2)

//hay ocaciones en las que no es necesario usar de nuevo spreed ya que existen 
//funciones o metodos con arreglos que te regresan un nuevo arreglo.Ejemplo:

const arreglo3 = arreglo.map(function(n){
    return n * 2
}) 

console.log(arreglo3)