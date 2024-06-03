# language: pt

#O objetivo aqui foi fazer com que todos os passos dos cenários fossem reutilizados durante a implementação
#Eu optei por passar os marcadores como uma string e convertê-los em um array, mas isso poderia ser feito de outras formas,
#por exemplo, utilizando uma tabela ou passando a frase como uma expressão regular. Da forma inicial com os colchetes "[", o cucumber não reconhecia como um array.


Funcionalidade: Remover texto

    Cenário: Remover texto quando a frase contém um único marcador
            Dado a string de entrada "bananas, tomates # e ventiladores"
            E os marcadores "#, !"
            Então a saída esperada é "bananas, tomates"


    Cenário: Remover texto quando a frase contém apenas um marcador, mas com mais de um caractere especial
            Dado a string de entrada "o rato roeu a roupa $ do rei % de roma"
            E os marcadores "%, !"
            Então a saída esperada é "o rato roeu a roupa $ do rei"


    Cenário: Remover texto quando a frase contém mais de um marcador
            Dado a string de entrada "The quick brown fox & jumped over * the lazy dog"
            E os marcadores "&, *, %, !"
            Então a saída esperada é "The quick brown fox"