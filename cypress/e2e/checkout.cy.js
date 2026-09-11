/// <reference types="cypress" />

// import de dados estáticos de login
const usuario = require("../fixtures/dados_usuario.json");
const dados_checkout = require("../fixtures/dados_checkout.json");

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
    login.verificar_pagina_produtos_carregou();
  });

  it.only("Compra com carrinho vazio", () => {
    carrinho.acessar_carrinho();
    carrinho.checar_carrinho_vazio();
    checkout.conferir_compra();
    checkout.preencher_nome(dados_checkout.nome_valido);
    checkout.preencher_sobrenome(dados_checkout.sobrenome_valido);
    checkout.preencher_cep(dados_checkout.cep_valido);
    checkout.exibir_resumo_compra();
    checkout.finalizar_compra(
      dados_checkout.titulo_compra_concluida,
      dados_checkout.subtitulo_compra_concluida,
    );
  });

  it("Compra com sucesso", () => {});
  it("Compra com nome do cliente vazio", () => {});
  it("Compra com nome do cliente inválido", () => {});
  it("Compra com sobrenome do cliente vazio", () => {});
  it("Compra com CEP do cliente vazio", () => {});
  it("Compra com CEP do cliente inválido", () => {});
  it("Cancelar checkout", () => {});
});
