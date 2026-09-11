/// <reference types="cypress" />

//import de ações/métodos/funções
import pagina_inicial from "../support/paginas/pagina_inicial";
import login from "../support/paginas/pagina_login";
import carrinho from "../support/paginas/pagina_carrinho";

// import de dados estáticos de login
const usuario = require("../fixtures/dados_usuario.json");
const mensagens = require("../fixtures/mensagens-erro.json");

describe("Carrinho", () => {
  beforeEach(() => {
    pagina_inicial.acessar_pagina_inicial();
    login.preencher_nome_usuario(usuario.nome_padrao);
    login.preencher_senha_usuario(usuario.senha_padrao);
    login.efetuar_login();
    login.verificar_pagina_produtos_carregou();
  });

  it("Adicionar 01 produto", () => {
    carrinho.adicionar_produto(0);
    carrinho.checar_quantidade_produto(1);
  });

  it("Adicionar 02 produtos", () => {
    carrinho.adicionar_produto(0);
    carrinho.adicionar_produto(1);
    carrinho.checar_quantidade_produto(2);
  });

  it("Remover 01 produto", () => {
    carrinho.adicionar_produto(0);
    carrinho.checar_quantidade_produto(1);
    carrinho.acessar_carrinho();
    carrinho.remover_produto(0);
  });

  it("Remover 02 produtos", () => {
    carrinho.adicionar_produto(0);
    carrinho.adicionar_produto(1);

    carrinho.checar_quantidade_produto(2);
    carrinho.acessar_carrinho();

    carrinho.remover_produto(0);
    carrinho.checar_quantidade_produto(1);

    carrinho.remover_produto(0);
    carrinho.checar_carrinho_vazio();
  });

  it("Carrinho vazio", () => {
    carrinho.checar_carrinho_vazio();
  });

  it("Continuar comprando", () => {
    carrinho.adicionar_produto(0);
    carrinho.checar_quantidade_produto(1);
    carrinho.continuar_comprando();
  });
});
