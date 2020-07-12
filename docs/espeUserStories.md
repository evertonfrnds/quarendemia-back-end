### UNIVERSIDADE FEDERAL DO RIO GRANDE DO NORTE

### CENTRO DE ENSINO SUPERIOR DO SERIDÓ

### DEPARTAMENTO DE COMPUTAÇÃO E TECNOLOGIA

### CURSO DE BACHARELADO EM SISTEMAS DE INFORMAÇÃO

#### EQUIPE JUREMASTEC SOCIAL

**Douglas Pacelli Maia Baltazar**

**Everton Ankelys Fernandes Bezerra**

**Fernando José dos Santos**

**José Rubens de Oliveira Júnior**

# QUARENDEMIA: Especificação de User Stories

## Documento com a Lista de User Stories

Este documento descreve as seções necessárias para uma especificação de User Story, que também podemos chamar de Especificação de Caso de Uso.

Sumário

Sumário 4
User Story 01 - Manter Usuário 5
Descrição 5
Entradas 5
Saídas 5
Pré-Condições 5
Pós-Condições 6
Fluxo Principal 6
Fluxos Alternativos 6
FA01 – Detalhar 6
FA02 – Incluir 6
FA03 – Alterar 6
FA04 – Excluir 7
Exceções 7
Telas 7
Diagramas 7
Diagrama de Classe do User Story 7
Outros diagramas 7
Referências 7

User Story 01 - Manter Usuário

Atores
Usuário/Admin

Prioridades
Essencial X
Importante
Desejável
Requisitos Envolvidos
[RF001] – Cadastrar Usuário
Ações Associadas
Registrar Usuário
Editar Usuário
Ativar Usuário
Consultar Usuário
Incluir Usuário
Alterar Usuário
Excluir Usuário
Regra de Negócio:
[RN01] – O próprio usuário pode registrar-se.
[RN02] – O usuário ativo pode logar.
[RN03] – O usuário ativo pode editar seus próprios dados.
[RN04] – O usuário admin pode ativar, incluir, alterar, excluir e consultar as usuários.
[RN05] – O email do usuário deve ser único e é seu login.

Descrição

Permite a consulta, inclusão, alteração e exclusão de usuários. As ações desse user story se comportam da seguinte forma:

Consultar Usuário: Ação que realiza a consulta dos Usuários pelo admin.
Ativar Usuário: Ação que realiza a ativação de usuário pelo admin.
Incluir Usuário: Ação que realiza a inclusão de usuário pelo admin.
Alterar Usuário: Ação que realiza a alteração de usuário pelo admin.
Excluir Usuário: Ação que realiza a exclusão de usuário pelo admin.
Registar Usuário: Ação que realiza registro de usuário por ele mesmo.
Editar Usuário: Ação que realiza a edição dos dados do usuário por ele mesmo.

Entradas

Não se aplica.

Saídas

Não se aplica.

Pré-Condições

Não se aplica.

Pós-Condições

Não se aplica.

Fluxo Principal

O sistema exibe a tela de consulta de Usuário com seus filtros [TL001 – Listar Usuário];
O sistema exibe a lista de usuários;
O sistema exibe as opções que o usuário tem direito:
Detalhar [FA01][detalhar usuário]
Incluir [FA02][incluir usuário]
Alterar [FA03][alterar usuário]
Excluir [FA04][excluir usuário]

Fluxos Alternativos

FA01 – Detalhar

O sistema exibe a tela com a lista de usuários [TL001 – Listar Usuário];
O ator clica em detalhar;
O sistema realiza a consulta do Usuário selecionado e exibe seus dados detalhados.

FA02 – Incluir

O ator seleciona a ação incluir;
O sistema abre a tela [TL002 – Incluir Usuário] e solicita os dados do Usuário;
O ator informa os dados do Usuário;
O ator seleciona a opção incluir;
O sistema verifica se os campos obrigatórios foram informados [EX01 – Campos Obrigatórios não informados];
O sistema identifica que esta Usuário ainda não foi cadastrada [RN05];
O sistema realiza a inclusão no banco de dados.
O sistema exibe a mensagem com o texto “Inclusão realizada com sucesso.” [MSG001 – Inclusão realizada com sucesso].
O sistema realiza o Fluxo Principal.

FA03 – Alterar

O ator seleciona a ações alterar;
O sistema exibe a tela de alteração [TL003 - Alterar Usuário];
O sistema recupera e preenche os campos com os dados atuais;
O ator edita os campos e seleciona a opção salvar [RN01, RN02, RN03, RN04];
O sistema verifica se os campos obrigatórios foram informados [EX01 – Campos Obrigatórios não informados];
O sistema realiza a alteração no banco de dados;
O sistema exibe a mensagem com o texto “Alteração realizada com sucesso.” [MSG002 – Alteração realizada com sucesso].
O sistema realiza o Fluxo Principal.

FA04 – Excluir

O ator clica na ação excluir
O sistema solicita a confirmação da exclusão exibindo uma mensagem de aviso na tela atual, com o texto “Confirma a exclusão do Usuário <Nome do Usuário>?” [MSG004 – Confirmação exclusão Usuário].
O sistema exclui a Usuário no banco de dados.
O sistema exibe a mensagem com o texto “Exclusão realizada com sucesso” [MSG003 – Exclusão realizada com sucesso].
O sistema realiza Fluxo Principal.

Exceções

EX01 – Campos Obrigatórios não Informados

Caso não sejam informados os campos obrigatórios o sistema redireciona para uma página de mensagem com o texto “É necessário informar os campos obrigatórios.” [MSG005 – Campo obrigatório não informado].

Telas

Aqui você coloca os desenhos das telas.

[TL001 – Listar Usuário][tl002 – incluir usuário]
[TL003 – Alterar Usuário]

Diagramas

Diagrama de Classe do User Story

Outros diagramas

Referências
[1] Documento de Visão
[2] Documento de Projeto do Sistema
[3] Lista de Regras de Negócio
[4] Lista de Mensagens
