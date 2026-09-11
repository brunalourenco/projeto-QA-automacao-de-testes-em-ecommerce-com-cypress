/// <reference types="cypress" />

//import de ações/métodos/funções
import pagina_inicial from "../support/paginas/pagina_inicial";
import login from "../support/paginas/pagina_login";
import logout from "../support/paginas/pagina_logout";

// import de dados estáticos de login
const usuario = require("../fixtures/dados_usuario.json");
const mensagens = require("../fixtures/mensagens-erro.json");

describe("Logout", () => {
  it("Encerrar acesso à área logada", () => {
    // Login com sucesso
    pagina_inicial.acessar_pagina_inicial();
    login.preencher_nome_usuario(usuario.nome_padrao);
    login.preencher_senha_usuario(usuario.senha_padrao);
    login.efetuar_login();
    login.verificar_pagina_produtos_carregou();

    // Logout
    logout.encerrar_acesso_aplicacao();
  });
});
