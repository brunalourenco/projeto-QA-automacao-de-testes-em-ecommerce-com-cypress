/// <reference types="cypress" />

// variável para armazenar nomes dos campos da página HTML
const elementos = {
  botoes: {
    adicionar_ao_carrinho: ".btn_inventory",
    carrinho: ".shopping_cart_link",
    continuar_comprando: "#continue-shopping",
    remover_produto: 'button[id^="remove-"]',
  },

  campos: {
    quantidade_carrinho: ".shopping_cart_badge",
    item_carrinho: ".cart_item",
    nome_produto: ".inventory_item_name",
  },
};

// ações/métodos/funções

export default {
  adicionar_produto(indice_produto) {
    cy.get(elementos.botoes.adicionar_ao_carrinho).eq(indice_produto).click();
  },

  checar_quantidade_produto(quantidade_produto) {
    cy.get(elementos.campos.quantidade_carrinho).should(
      "have.text",
      quantidade_produto,
    );
  },

  acessar_carrinho() {
    cy.get(elementos.botoes.carrinho).click();
    cy.url().should("include", "/cart.html");
  },

  remover_produto(indice_produto) {
    cy.get(elementos.campos.item_carrinho)
      .eq(indice_produto)
      .find(elementos.botoes.remover_produto)
      .click();
  },

  checar_carrinho_vazio() {
    cy.get(elementos.campos.quantidade_carrinho).should("not.exist");
  },

  continuar_comprando() {
    cy.get(elementos.botoes.carrinho).click();
    cy.get(elementos.botoes.continuar_comprando).click();
  },
};
