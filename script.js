const valorInicialInput = document.getElementById('valor-inicial');
const porcentagemInput = document.getElementById('porcentagem');
const valorFinalSpan = document.getElementById('valor-final');
const valorRangeSpan = document.getElementById('valor-range');

function calcularValorFinal() {
  const valorInicial = parseFloat(valorInicialInput.value);
  const porcentagem = parseFloat(porcentagemInput.value);
  const valorFinal = valorInicial + (valorInicial * porcentagem / 100);
  valorFinalSpan.textContent = isNaN(valorFinal) ? '' : valorFinal.toFixed(2);
  valorRangeSpan.textContent = porcentagem; // Atualiza o valor do span
}

valorInicialInput.addEventListener('input', calcularValorFinal);
porcentagemInput.addEventListener('input', calcularValorFinal);

calcularValorFinal(); // Calcular valor inicial
