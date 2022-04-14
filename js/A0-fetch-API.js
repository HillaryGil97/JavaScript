const apiKey = 'cdF0n19aXCUAEEXhxLJXEBde88nxySYK'
//https://api.giphy.com/v1/gifs/random?api_key=cdF0n19aXCUAEEXhxLJXEBde88nxySYK

//fetch es una funcion que nos permite hacer peticiones HTTP de manera sencilla
//fetch responde a una promesa

/* ESTE ES UNA FORMA DE HACER LA PETICIÓN
fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    .then( resp => { //si se resuelve la promesa
        resp.json()
            .then(resp => console.log (resp))
    })

*/

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    .then( resp => resp.json() )
    .then (({data}) => {
        const {url} = data.images.original
        const img = document.createElement('img')
        img.src = url
        document.body.append(img)
        console.log(url)
    })
