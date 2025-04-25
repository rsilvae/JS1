// const greeting = function (name) {
//     return `hi. ${name}`
// }

// const asdf = (name) => {
//     return `hi. ${name}`
// }

// // Arrow function - explicit return

// const newGreetingExplicit = (name) => {
//     return `hi. ${name}`
// }

// Arrow function - implicit return

const newGreetingImplicit = name => `Hi, ${name}`
const newGreetingImplicitWith2Parameters = (name, lastname) => `Hi, ${name} ${lastname}`

// Lexical binding

const fictionalCharacter = {
    name: "Uncle Ben",
    messageWithTradicionalFunction: function (message) {
        console.log(`${this.name} says: ${message}`)
    },
    messageWithArrowFunction: (message) => {
        console.log(`${this.name} says: ${message}`)
    }
}
fictionalCharacter.messageWithTradicionalFunction("Pasta micky")
fictionalCharacter.messageWithArrowFunction("chao")