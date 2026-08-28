/// <reference types="cypress" />

// variável para armazenar nomes dos campos da página HTML
const elementos = {
  botoes: {
    btn_logout: "#react-burger-menu-btn",
  },
  opcao: {
    logout: "#logout_sidebar_link",
  },
  mensagens: {},
};

// ações/métodos/funções

export default {
  logout() {
    cy.get(elementos.botoes.btn_logout).should("be.visible").click();
    cy.get(elementos.opcao.logout)
      .should("be.visible")
      .and("contain", "Logout")
      .click();
    cy.url().should("eq", "https://www.saucedemo.com/");

    // validar se apos o logout ao passar a rota inventory.html redireciona para pagina de produtos
  },
};
