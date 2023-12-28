let valorTotal;

limpar();

function adicionar() {
  // Recuperar valores nome do produto, quantidade e valor
  let produto = document.getElementById('produto').value;
  let quantidade = parseInt(document.getElementById('quantidade').value);

  // Verificar se o produto é válido
  if (!produto || isNaN(quantidade) || quantidade <= 0) {
    alert('Por favor, selecione um produto válido e insira uma quantidade válida.');
    return;
  }

  let nomeProduto = produto.split('-')[0];
  let valorUnitario = parseFloat(produto.split('R$')[1]); // Manter o valor como string

  // Verificar se o valorUnitario é um número válido
  if (isNaN(valorUnitario)) {
    alert('Selecione um produto válido.');
    return;
  }

  // Calcular o preço, o nosso subtotal
  let preco = quantidade * valorUnitario;

  // Adicionar no carrinho
  let carrinho = document.getElementById('lista-produtos');
  carrinho.innerHTML +=
    `<section class="carrinho__produtos__produto">
      <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco.toFixed(2)}</span>
    </section>`;

  // Atualizar o valor total
  valorTotal += preco;
  let campoTotal = document.getElementById('valor-total');
  campoTotal.textContent = `R$ ${valorTotal.toFixed(2)}`;

  // Resetar o campo de quantidade
  document.getElementById('quantidade').value = 0;
}

function limpar() {
  // Limpar o carrinho e resetar o valor total
  valorTotal = 0;
  document.getElementById('lista-produtos').innerHTML = '';
  document.getElementById('valor-total').textContent = 'R$ 0';
}
