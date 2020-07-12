### UNIVERSIDADE FEDERAL DO RIO GRANDE DO NORTE

### CENTRO DE ENSINO SUPERIOR DO SERIDÓ

### DEPARTAMENTO DE COMPUTAÇÃO E TECNOLOGIA

### CURSO DE BACHARELADO EM SISTEMAS DE INFORMAÇÃO

#### EQUIPE JUREMASTEC SOCIAL

**Douglas Pacelli Maia Baltazar**

**Everton Ankelys Fernandes Bezerra**

**Fernando José dos Santos**

**José Rubens de Oliveira Júnior**

# QUARENDEMIA: Lista de User Stories

## Descrição

O presente documento mostra uma breve descrição dos User Stories do sistema **Quarendemia**.

## Histórico de revisões

| Data       | Versão | Descrição                                                       | Autor                             |
| :--------- | :----: | :-------------------------------------------------------------- | :-------------------------------- |
| 22/06/2020 | 0.0.1  | Template e descrição do documento; descrição do User Story US01 | José Rubens de Oliveira Junior    |
| 23/06/2020 | 0.0.2  | descrição do User Story US02                                    | Everton Ankelys Fernandes Bezerra |
| 23/06/2020 | 0.0.3  | Derscrição do User Story US03                                   | Douglas Pacelli Maia Baltazar     |
| 24/06/2020 | 0.0.4  | Derscrição do User Story US04                                   | Fernando José dos Santos          |
| 11/07/2020 | 1.0.0  | Derscrição do User Story US05                                   | Fernando José dos Santos          |

### **User Story US01 - Manter Usuário**

|                           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Descrição**             | O sistema deve manter um cadastro de usuário que tem acesso ao sistema via login e senha. Um usuário tem os atributos name, id, email, username, data de nascimento, tipo de usuário, status, password, avatarURL. O email será o login e ele pode registrar-se diretamente no sistema, o avatarURL é um link para uma foto de seu perfil. Além disso o usuário poderá alterar alguns dados, como o e-mail ou a senha. O usuário administrador do sistema pode realizar as operações de adicionar, alterar, remover e listar os usuários comuns do sistema. |
| **Requisitos envolvidos** | RF01, RF02, RF03, RF04, RF05, RNF03                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **Prioridade**            | Essencial                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **Estimativa**            | 8 h                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **Tempo Gasto (real):**   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| **Tamanho Funcional**     | 7 PF                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

### **User Story US02 - Recuperar senha**

|                           |                                                                                                                                                                                                                                                                                                 |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Descrição**             | O sistema deve promover a funcionalidade de recuperação de senha do usuário, onde na tela de login inicial, o sistema promova uma opção de recuperação de senha, na qual o usuario vai informar o email de cadastro, e a partir disso o sistema retorna uma pagina para a redefinição de senha; |
| **Requisitos envolvidos** | RF01, RF02, RF05, RNF03                                                                                                                                                                                                                                                                         |
| **Prioridade**            | Essencial                                                                                                                                                                                                                                                                                       |
| **Estimativa**            | 8 h                                                                                                                                                                                                                                                                                             |
| **Tempo Gasto (real):**   | 5 h                                                                                                                                                                                                                                                                                             |
| **Tamanho Funcional**     | 7 PF                                                                                                                                                                                                                                                                                            |
| **Estória do usuário**    | Quando o usuário esquecer a senha da sua conta. Na tela de login haverá uma opção de recuperação de senha, onde o usuário irá clicar e abrirar uma nova tela na qual ele vai digitar o email, logo após ele receberá um email contendo um link para alterar a senha.                            |

### **User Story US03 - Manter Cliente**

|                           |                                                                                                                                                                                                                                                                                                                                            |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Descrição**             | O sistema deve manter um cadastro de clientes para que o Usuario tenha acesso. Um Cliente tem os atributos id, nome, email, status. O cliente terá uma ligação com a mensalidade e assim o Usuario saberá quais os clientes que estão com debitos, quais estão aptos a frequentar. O Cliente tambem tem ligações com Planos e com Medidas. |
| **Requisitos envolvidos** | RF11, RF12, RF13, RF14, RF15, RNF01, RNF03                                                                                                                                                                                                                                                                                                 |
| **Prioridade**            | Essencial                                                                                                                                                                                                                                                                                                                                  |
| **Estimativa**            | 8h                                                                                                                                                                                                                                                                                                                                         |
| **Tempo Gasto (real):**   |                                                                                                                                                                                                                                                                                                                                            |
| **Tamanho Funcional**     | 7 PF                                                                                                                                                                                                                                                                                                                                       |

### **Testes de Aceitação (TA)**

| Código      | Descrição |
| ----------- | --------- |
| **TA01.01** |           |
| **TA01.02** |           |
| **TA01.03** |           |
| **TA01.04** |           |

### **User Story US04 - Manter Planos**

|                           |                                                                                                                                                                                                                                                                                                                                                                           |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Descrição**             | O sistema deve conseguir manter o plano de pagamento do cliente. Para que o Usuário possa alterar o plano de acordo com as possibilidades existentes. O plano tem como atributos id, nome, descrição e valor e só existe a possibilidade de 2 planos: mensal ou anual onde o cliente terá um desconto de 5% no plano anual que é o valor da mensalidade vigente vezes 12. |
| **Requisitos envolvidos** | RF01, RF02, RF04, RF05, RNF01, RNF02 e RNF03                                                                                                                                                                                                                                                                                                                              |
| **Prioridade**            | Essencial                                                                                                                                                                                                                                                                                                                                                                 |
| **Estimativa**            | 8 h                                                                                                                                                                                                                                                                                                                                                                       |
| **Tempo Gasto (real):**   | 10 h                                                                                                                                                                                                                                                                                                                                                                      |
| **Tamanho Funcional**     | 7 PF                                                                                                                                                                                                                                                                                                                                                                      |

### **Testes de Aceitação (TA)**

| Código      | Descrição                                                                                                  |
| ----------- | ---------------------------------------------------------------------------------------------------------- |
| **TA01.01** | Conseguir cadastrar um cliente e aparecer a mensagem "Cliente cadastrado com sucesso" ou mensagem similar. |
| **TA01.02** |                                                                                                            |
| **TA01.03** |                                                                                                            |
| **TA01.04** |                                                                                                            |
| **TA01.05** |                                                                                                            |
| **TA01.06** |                                                                                                            |

### **User Story US05 - Manter Medidas**

|                           |                                                                                                                                        |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| **Descrição**             | O sistema deve conseguir manter as medidas dos clientes da academia e conseguir alterar as medidas de acordo com o tempo especificado. |
| **Requisitos envolvidos** | RF01, RF02, RF04, RF05, RNF01, RNF02 e RNF03                                                                                           |
| **Prioridade**            | Essencial                                                                                                                              |
| **Estimativa**            | 8 h                                                                                                                                    |
| **Tempo Gasto (real):**   | 10 h                                                                                                                                   |
| **Tamanho Funcional**     | 7 PF                                                                                                                                   |
