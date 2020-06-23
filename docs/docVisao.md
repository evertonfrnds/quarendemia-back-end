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

O Sistema Quarendemia foi criado para ajudar na administração de uma academia, com funcionalidades relevante para o administrado dela, facilitando o controle de fluxo de clientes e a contabilidade da empresa.

## 2. Descrição Geral

### 2.1 Requisitos Funcionais

Requisito | Descrição | Ator |
--------- | ----------- | ---------- |
RF01 - Cadastrar usuários | Requisito para a criação de usuários. | Administrador
RF02 - Atualizar dados do usuário | Requisito para atualizar dados sobre o Usuário. | Administrador
RF03 - Excluir o usuário; | Requisito de exclusão de um Usuário. | Administrador
RF04 - Ver dados do usuário | Requisito para exibir os dados do Usuário.| Administrador
RF05 - Recuperar senha do usuário | Requisito para recuperar senha de um Usuário |Administrador
RF06 - Cadastrar planos | Requisito para a criação de planos no sistema. | Administrador
RF07 - Exibir planos | Requisito para exibir os dados dos planos.| Administrador
RF08 - Atualizar planos | Requisito para atualizar dados sobre os Planos. | Administrador
RF09 - Excluir planos |Requisito de exclusão de um Plano.|Administrador
RF10 - Cadastro de clientes | Requisito para a criação de clientes. |Administrador
RF11 - Atualização de clientes | Requisito para atualizar dados sobre os clientes. |Administrador
RF12 - Exclusão de clientes |Requisito de exclusão de um Cliente. |Administrador
RF13 - Visualização de clientes | Requisito para exibir os dados de Clientes.|Administrador
RF14 - Visualização de clientes que devem pagar no mês |Requisito para exibir os clientes que devem pagar no Mês. |Administrador
RF15 - Confirmação de pagamentos do mês | Requisito para cadastrar o pagamento de um Cliente. |Administrador
RF16 - Visualização de pagamentos atrasados |Requisito para exibir os clientes com débitos. |Administrador
RF17 - Visualização de valor arrecadado no mês | Requisito para exibir o Caixa mensal. |Administrador
RF18 - Cadastrar medidas | Requisito para a criação de medidas. |Administrador
RF19 - Exibir medidas | Requisito para exibir as medidas de um cliente.|Administrador
RF20 - Atualizar medidas | Requisito para atualizar dados sobre as medidas dos clientes. |Administrador
RF21 - Excluir medidas |Requisito de exclusão das Medidas de um Cliente. | Administrador

### 2.2 Requisitos não-funcionais

Requisito                                 | Descrição   |
---------                                 | ----------- |
RNF001 - Conexão com a internet | Deve manter uma conexão ativa com a Internet. |
RNF002 - Sistema operacional Windows ou Linux | O computador deve ter como Sistema Operacional uma dessas 2 opções. |
RNF003 - Deve ser acessível via navegador | Deve abrir perfeitamento no Firefox e no Chrome. |

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
   |RS07|Testes do sistema não serem efetivos | Criar um planejamento detalhado dos testes|

## 3. Histórico de Revisões

| Data       | Versão | Descrição          | Autor                              |
| ---------- | ------ | ------------------ | ---------------------------------- |
| 21/06/2020 | 0.0.1  | Documento Inicial  | **JuremasTEC Social**              |
| 22/06/2020 | 0.0.2  | Primeira Alteração | **José Rubens de Oliveira Junior** |
| --/--/2020 |        |                    |                                    |
| --/--/2020 |        |                    |                                    |
