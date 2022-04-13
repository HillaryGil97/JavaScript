//Funciones flecha


/*const saludar = (xyz) => {
    return `Hola ${xyz}`
}*/

// la misma funcione se puede resumir como
const saludar = (xyz) => `Hola ${xyz}`

const nombre = 'Tony'

console.log(saludar(nombre))

////otro ejemplo

const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'Tony001'
    }
}

console.log(getUser())


//TAREA
const heroes = [
    {   id : 1,
        name:'Superman'},
    {   id : 2,
        name: 'Robbin'}]

console.log(heroes)

const existe = heroes.some(( heroe ) => heroe.id === 1)
console.log(existe)

const heroe = heroes.find(( heroe ) => heroe.id === 1)
console.log(heroe.name)