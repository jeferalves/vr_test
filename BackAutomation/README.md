# Automação BackEnd

Este é um arquivo para demonstrar como instalar e verificar a instalação do Ruby e Bundler, e como executar testes usando Cucumber.

## Pré-requisitos

- Ter o Ruby instalado no seu sistema.
- Ter o Bundler instalado.

## Instalação

### 1. Instalar o Ruby

Se você ainda não tem o Ruby instalado, siga as instruções da [documentação oficial do Ruby](https://www.ruby-lang.org/en/documentation/installation/).

### 2. Verificar a instalação do Ruby

Após instalar o Ruby, verifique se a instalação foi bem-sucedida executando o seguinte comando no terminal:

ruby -v

Você deve ver a versão do Ruby instalada.

### 3. Instalar o Bundler

Com o Ruby instalado, você pode instalar o Bundler executando o seguinte comando:

gem install bundler

### 4. Verificar a instalação do Bundler

Após instalar o Bundler, verifique se a instalação foi bem-sucedida executando o seguinte comando no terminal:

bundle -v

Você deve ver a versão do Bundler instalada.

### 5. Executar o Bundler no diretório do projeto

No diretório raiz do seu projeto, execute o seguinte comando para instalar as dependências especificadas no Gemfile:

bundle install

Obs.: Este comando pode não ser necessário se as dependências já estiverem instaladas.

## Executar Testes

Para executar os testes, na raiz do projeto, execute o comando:

cucumber
