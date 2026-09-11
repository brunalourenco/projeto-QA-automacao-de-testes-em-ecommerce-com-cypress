/// <reference types="cypress" />

//import de ações/métodos/funções
import pagina_inicial from "../support/paginas/pagina_inicial";
import login from "../support/paginas/pagina_login";

// import de dados estáticos de login
const usuario = require("../fixtures/dados_usuario.json");
const mensagens = require("../fixtures/mensagens-erro.json");

// Casos de testes
describe("Login", () => {
  beforeEach(() => {
    pagina_inicial.acessar_pagina_inicial();
  });

  it("Login com sucesso", () => {
    login.preencher_nome_usuario(usuario.nome_padrao);
    login.preencher_senha_usuario(usuario.senha_padrao);
    login.efetuar_login();
    login.verificar_pagina_produtos_carregou();
  });

  it("Campo nome de usuário vazio", () => {
    login.preencher_senha_usuario(usuario.senha_padrao);
    login.efetuar_login();
    login.verificar_mensagem_de_erro(mensagens.erro_nome_usuario_vazio);
  });

  it("Campo nome de usuário inválido", () => {
    login.preencher_nome_usuario(usuario.nome_invalido);
    login.preencher_senha_usuario(usuario.nome_padrao);
    login.efetuar_login();
    login.verificar_mensagem_de_erro(
      mensagens.erro_dados_login_nao_cadastrados,
    );
  });

  it("Campo senha vazio", () => {
    login.preencher_nome_usuario(usuario.nome_padrao);
    login.efetuar_login();
    login.verificar_mensagem_de_erro(mensagens.erro_senha_vazia);
  });
});
