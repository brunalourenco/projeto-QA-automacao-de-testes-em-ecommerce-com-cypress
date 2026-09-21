/// <reference types="cypress" />

// import de dados estáticos de login
const usuario = require("../fixtures/dados_usuario.json");
const dados_checkout = require("../fixtures/dados_checkout.json");
const mensagens_checkout = require("../fixtures/checkout_mensagens.json");

//import de ações/métodos/funções
import pagina_inicial from "../support/paginas/pagina_inicial";
import login from "../support/paginas/pagina_login";
import carrinho from "../support/paginas/pagina_carrinho";
import checkout from "../support/paginas/pagina_checkout";

describe("Checkout", () => {
  beforeEach(() => {
    pagina_inicial.acessar_pagina_inicial();

    //login com sucesso
    login.preencher_nome_usuario(usuario.nome_padrao);
    login.preencher_senha_usuario(usuario.senha_padrao);
    login.efetuar_login();
    login.verificar_pagina_produto_carregou();

    // adiciona 01 item no carrinho
    carrinho.adicionar_produto(0);
    carrinho.acessar_carrinho();
  });

  it("Compra com sucesso", () => {
    checkout.conferir_compra();
    checkout.preencher_nome(dados_checkout.nome_valido);
    checkout.preencher_sobrenome(dados_checkout.sobrenome_valido);
    checkout.preencher_cep(dados_checkout.cep_valido);
    checkout.exibir_resumo_compra();
    checkout.finalizar_compra();
    checkout.exibir_mensagem_compra_concluida(
      mensagens_checkout.titulo_compra_concluida,
      mensagens_checkout.subtitulo_compra_concluida,
    );
  });

  it("Compra com nome do cliente vazio", () => {
    checkout.conferir_compra();
    checkout.preencher_sobrenome(dados_checkout.sobrenome_valido);
    checkout.preencher_cep(dados_checkout.cep_valido);
    checkout.exibir_resumo_compra();
    checkout.exibir_mensagem_erro_credenciais(
      mensagens_checkout.erro_nome_vazio,
    );
  });

  it("Compra com sobrenome do cliente vazio", () => {
    checkout.conferir_compra();
    checkout.preencher_nome(dados_checkout.nome_valido);
    checkout.preencher_cep(dados_checkout.cep_valido);
    checkout.exibir_resumo_compra();
    checkout.exibir_mensagem_erro_credenciais(
      mensagens_checkout.erro_sobrenome_vazio,
    );
  });

  it("Compra com CEP do cliente vazio", () => {
    checkout.conferir_compra();
    checkout.preencher_nome(dados_checkout.nome_valido);
    checkout.preencher_sobrenome(dados_checkout.sobrenome_valido);
    checkout.exibir_resumo_compra();
    checkout.exibir_mensagem_erro_credenciais(
      mensagens_checkout.erro_cep_vazio,
    );
  });

  it("Cancelar checkout", () => {
    checkout.conferir_compra();
    checkout.preencher_nome(dados_checkout.nome_valido);
    checkout.preencher_sobrenome(dados_checkout.sobrenome_valido);
    checkout.preencher_cep(dados_checkout.cep_valido);
    checkout.exibir_resumo_compra();
    checkout.voltar_para_carrinho();
  });
});
