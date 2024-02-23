/* Desenvolva aqui a rotina */
////////////////////////////////////Adicionar onclick no botao
document.getElementById("btn_calcular").setAttribute("onclick", "calculo()");
////////////////////////////////////Adicionar onmouseout nos prompts
document.getElementById("valor_transporte").setAttribute("onmouseout", "calculo()")
document.getElementById("valor_alimentacao").setAttribute("onmouseout", "calculo()")
document.getElementById("valor_receita").setAttribute("onmouseout", "calculo()")
document.getElementById("valor_automovel").setAttribute("onmouseout", "calculo()")
document.getElementById("faltas").setAttribute("onmouseout", "calculo()")

const calculo = () => {
  ////////////////////////////////////Calcular receita
  const valorBase = parseInt(document.getElementById("valor_base").value);

  const valorTransporte = parseInt(
    document.getElementById("valor_transporte").value
  );

  const valorAlimentacao = parseInt(
    document.getElementById("valor_alimentacao").value
  );

  const calculoValor = valorBase + valorTransporte + valorAlimentacao;
  document.getElementById("valor_receita").setAttribute("value", calculoValor);

  ////////////////////////////////////Calcular o desconto
  const descontoAutomovel = parseInt(
    document.getElementById("valor_automovel").value
  );

  const faltas = parseInt(document.getElementById("faltas").value);

  const calculoDesconto = descontoAutomovel + faltas;
  document
    .getElementById("valor_descontos")
    .setAttribute("value", calculoDesconto);

  ////////////////////////////////////Calcular o total
  const total = calculoValor - calculoDesconto;
  document.getElementById("valor_total").setAttribute("value", total);
};
