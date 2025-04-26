/*
 CLOSURE: funciÃ³n que tiene acceso a variables de un Ã¡mbito externo,
 incluso despuÃ©s de que esa funciÃ³n haya terminado de ejecutarse.

 Ãmbito lÃ©xico: cada vez que se declara una funciÃ³n,
 crea su propio Ã¡mbito lÃ©xico, y puede acceder a las variables
 dentro de ese Ã¡mbito y a las variables en Ã¡mbitos superiores.
*/

function outerFunction() {
    let outerVariable = "I am from outer function"

    function innterFunction() {
        console.log(outerVariable)
    }

    return innterFunction
}

const closureExample = outerFunction()
closureExample()

function createCounter() {
    let count = 0

    return function () {
        count++
        console.log(count)
    }
}

const counterA = createCounter()
counterA()
counterA()

const counterB = createCounter()
counterB()

function outer() {
    let message = "Hello, "

    function inner(name) {
        console.log(message + name)
    }

    return inner
}

const closureA = outer()
const closureB = outer()

closureA("Alice")
closureA("Bob")