/// <reference types="cypress" />

// variável para armazenar nomes dos campos da página HTML
const elementos = {
  botoes: { adicionar_ao_carrinho: ".btn btn_primary" },
  campos: { nome_produto: ".inventory_item_name" },
  mensagens: {},
};

// ações/métodos/funções

export default {
  adicionar_produto(indice_produto) {
    cy.get(".btn_inventory").eq(indice_produto).click();
  },

  checar_quantidade_produto(quantidade_produto) {
    cy.get(".shopping_cart_badge ").should("have.text", quantidade_produto);
  },

  remover_produto(indice_produto) {
    cy.get(".cart_button").click(); //remove item
    //validada se a qtde produtos aparece no icone do carrinho}
    cy.get(".shopping_cart_badge").should("not.exist");
  },

  continuar_comprando() {
    cy.get(".shopping_cart_link").click();
    cy.get("#continue-shopping").click();
  },
};
