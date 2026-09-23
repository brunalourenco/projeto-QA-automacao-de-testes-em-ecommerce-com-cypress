# Projeto QA - Automação de testes e2e em e-commerce com Cypress

# Objetivo

Projeto pessoal de QA voltado para testes manuais, funcionais e exploratórios e automatizados E2E utilizando Cypress em uma aplicação de e-commerce (Sauce Demo). Totalizando 25 casos de testes e 04 bugs encontrados.

O objetivo é validar os principais fluxos de uma loja virtual, identificar defeitos e demonstrar a automação dos cenários mais relevantes.

Para isso, foram testados os fluxos de login, logout, carrinho, produto e checkout e sendo desconsideradas ordenação de produtos por nome, por preço e também a validação de valores de produtos no carrinho.

## Métricas do projeto por técnica de testes

|Descrição   |  Manual  | Automatizado |
| ------------- | :------: | :----------: |
|Funcionalidades testadas   | 05   |    04     |
|Bugs encontrados | 04|  00|
|Casos de teste    |    25    |      21      |
| Cobertura de testes| 100% |   84%    |


## Estrutura do projeto

![Estrutura do projeto](./docs/imagens/estrutura/estrutura-projeto.png)

## Tecnologias utilizadas

- Cypress
- Node JS
- Excel
- VS Code
- Gitub
- Screen to gif

## Funcionalidades testadas por técnica de teste

| Cenário       |  Manual  | Automatizado |
| ------------- | :------: | :----------: |
| Login         |    ✅    |      ✅      |
| Carrinho      |    ✅    |      ✅      |
| Checkout      |    ✅    |      ✅      |
| Logout        |    ✅    |      ✅      |
| Produto       |    ✅    |      ❌      |
| Total   |  **05**   |    **04**     |


## Recursos utilizados

- Funções
- Fixtures
- Assertions
- beforeEach()
- Relatório mochawasome
- Testes positivos e negativos
- Testes BVA para validação de carrinho e CEP

## Artefatos produzidos

- [Estratégia de testes](./docs/estrategia.md) -> definição de abordagem, escopo e critérios de teste
- [Casos de teste](./docs/casos%20de%20testes/) ->cenários documentados em formato estruturado
- [Bug reports](./docs/bug%20report/) -> registro de defeitos encontrados durante execução dos testes
- [Automações](./cypress/e2e/) -> scripts em cypress
- [Evidências](./docs/evidencias/) -> imagens de testes executados <br><br>


## Como executar o projeto

Na pasta do projeto com o terminal aberto

- Para rodar o Cypress, instale o Node JS com o comando ``npm install``
- Como as dependências já foram configuradas anteriormente, não é necessário instalar o cypress
- Para abrir o cypress digite `npx cypress open`
- Irá abrir a tela de navegação do Cypress, utilizada para visualizar a execução dos testes e status.

## Execução dos testes automatizados - vídeo

![Vídeo de execução de testes automatizados](./docs/video/Projeto-QA-Ecommerce-testes-automatizados.gif) <br><br>

## Prints do projeto

#### Casos de teste

![Casos de teste](./docs/imagens/casos%20de%20teste/casos%20de%20testes.png) <br><br>

#### Testes automatizados de funcionalidades
**Login**
![Login](./docs/imagens/codigo/login.png) <br>
**Carrinho**
![Carrinho](./docs/imagens/codigo/carrinho.png) <br>
**Checkout**
![Checkout](./docs/imagens/codigo/checkout.png) <br>
**Logout**
![Logout](./docs/imagens/codigo/logout.png) <br><br>

#### Relatório Mochawasome (testes automatizados)
![Relatório de testes automatizados](./docs/imagens/relatorio/reports.png) <br><br>

#### Bug Report

![Bug report](./docs/imagens/relatorio/bug-report.png) <br><br>
