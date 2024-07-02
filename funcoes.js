function cubo(numero) {
  let resultado = numero ** 3;
  return resultado;
}

const f2 = function () {
  console.log("f2");
  return 2;
};

const kubo = numero => numero ** 3;

function circulo(numero) {
  let resultado = Math.PI + numero ** 2 ;
  return resultado;
}

function triangulo(base, altura) {
  let resultado = base * altura / 2;
  return resultado;
}

function retangulo(base, altura) {
  let resultado = base * altura;
  return resultado;
}

function perfeito(numero) {
    if (numero <= 1) {
        return console.log("Não é perfeito");
    }

    let sum = 0;
    for (let i = 1; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            sum += i;
            if (i !== 1 && i !== numero / i) {
                sum += numero / i;
            }
        }
    }

    return sum === numero;
}

module.exports = {
  cubo,
  f2,
  kubo,
  circulo,
  retangulo,
  triangulo,
  perfeito
}
