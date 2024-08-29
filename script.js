var n1 = '';
var n2 = '';
var operador = null;

document.querySelectorAll('.botao').forEach(botao => {
  botao.addEventListener('click', () => {
    const valor = botao.getAttribute('data-valor');

    if (['+', '-', 'x', '÷', '%'].includes(valor)) {
      operador = valor;
      n2 = n1;
      n1 = '';
    }
    else if (valor === '=') {
      if (n2 && operador) {
        n1 = calcular(n1, n2, operador);
        operador = null;
        n2 = '';
      }
    } else if (valor === 'AC') {
      n1 = '';
      n2 = '';
      operador = null;
    } else if (valor === '√') {
      operador = valor;
      if (n1 && operador) {
        n1 = calcular(n1, n2, operador);
      }
    } else {
      n1 += valor;
    }
    atualizarTela();
  });
});

function calcular(n1, n2, operador) {
  n1 = parseFloat(n1);
  n2 = parseFloat(n2);
  switch (operador) {
    case '+':
      return n2 + n1;
    case '-':
      return n2 - n1;
    case 'x':
      return n2 * n1;
    case '÷':
      return n2 / n1;
    case '%':
      return (n2 * n1) / 100;
    case '√':
      return Math.sqrt(n1);
  }
}

function atualizarTela() {
  if (n1 == Infinity) {
    document.getElementById('tela').innerText = 'Error';
  } else {
    document.getElementById('tela').innerText = n1 || operador || '0';
  }
}