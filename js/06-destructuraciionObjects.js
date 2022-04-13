const person = {
    name: 'Tony',
    age: 45,
    codeName: 'IronMan'
}

const {age,name,codeName,power = 'No tiene poder'} = person //primer forma de desestructurar

console.log(name, age, codeName, power)

//segunda forma de desestructurar

const createHero = (person) => {
    return{
        id: 3216546542,
        name: person.name,
        age: person.age,
        codeName: person.codeName,
        power: person.power
    }
}

console.log(createHero(person))

//Tarea
//forma 1
const createHero2 = (person) => {
    return{
        id: 3216546542,
        ...person,
        power: 'No tiene poder'
    }
}
//forma2
const createHero3 = (person) => {
    const {name,age,codeName,power}= person
    return{
        id: 3216546542,
        name,
        age,
        codeName,
        power
    }
}

//forma3
const createHero4 = ({name,age,codeName,power}) => {
    return{
        id: 3216546542,
        name,
        age,
        codeName,
        power
    }
}

//forma4 --> función flecha implicita UuU
const createHero5 = ({name,age,codeName,power}) => 
   ({
        id: 3216546542,
        name,
        age,
        codeName,
        power
    })

console.log(createHero5(person))
