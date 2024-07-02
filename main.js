const modulo = require("./modulo.js")
const funcao = require("./pasta/modulo2.js")
const numero = require("./pasta/subpasta/inteiro.js")
const f = require("./funcoes.js")

let res = f.cubo(10)
console.log(res)

let res2 = f.kubo(10)
console.log(res2)

f.f2()

let nome = "Roberto"
console.log(nome)

function ola() {
    console.log("Ola")
}

let res3 = f.circulo(8)
console.log(res3)
let res4 = f.triangulo(modulo.base, modulo.altura)
console.log(res4)
let res5 = f.retangulo(7, 9)
console.log(res5)
let res6 = f.perfeito(6)
console.log(res6)
