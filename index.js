var primeiroNumero;
var segundoNumero;
var operador;

function insereResultado (valor) {
  document.querySelector('.calc__result span').innerHTML = valor;
}

function reseta () {
  primeiroNumero = null;
  segundoNumero = null;
  operador = null;
}

function calculaResultado () {
  var resultado = 0;
  switch (operador) {
    case '+':
      resultado = primeiroNumero + segundoNumero;
      break;
    case '-':
      resultado = primeiroNumero - segundoNumero;
      break;
    case '*':
      resultado = primeiroNumero * segundoNumero;
      break;
    case '/':
      resultado = primeiroNumero / segundoNumero;
      break;
  }
  reseta();
  insereResultado(resultado);
}

function addValor (valor) {
  if (!operador) {
    primeiroNumero = valor;
    insereResultado(valor);
  } else {
    segundoNumero = valor;
    calculaResultado();
  }
}

function addZero () {
  addValor(0);
}

function addUm () {
  addValor(1);
}

function addDois () {
  addValor(2);
}

function addTres () {
  addValor(3);
}

function addQuatro () {
  addValor(4);
}

function addCinco () {
  addValor(5);
}

function addSeis () {
  addValor(6);
}

function addSete () {
  addValor(7);
}

function addOito () {
  addValor(8);
}

function addNove () {
  addValor(9);
}

function defineOperador (valor) {
  if (!primeiroNumero) {
    alert('Você precisa informar o primeiro valor');
  } else {
    operador = valor;
    insereResultado(primeiroNumero + ' ' + valor)
  }
}

function somar () {
  defineOperador('+');
}

function subtrair () {
  defineOperador('-');
}

function multiplicar () {
  defineOperador('*');
}

function dividir () {
  defineOperador('/');
}
