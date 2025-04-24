// switch (expresion) {
//     case valor1:
//         // codigo a ejecutar
//         break;
//     case valor2:
//         // codigo a ejecutar
//         break;
//     case valor3:
//         // codigo a ejecutar
//         break;
//     case valor4:
//         // codigo a ejecutar
//         break;
//     default:
//     // codigo a ejecutar
// }


let expr = "Naranjas"

switch (expr) {
    case "Naranjas":
        console.log("Hay 3 naranjas")
    case "Manzanas":
        console.log("Hay 2 Manzanas")
    case "Platanos":
        console.log("Hay 1 Platano")
    case "Mangos":
    case "Peras":
        console.log("Hay 3 Platanos y 3 Mangos")
    default:
        console.log(`No hay ${expr}`)

}