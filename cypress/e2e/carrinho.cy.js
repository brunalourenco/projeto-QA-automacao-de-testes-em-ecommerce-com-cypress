/// <reference types="cypress" />

//import de ações/métodos/funções
import pagina_inicial from "../support/paginas/pagina_inicial";
import login from "../support/paginas/pagina_login";
import carrinho from "../support/paginas/pagina_carrinho";

// import de dados estáticos de login
const usuario = require("../fixtures/dados_usuario.json");
const mensagens = require("../fixtures/mensagens-erro.json");

describe("Carrinho", () => {
  beforeEach(() => {
    pagina_inicial.acessar_pagina_inicial();
    login.preencher_nome_usuario(usuario.nome_padrao);
    login.preencher_senha_usuario(usuario.senha_padrao);
    login.efetuar_login();
    login.verificar_url_pagina_produtos();
    login.verificar_pagina_produtos_carregou();
  });

  it("Adicionar 01 produto", () => {
    carrinho.adicionar_produto(0);
    carrinho.checar_quantidade_produto(1);
  });

  it("Adicionar 02 produtos", () => {
    (carrinho.adicionar_produto(0),
      carrinho.adicionar_produto(1),
      carrinho.checar_quantidade_produto(2));
  });

  it("Remover 01 produto", () => {
    cy.get(".btn_inventory").first().click();
    cy.get(".shopping_cart_link").click();
    cy.get(".cart_button").click(); //remove item
    cy.get(".shopping_cart_badge").should("not.exist"); //validada se a qtde produtos aparece no icone do carrinho
  });

  it("Remover 02 produtos", () => {});

  it("Carrinho vazio", () => {});

  it("Continuar comprando", () => {
    cy.get(".btn_inventory").first().click();
    cy.get(".shopping_cart_badge ").should("have.text", "1");
    cy.get(".shopping_cart_link").click();
    cy.get("#continue-shopping").click();
  });
});
