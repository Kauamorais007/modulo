function cubo(numero) {
  let resultado = numero ** 3;
  return resultado;
}

const f2 = function () {
  console.log("f2");
  return 2;
};

const kubo = numero => numero ** 3;

module.exports = {
  cubo,
  f2,
  kubo
}
