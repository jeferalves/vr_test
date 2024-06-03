#language: pt

#Arquivo com as features escritas em Gherkin
Funcionalidade: Validação API VR

    Cenário: Validar que o JSON retornado pelo serviço possui a chave “typeOfEstablishment
        Dado que a API está no ar
        Quando eu fizer uma requisição para esta API
        Então o JSON retornado deve conter a chave "typeOfEstablishment"