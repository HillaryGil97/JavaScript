console.log('Inicio')

new Promise ((resolve,reject) =>{

    console.log('Cuerpo de la promesa')
    //resolve('Promesa resuelta')
    reject('Promesa resulta con error')

})
.then(msg => console.log(msg))
.catch(err => console.log(err))
//el cuerpo de la promesa se ejecuta inmediatemente, la resolución de la promesa se resuelve en un hilo diferente
//tanto resolve como reject son funciones
console.log('Fin')