### UNIVERSIDADE FEDERAL DO RIO GRANDE DO NORTE

### CENTRO DE ENSINO SUPERIOR DO SERIDÓ

### DEPARTAMENTO DE COMPUTAÇÃO E TECNOLOGIA

### CURSO DE BACHARELADO EM SISTEMAS DE INFORMAÇÃO

**Douglas Pacelli Maia Baltazar**
**Everton Ankelys Fernandes Bezerra**
**Fernando José dos Santos**
**José Rubens de Oliveira Júnior**

# Quarendemia: Documento de Visão

## 1. Introdução

### 1.1 Propósito do documento de requisitos

Este documento visa a apresentação do sistema **Quarendemia** produzido pela equipe **JuremasTEC Social**. Este documento contém todos os requisitos bem como seu escopo e demais informações relevantes para a implementação deste projeto.

### 1.2 Escopo do Produto

O Sistema Quarendemia foi criado para ajudar na administração de uma academia, com funcionalidades relevantes para o administrador, facilitando o controle de fluxo de clientes e a contabilidade da empresa.

## 2. Descrição Geral

### 2.1 Requisitos Funcionais

| Requisito                                              | Descrição                                                     | Ator                                                    |
| ------------------------------------------------------ | ------------------------------------------------------------- | ------------------------------------------------------- |
| RF01 - Cadastrar usuários                              | Requisito para a criação de usuários.                         | Administrador                                           |
| RF02 - Atualizar dados do usuário                      | Requisito para atualizar dados sobre o Usuário.               | Administrador ou Gerente (limitado)                     |
| RF03 - Excluir o usuário;                              | Requisito de exclusão de um Usuário.                          | Administrador                                           |
| RF04 - Ver dados do usuário                            | Requisito para exibir os dados do Usuário.                    | Administrador ou Gerente (pode ver seus próprios dados) |
| RF05 - Realizar login                                  | Requisito para realizar login no sistema.                     | Administrador ou Gerente                                |
| RF06 - Recuperar senha do usuário                      | Requisito para recuperar senha de um Usuário                  | Administrador ou Gerente                                |
| RF07 - Cadastrar planos                                | Requisito para a criação de planos no sistema.                | Gerente                                                 |
| RF08 - Exibir planos                                   | Requisito para exibir os dados dos planos.                    | Gerente                                                 |
| RF09 - Atualizar planos                                | Requisito para atualizar dados sobre os Planos.               | Gerente                                                 |
| RF10 - Excluir planos                                  | Requisito de exclusão de um Plano.                            | Gerente                                                 |
| RF11 - Cadastro de clientes                            | Requisito para a criação de clientes.                         | Gerente                                                 |
| RF12 - Atualização de clientes                         | Requisito para atualizar dados sobre os clientes.             | Gerente                                                 |
| RF13 - Exclusão de clientes                            | Requisito de exclusão de um Cliente.                          | Gerente                                                 |
| RF14 - Visualização de clientes                        | Requisito para exibir os dados de Clientes.                   | Gerente                                                 |
| RF15 - Visualização de clientes que devem pagar no mês | Requisito para exibir os clientes que devem pagar no Mês.     | Gerente                                                 |
| RF16 - Confirmação de pagamentos do mês                | Requisito para cadastrar o pagamento de um Cliente.           | Gerente                                                 |
| RF17 - Visualização de pagamentos atrasados            | Requisito para exibir os clientes com débitos.                | Gerente                                                 |
| RF18 - Visualização de valor arrecadado no mês         | Requisito para exibir o Caixa mensal.                         | Gerente                                                 |
| RF19 - Cadastrar medidas                               | Requisito para a criação de medidas.                          | Gerente                                                 |
| RF20 - Exibir medidas                                  | Requisito para exibir as medidas de um cliente.               | Gerente                                                 |
| RF21 - Atualizar medidas                               | Requisito para atualizar dados sobre as medidas dos clientes. | Gerente                                                 |
| RF22 - Excluir medidas                                 | Requisito de exclusão das Medidas de um Cliente.              | Gerente                                                 |

### 2.2 Requisitos não-funcionais

| Requisito                                     | Descrição                                                           |
| --------------------------------------------- | ------------------------------------------------------------------- |
| RNF001 - Conexão com a internet               | Deve manter uma conexão ativa com a Internet.                       |
| RNF002 - Sistema operacional Windows ou Linux | O computador deve ter como Sistema Operacional uma dessas 2 opções. |
| RNF003 - Deve ser acessível via navegador     | Deve abrir perfeitamento no Firefox e no Chrome.                    |

### 2.3 Perfis dos usuários

### 2.4 Riscos

O objetivo desta seção é o de produzir uma lista de riscos identificados em todas as fases do projeto e possíveis ações que poderiam ser tomadas para minimizar seus impactos.

1. Riscos de Gerenciamento
   |CÓDIGO|Risco |Plano de Ação |
   |---------|---------|---------|
   |RS01|Sistema não estar alinhado com o negócio | Elaborar uma documentação detalhada e levantamento de requisitos de qualidade|
   |RS02|Tempo necessário pra codificação for insufuciente. | Planejar e estimar com atecedência o tempo de cada fase do projeto|
   |RS03|Cliente pedir novas funcionalidades | Aumentar o tempo para a entrega|
   |RS04|Membro da equipe ficar doente por mais de 2 dias | Realocar as tarefas do membro pra equipe para os demais membros |
   |RS05|Falta de suporte técnico pós implantação | Inclusão desta cláusula no contrato|
   |RS06|Falta de preparo técnico dos funcionários na utilização do sistema |Criar um programa de treinamentos para todas as pessoas que irão utilizar o sistema|
2. Riscos de Externos
   |CÓDIGO|Risco |Plano de Ação |
   |---------|---------|---------|
   |RS07|Danos causados nos equipamentos por ações externas | Ter uma backup de dados na máquina e outra fonte externa e realizar backups diários. Utilizar no-breaks com baterias em boas condições|
   |
3. Riscos Tecnológicos
   |CÓDIGO|Risco |Plano de Ação |
   |---------|---------|---------|
   |RS08|Testes do sistema não serem efetivos | Criar um planejamento detalhado dos testes|

## 3. Histórico de Revisões

| Data       | Versão | Descrição          | Autor                              |
| ---------- | ------ | ------------------ | ---------------------------------- |
| 21/06/2020 | 0.0.1  | Documento Inicial  | **JuremasTEC Social**              |
| 22/06/2020 | 1.0.2  | Primeira Alteração | **José Rubens de Oliveira Junior** |
| 11/07/2020 | 1.0.3  | Revisão            | Fernando José dos Santos           |
|            |        |                    |                                    |
