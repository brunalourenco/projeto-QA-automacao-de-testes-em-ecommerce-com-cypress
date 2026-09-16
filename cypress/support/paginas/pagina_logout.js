/// <reference types="cypress" />

// variável para armazenar nomes dos campos da página HTML
const elementos = {
  botoes: {
    btn_menu: "#react-burger-menu-btn",
  },
  opcao: {
    logout: "#logout_sidebar_link",
  },
  mensagens: {},
};

// ações/métodos/funções

export default {
  encerrar_acesso_aplicacao() {
    cy.get(elementos.botoes.btn_menu).should("be.visible").click();

    cy.get(elementos.opcao.logout)
      .should("be.visible")
      .and("contain", "Logout")
      .click();

    cy.url().should("eq", "https://www.saucedemo.com/"); // verifica se retorna para página de login

    cy.url().should("not.include", "/inventory"); //verifica se não retorna para pagina de produtos
  },
};
