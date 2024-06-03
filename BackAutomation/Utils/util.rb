#Método que receba dois parâmetros: uma string e um array. Esse método remove todo o texto que vier após qualquer um dos símbolos recebidos no array.

def remover_texto(texto, marcadores)
    marcadores.each do |marcador|
        index = texto.index(marcador)
        if index != nil
            texto = texto.slice(0, index).strip
        end
        
    end
    texto
  end