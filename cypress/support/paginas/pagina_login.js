/// <reference types="cypress" />

// variável para armazenar nomes dos campos da página HTML
const elementos = {
  botoes: {
    btn_login: "#login-button",
  },
  campos: {
    nome_usuario: "#user-name",
    senha_usuario: "#password",
  },
  mensagens: {
    erro: ".error",
  },
  titulo_pagina: {
    produtos: "Products",
  },
};

// ações/métodos/funções

export default {
  preencher_nome_usuario(nome_usuario) {
    cy.get(elementos.campos.nome_usuario)
      .should("be.visible")
      .clear()
      .type(nome_usuario);
  },

  preencher_senha_usuario(senha_usuario) {
    cy.get(elementos.campos.senha_usuario)
      .should("be.visible")
      .clear()
      .type(senha_usuario);
  },

  efetuar_login() {
    cy.get(elementos.botoes.btn_login).should("be.visible").click();
  },

  verificar_pagina_produto_carregou() {
    cy.url()
      .should("include", "/inventory.html")
      .get(".title")
      .should("have.text", elementos.titulo_pagina.produtos);
  },

  verificar_mensagem_de_erro(mensagem) {
    cy.get(elementos.mensagens.erro)
      .should("be.visible")
      .and("have.text", mensagem);
  },
};
