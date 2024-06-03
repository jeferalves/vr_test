require 'httparty'
require 'json'
require 'rspec/expectations'

#Implementação das features
Dado('que a API está no ar') do
    @endpoint = 'https://portal.vr.com.br/api-web/comum/enumerations/VRPAT'
end

Quando('eu fizer uma requisição para esta API') do
    @response = HTTParty.get(@endpoint)
end

Então('o JSON retornado deve conter a chave {string}') do |chave|
    json = JSON.parse(@response.body)
    expect(json).to have_key(chave)

    #Verifica se chave é um array e não está vazia
    typeOfEstablishment = json[chave]
    expect(typeOfEstablishment).to be_an(Array)
    expect(typeOfEstablishment).not_to be_empty
  
    #Imprimir aleatoriamente uma das chaves encontradas dentro de typeOfEstablishment
    chaveRandom = typeOfEstablishment.sample
    puts "Chave aleatória #{chave}: #{chaveRandom}"
end