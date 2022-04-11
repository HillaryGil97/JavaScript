//formas de trabajar con strings pero mas eficaz

const nombre = 'Hillary'
const apellido = 'Gil'

//const nombreCompleto = nombre + ' ' + apellido // esto esta bien, pero no es funcional

const nombreCompleto = `${nombre} ${apellido}`
console.log(nombreCompleto)

console.log(`Resultado: ${1 + 5}`)

function getSaludo (nombre) {
    return 'Hola ' + nombre 
}

console.log(`Este es un texto: ${getSaludo(nombre)}`)