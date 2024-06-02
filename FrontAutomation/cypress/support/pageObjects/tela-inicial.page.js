/*
Arquivo que utiliza os objetos mapeados e adiciona as ações de navegação

Aqui se encontra a implementação das funções que adicionam as quantidades, optei por realizar a ação de adicionar, pelas duas formas disponíveis na página,
a mais simples que somente preenche o imput text e uma forma mais elaborada que realiza a quantidade de clicks passada para o teste

*/

import { ELEMENTS } from '../elements/tela-inicial.elements';

class TelaInicial {


    fecharTelaConsentimento() {
        cy.get(ELEMENTS.consentimento).click();
    }

    fecharModalBoasVindas() {
        cy.get(ELEMENTS.modalSegregacaoUsuario).within(() => {
            cy.get('button.close-button').click();
        });
    }

    selecionarModalidadeAvulso() {
        cy.get(ELEMENTS.botaoSelecionarModalidadeAvulso).click();
    }

    inserirQuantidadeProdutoAuto(quantidade) {
        cy.get(ELEMENTS.inputProdutoAutoQuantidade).type(quantidade);
    }

    inserirValorProdutoAuto(valor) {
        cy.get(ELEMENTS.inputProdutoAutoValor).type(valor);
    }

    //1- Localiza o formulário que contém a imagem com alt="Cartão Auto"
    //2- Verifica se a imagem foi encontrada
    //3- Repetição para realizar a quantidade de cliques desejada
    //4- Clique no botão dentro do formulário encontrado
    inserirQuantidadeProdutoAutoPlus(quantidadeCliques) {
        cy.get('.indvidual-products-page__content > form').find('img[alt="Cartão Auto"]').first().then(($img) => {
            if ($img.length) {
                for (let i = 0; i < quantidadeCliques; i++) {  
                    cy.wrap($img).closest('form').find('button.lojavr-style-c-edUOqw.lojavr-style-c-edUOqw-cZhZjR-variant-primary.plus-button').click();
                }
            }
        });
    }
    
    adicionarAoCarrinho(){
        cy.get(ELEMENTS.botaoAdicionarCarrinhoAuto).click();
    }

    clicarBotaoMeuCarrinho() {
        cy.get(ELEMENTS.botaoMeuCarrinho).click();
    }

    validarValorPorCartao(valor) {
        cy.get(ELEMENTS.carrinhoConteudo).within(() => {
            cy.get(ELEMENTS.valorProduto).should('contain', valor);
        });
    }

    validarQuantidadeCartoes(quantidade) {
        cy.get(ELEMENTS.carrinhoConteudo).within(() => {
            cy.get(ELEMENTS.qtdeProtudo).should('contain', quantidade);
        });
    }

    validarValorTotal(valorTotal) {
        cy.get(ELEMENTS.carrinhoConteudo).within(() => {
            cy.get(ELEMENTS.Informacaofooter).within(() => {
                cy.get(ELEMENTS.totalValor).should('contain', valorTotal);
            });
        });
    }
}

export default new TelaInicial();