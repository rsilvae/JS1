console.log("inicio")

const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        let operationSuccessful = false
        if (operationSuccessful) {
            resolve("La operacion fue un exito")
        } else {
            reject("Fallo la operacion")
        }
    }, 2000)
})
console.log("1")
promesa
    .then((successMessage) => {
        console.log(successMessage)
    })
console.log("2")
promesa
    .catch((errorMessage) => {
        console.log(errorMessage)
    })

console.log("3")