/*
### Celsius em fahrenheit

Crie uma função que converta celsius em fahrenheit e
vice-versa.

C = (F - 32) / 1.8
F = C * 1.8 + 32

*/

let celsius
let fahrenheit

function calculateF(celsius) {
    fahrenheit = celsius * 1.8 + 32
    console.log(celsius + "°C equivalem a " + fahrenheit.toFixed(1) + "°F")
    return fahrenheit 
}

function calculateC(fahrenheit) {
    celsius = (fahrenheit - 32) / 1.8
    console.log(fahrenheit + "°F equivalem a " + celsius.toFixed(1) + "°C")
    return celsius
}


calculateF(30)
calculateF(15)
calculateF(-8)
calculateF(40)
calculateF(100)

calculateC(100)
calculateC(110)
calculateC(70)
calculateC(30)
calculateC(0)

