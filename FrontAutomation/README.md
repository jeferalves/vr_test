## Instalação

### 1. Instalar o Node.js
Se você ainda não tem o Node.js instalado, faça o download e instale a partir do site oficial do Node.js.

### 2. Instalar o Cypress
Abra o prompt de comando e vá até o diretório `FrontAutomation`:

cd caminho/FrontAutomation

Em seguida, instale o Cypress usando o npm:

npm install cypress --save-dev

### 3. Verificar a instalação do Cypress
Para verificar se o Cypress foi instalado corretamente, execute o seguinte comando:

npx cypress --version

## Execução

### 1. Abrir o Cypress
Para abrir a interface do Cypress, execute o comando:

npx cypress open

### 2. Executar os testes
Na interface do Cypress, siga os seguintes passos:
1. Escolha a opção "E2E Testing".
2. Clique na opção "Start E2E Testing".
3. Clique em `test.cy.js` para iniciar os testes.
