/*
 Arquivo com o mapeamento dos componentes respeitando o padrão POM(Page Object Model)
 */

export const ELEMENTS = {
    botaoCompreOnline: 'button[class="vr-button vr-button--primary"]',
    consentimento: '[data-testid="terms-consent"]',
    modalSegregacaoUsuario: 'div[id="modal-segregacao-usuario"]',
    botaoSelecionarModalidadeAvulso: '#btn-selecionar-modalidade-avulso',
    inputProdutoAutoQuantidade: 'input#produto-auto-quantidade',
    inputProdutoAutoValor: 'input#produto-auto-valor',
    botaoAdicionarCarrinhoAuto: '#btn-adicionar-carrinho-auto',
    botaoMeuCarrinho: '#btn-meu-carrinho',
    carrinhoConteudo: 'aside[class="lojavr-style-c-fiiDNw cart-content-enter-done"]',
    valorProduto: 'div.product-information__value',
    qtdeProtudo: '.product-information__amount',
    Informacaofooter: '.footer__information',
    totalValor: '.information__total-value'
};