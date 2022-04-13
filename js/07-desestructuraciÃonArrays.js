// la diferencia de la desestructuración de array con la de objetos es que el orden si importa

const characters = ['Goku','Vegetta','Trunks','Goten']

const goku = characters[0]
const vegetta =characters[1]
const trunks = characters[2]

console.log(goku,vegetta,trunks) 

//eso es muy tardado y molesto, seria mejor:

const [g,v,t,got='No tiene valor'] = characters // en el caso de que goten no exista, se le podra añadir un valor por defoult
console.log(g,v,t,got)

const returnArray = () =>{
    return ['ABC',123]
}

const [letters,numbers]=returnArray()
console.log(letters,numbers)
