//las promesas son parte de java script
//las promesas se utilizan al momento de hacer procesos asincronos como llamdas a servidor o cargar imagenes.
console.log('Inicio')

new Promise ((resolve,reject) =>{

    console.log('Cuerpo de la promesa')
    //resolve('Promesa resuelta')                           ----------> Esto es el cuerpo de la promesa
    reject('Promesa resulta con error')

})
.then(msg => console.log(msg))//envia un mensaje en caso de que la promesa se resuelva
.catch(err => console.log(err))//envia un mensaje en caso de que la promesa no se resuelva

//se puede usar .catch(console.log) porque en este caso err es una función callback, lo mismo para then.
//el cuerpo de la promesa se ejecuta inmediatemente, la resolución de la promesa se resuelve en un hilo diferente
//tanto resolve como reject son funciones
console.log('Fin')