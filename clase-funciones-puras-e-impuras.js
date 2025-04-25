// funciones puras 




function sum() {
    return a + b
}

function square(x) {
    return x * x
}
function addTen(y) {
    return y + 10
}

// Funcion impura
// Side Effects O condiciones para ser impura xd
// 1. Modificar variebles globales
// 2. Modificar parametros
// 3. Solicitudes HTTP
// 4. Imprimir mensajes en pantalla o en consola
// 5. Manipulacion del DOM
// 6. Obtener la hora actual

function sum() {
    console.log("A: " + a)
    return a + b
}

let total = 0

function sumWithSideEffect() {
    total += a
    return
}
