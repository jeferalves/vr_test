require_relative '../../Utils/util'

Dado('a string de entrada {string}') do |string|
    @input_string = string
end

E('os marcadores {string}') do |marcadores_string|
    #Divide a string usando a vírguma como delimitador, pega o resultado e tira os espaços em branco do início e fim da string
    @marcadores = marcadores_string.split(",").map(&:strip)
end

Então('a saída esperada é {string}') do |saida_esperada|
    expect(remover_texto(@input_string, @marcadores)).to eq(saida_esperada)
end