/// <reference types="cypress" />

// import de dados estáticos de login
const usuario = require("../fixtures/dados_usuario.json");
const mensagens = require("../fixtures/mensagens-erro.json");

describe("Checkout", () => {
  it("Compra com carrinho vazio", () => {});

  beforeEach(() => {
    cy.acessar_pagina_inicial();
    cy.preencher_nome_usuario(usuario.nome_padrao);
    cy.preencher_senha_usuario(usuario.senha_padrao);
    cy.efetuar_login();
  });

  it("Compra com sucesso", () => {});
  it("Compra com nome do cliente vazio", () => {});
  it("Compra com nome do cliente inválido", () => {});
  it("Compra com sobrenome do cliente vazio", () => {});
  it("Compra com CEP do cliente vazio", () => {});
  it("Compra com CEP do cliente inválido", () => {});
  it("Cancelar checkout", () => {});
});
