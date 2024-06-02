/*
Arquivo com o passo a passo do teste

É possível alterar os valores do teste no arquivo cypress.env.json para realizar testes com valores diferentes

*/

import telaInicialPage from "../support/pageObjects/tela-inicial.page"

describe('Adicionar produto ao carrinho na loja VR', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
    });

    it('Adicionar o Cartão Auto ao carrinho e conferir os valores', () => {
        const qtde_imput = Cypress.env('qtde_imput');
        const qtde_button = Cypress.env('qtde_button');
        const qtde_tot = String((parseInt(qtde_imput) + parseInt(qtde_button))).padStart(2, '0');
        const valor = Cypress.env('valor').replace(".", ",");

        //Como eu não estava conseguindo navegar entre a tela principal e a tela da loja, optei por dar início ao teste já na tela da loja
        cy.visit('https://loja.vr.com.br/')

        //Fecha a tela de consentimento
        telaInicialPage.fecharTelaConsentimento();

        //Fecha a modal de boas vindas
        telaInicialPage.fecharModalBoasVindas();

        //Seleciona a opção 'Cartões VR'
        telaInicialPage.selecionarModalidadeAvulso();

        //Insere a quantidade do produto 'Auto'
        telaInicialPage.inserirQuantidadeProdutoAuto(qtde_imput);

        //Realiza cliques no botão '+' para incrementar a quantidade
        telaInicialPage.inserirQuantidadeProdutoAutoPlus(qtde_button);

        //Insere o valor do produto 'Auto'
        telaInicialPage.inserirValorProdutoAuto(valor);

        //Clica no botão 'Adicionar ao carrinho'
        telaInicialPage.adicionarAoCarrinho();

        cy.wait(1000);

        //Clica no botão 'Meu Carrinho'
        telaInicialPage.clicarBotaoMeuCarrinho();

        cy.wait(1000);

        //Valida os valores no carrinho
        telaInicialPage.validarValorPorCartao(valor);
        telaInicialPage.validarQuantidadeCartoes(qtde_tot);
        telaInicialPage.validarValorTotal((parseFloat(valor.replace(',', '.')) * parseFloat(qtde_tot)).toFixed(2).replace(".", ","));
    });
});