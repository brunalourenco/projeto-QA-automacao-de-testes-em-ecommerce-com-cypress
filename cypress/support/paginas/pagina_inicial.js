/// <reference types="cypress" />

//ações - métodos - funções

export default {
  acessar_pagina_inicial() {
    (cy.visit("/"),
      //confirma se a página de login carregou
      cy.get(".login_logo").should("be.visible"));
  },
};
