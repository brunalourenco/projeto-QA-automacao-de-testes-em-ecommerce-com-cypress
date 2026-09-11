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
  encerrar_acesso_aplicacao() {
    cy.get(elementos.botoes.btn_logout)
      .should("be.visible")
      .click()
      .get(elementos.opcao.logout)
      .should("be.visible")
      .and("contain", "Logout")
      .click()
      .url()
      .should("eq", "https://www.saucedemo.com/");

    // validar se apos o logout ao passar a rota inventory.html redireciona para pagina de produtos
  },
};
