# Projeto QA - Automação de testes e2e em e-commerce com Cypress

# Objetivo

Avaliar o comportamento do ecommerce Sauce Demo, que é uma aplicação gratuita para testes.

## Estrutura do projeto

## Tecnologias utilizadas

- Cypress
- JavaScript
- Node.js
- Excel
- VS Code
- Gitub
- Screen to gif

## Cenários testados por tipo de técnica

| Cenário   | Manual | Automatizado |
| --------- | :----: | :----------: |
| Login     |   ✅   |      ✅      |
| Carrinho  |   ✅   |      ✅      |
| Checkout  |   ✅   |      ✅      |
| Logout    |   ✅   |      ✅      |
| Produto   |   ✅   |      ❌      |
| **Total** | **5**  |    **4**     |

## Recursos utilizados

- Funções
- Fixtures
- Assertions
- beforeEach()
- Relatório mochawasome
- Testes positivos e negativos

## Métricas do projeto

- Casos de teste criados: 25
- Bugs encontrados: 04
- Funcionalidades testadas: 05
- Tipo de testes: Manual / Exploratório / Automatizado / E2E

---

Casos de testes automatizados: 21
Funcionalidades automatizadas: 04

## Artefatos produzidos

Estratégia de testes -> definição de abordagem, escopo e critérios de teste
Casos de teste ->cenários documentados em formato estruturado
Bug reports -> registro de defeitos encontrados durante execução dos testes
Automações -> scripts em cypress
Evidências -> imagens de testes executados

## Como executar o projeto

- É necessário instalar o Node JS no pc, porque é ele quem gerencia e roda o Cypress
- Na pasta do Projeto, no terminal do VS Code, inicie o Node JS com o comando `npm init -y`
- Após instalar o pacote do Cypress, com ``npm install cypress`
- Para abrir digitenpx cypress open `npx cypress open`
- Irá abrir a tela de navegação do Cypress, utilizada para visualizar a execução dos testes e status.
