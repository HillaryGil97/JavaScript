//no se puede exportar algo que no esta implicitamente exportado
import {owners} from '../src/data/heroes.js' //exportamos los owners del archivo exportado
//IMPORTANTE: los achivos que se exportan o importan se ejecutan!!!!

console.log(owners)
//los datos se puedes desestructurar
const [dc, marvel] = owners
console.log(dc,marvel)

//importación explicita
import superHeroes from '../src/data/heroes.js'
console.log(superHeroes)

//Tarea
export const getHeroById = (id) => superHeroes.find(hero => hero.id === id)
console.log(getHeroById(2))

export const getHeroByOwner = (owner) => superHeroes.filter(hero => hero.owner === owner)
console.log(getHeroByOwner('DC'))