// // Capacidades que tienen las funciones al igual que otros objetos

// // 1. Pasar las funciones como argumentos -> Callback

// function a() { }
// function b(a) { }

// b(a)

// // retornar funciones

// function a() {

//     function b() { }
//     return b

// }

// // asignar funciones a variables -> Expresion de funcion

// const a = function () { }

// // Tener propiedades y metodos

// function a() { }

// const obj = {}

// a.call(obj)

// // Anidar funciones -> Nested functions

// function a() {
//     function b() {
//         function c() {

//         }
//         c()
//     }
//     b()
// }
// a()


const rocket = {
    name: "falcon 9",
    launchMessage: function launchMessage() {
        console.log("Chupalo elon musk")
    }
}
rocket.launchMessage()