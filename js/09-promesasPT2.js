import {getHeroById} from './08-importaciones-exportaciones.js'
const getHeroByIdAsync = (id) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            const hero = getHeroById(id)

            if(hero){
                resolve(hero)
            }else{
                reject('Heroe no existe')
            }
        },1000)
    })
}

getHeroByIdAsync(30) //se cambia el argumento de este valor para checar la función
    .then(h => {
        console.log(`El heroe es: ${h.name}`)})
        .catch(console.log)