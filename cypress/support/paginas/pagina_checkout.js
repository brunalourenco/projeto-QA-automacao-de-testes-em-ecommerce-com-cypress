/// <reference types="cypress" />

// variável para armazenar nomes dos campos da página HTML
const elementos = {
  botoes: {
    conferir_compra: "#checkout",
    confirmar_dados_entrega: "#continue",
    concluir_compra: "#finish",
    voltar_para_carrinho: "#cancel",
    gerar_comprovante_pdf: "#generate-pdf-order",
    voltar_para_produtos: "#back-to-products",
  },

  campos: {
    nome: "#first-name",
    sobrenome: "#last-name",
    cep: "#postal-code",
  },

  mensagens: {
    erro_credencias: ".error",
    erro_dados_entrega_faltante: "error-message",
    titulo_compra_concluida: ".complete-header",
    subtitulo_compra_concluida: ".complete-text",
  },
  urls: {
    carrinho: "cart.html",
    dados_entrega: "/checkout-step-one.html",
    completar_checkout: "checkout-step-two.html",
    concluir_compra: "checkout-complete.html",
    produtos: "inventory.html",
  },
};

// ações/métodos/funções

export default {
  preencher_nome(nome) {
    cy.get(elementos.campos.nome).should("be.visible").type(nome);
  },
  preencher_sobrenome(sobrenome) {
    cy.get(elementos.campos.sobrenome).should("be.visible").type(sobrenome);
  },
  preencher_cep(cep) {
    cy.get(elementos.campos.cep).should("be.visible").type(cep);
  },

  conferir_compra() {
    cy.url().should("include", elementos.urls.carrinho);
    cy.get(elementos.botoes.conferir_compra).click();
    cy.url().should("include", elementos.urls.dados_entrega);
  },

  exibir_resumo_compra() {
    cy.get(elementos.botoes.confirmar_dados_entrega).click();
    //cy.url().should("include", elementos.urls.completar_checkout); //estava com erro
  },

  finalizar_compra(titulo, subtitulo) {
    cy.get(elementos.botoes.concluir_compra).click();
    cy.url().should("include", elementos.urls.concluir_compra);
  },

  gerar_comprovante_pdf() {
    cy.get(elementos.botoes.gerar_comprovante_pdf).should("be.visible");
  },

  voltar_para_carrinho() {
    cy.get(elementos.botoes.voltar_para_produtos).click();
    cy.url().should("include", elementos.urls.produtos);
  },
  exibir_mensagem_compra_concluida(titulo, subtitulo) {
    cy.get(elementos.mensagens.titulo_compra_concluida)
      .should("be.visible")
      .and("have.text", titulo);

    cy.get(elementos.mensagens.subtitulo_compra_concluida)
      .should("be.visible")
      .and("have.text", subtitulo);
  },

  exibir_mensagem_erro_credenciais(mensagem) {
    cy.get(elementos.mensagens.erro_credencias)
      .should("be.visible")
      .and("have.text", mensagem);
  },

  exibir_mensagem_erro_carrinho_vazio() {
    cy.get("#cart_contents_container")
      .should("be.visible")
      .and("have.text", "erro_carrinho_vazio");
  },
};
