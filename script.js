var n1 = '';
var n2 = '';
var operador = null;

document.querySelectorAll('.botao').forEach(botao => {
  botao.addEventListener('click', () => {
    const valor = botao.getAttribute('data-valor');

    if (['+', '-', 'x', '/'].includes(valor)) {
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
    } else if (valor === 'C') {
      n1 = '';
      n2 = '';
      operador = null;
    }
    else {
      n1 += valor;
    }
    atualizarTela();
  });
});

function calcular(a, b, operador) {
  a = parseFloat(a);
  b = parseFloat(b);
  switch (operador) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case 'x':
      return a * b;
    case '/':
      return a / b;
  }
}

function atualizarTela() {
  document.getElementById('tela').innerText = n1 || operador || '0';
}
