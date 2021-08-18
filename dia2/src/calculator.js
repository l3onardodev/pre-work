
//first soluction

// function calculadora (callback) {
//   return function(a, b) {
//     return callback(a, b);
//   }
// }

//after thinking a little bit about closure and HOF.
const calculadora = (callback) => (a, b) => callback(a, b);

const sum = calculadora((a, b) => a + b)
const sub = calculadora((a, b) => a - b)
const mult = calculadora((a, b) => a * b)
const div = calculadora((a, b) => a / b)

console.log('Somar 1 e 2 = 3:', sum(1, 2) === 3)
console.log('Subtrair 4 de 20 = 16:', sub(20, 4) === 16)
console.log('Multiplicar 3 com 3 = 9:', mult(3, 3) === 9)
console.log('Dividir 15 por 5 = 3:', div(15, 5) === 3)

//another tests :)
console.log(`Dividir 50 por 10 e multiplicar por 5 === 25?`, mult(div(50, 10), 5) === 25);

console.log(`Dividir 100 por por 20, multiplicar o resultado por 5 e somar com 15 === 40?`, sum(mult(div(100, 20), 5), 15) === 40);
