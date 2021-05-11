let ultimoPrimero = require("./funcion")
let primeroUltimo = require("./funcion2")

primeroUltimo(array1())
ultimoPrimero(array10())

function array1(){
    let array10 = []
    for(let i = 0; i<10; i++){
        array10.push(i)
    }
    return array10
}