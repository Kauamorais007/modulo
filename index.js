const modulo = require("./modulo.js")
const funcao = require("./pasta/modulo2.js")
const numero = require("./pasta/subpasta/inteiro.js")
const f = require("./funcoes.js")
console.log('Digite um numero para descobrir se ele é perfeito')
process.stdin.on('data', function (data){
    let numero = Number(data.toString().trim())

    let res6 = f.perfeito(numero)
console.log(res6)
process.exit

})

