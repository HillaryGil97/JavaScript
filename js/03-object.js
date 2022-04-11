//Objetos literales, tambien conocidos como diccionarios o mapas

//mucho ojo, no es lo mismo un objeto a un set
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 57000,
        lat:20.3696,
        lng: 89.8752
    }
}

console.log(persona)

//los objetos en el JS son pasados por referencia, no por valor

const persona2 = persona
persona2.nombre = 'Peter'

console.log(persona)
console.log(persona2)

//Aqui lo que esta pasando es que persona2 esta apuntando al mismo espacio de memoria que persona
//por lo que cualquier cambio que surja en alguno ocurrira en el otro

const persona3 = {...persona} //...operador spreed
persona3.nombre = 'Morgan'

console.log(persona3)