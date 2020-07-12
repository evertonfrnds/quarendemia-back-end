### UNIVERSIDADE FEDERAL DO RIO GRANDE DO NORTE

### CENTRO DE ENSINO SUPERIOR DO SERIDÓ

### DEPARTAMENTO DE COMPUTAÇÃO E TECNOLOGIA

### CURSO DE BACHARELADO EM SISTEMAS DE INFORMAÇÃO

**Douglas Pacelli Maia Baltazar**
**Everton Ankelys Fernandes Bezerra**
**Fernando José dos Santos**
**José Rubens de Oliveira Júnior**

# Análise de Pontos de Função para o Sistema Quarendemia

## Descrição do projeto

O Sistema Quarendemia foi criado para ajudar na administração de uma academia, com funcionalidades relevantes para o administrador, facilitando o controle de fluxo de clientes e a contabilidade da empresa.

## Lista de UserStories - US

### **User Story US01 - Manter Usuário**

### **User Story US02 - Recuperar senha**

### **User Story US03 - Manter Cliente**

### **User Story US04 - Manter Planos**

### **User Story US05 - Manter Medidas**

### **User Story US06 - Manter Mensalidades**

## Tipos de Contagem

### Contagem Indicativa (Ci)

    Na contagem indicativa só é necessário analisar os ALIs (Arquivos Lógicos Internos) com o valor de 35 PF cada e os AIE (Arquivos de Interface Externa) com o valor de 15 PF cada.

| **ALI**             | **Entidades Relacionadas** | **PF** |
| :------------------ | :------------------------- | :----: |
| Keep user           | User and Client            |   35   |
| Recover password    | User and Client            |   35   |
| Keep client         | User and Client            |   35   |
| Keep Plans          | Plans and Client           |   35   |
| Mantain measures    | Client and Measures        |   35   |
| Keep monthly fees   | Client and Monthly fees    |   35   |
| Contagem Indicativa |                            |  210   |
|                     |                            |

### Contagem Estimativa (Ce)

    Analisa todos às funções da dados (ALI’s e AIE’s) com complexidade baixa, 7 PF cada ALI e 5 PF para cada AIE).
    Analisa todos os processos elementares como médios EE (4 PF), CE (4 PF) e SE (5 PF).Nomes em inglês: External Inputs (EI), External Inquiry (EQ) e External Outputs (EO).

| **ALI**                              | **Tipos de Função** | **Complexidade** | **PF** |
| :----------------------------------- | :-----------------: | :--------------: | :----: |
| Keep user                            |         ALI         |      BAIXA       |   7    |
| Recover password                     |         ALI         |      BAIXA       |   7    |
| Keep client                          |         ALI         |      BAIXA       |   7    |
| Keep Plans                           |         ALI         |      BAIXA       |   7    |
| Mantain measures                     |         ALI         |      BAIXA       |   7    |
| Keep monthly fees                    |         ALI         |      BAIXA       |   7    |
| Create Password                      |         EE          |      MÉDIA       |   4    |
| Update Password                      |         CE          |      MÉDIA       |   4    |
| Create User                          |         EE          |      MÉDIA       |   4    |
| Update User                          |         EE          |      MÉDIA       |   4    |
| Delete User                          |         EE          |      MÉDIA       |   4    |
| View User                            |         CE          |      MÉDIA       |   4    |
| Create Plans                         |         EE          |      MÉDIA       |   4    |
| Update Plans                         |         EE          |      MÉDIA       |   4    |
| Delete Plans                         |         EE          |      MÉDIA       |   4    |
| View Plans                           |         CE          |      MÉDIA       |   4    |
| Create Clients                       |         EE          |      MÉDIA       |   4    |
| Update Clients                       |         EE          |      MÉDIA       |   4    |
| Delete Clients                       |         EE          |      MÉDIA       |   4    |
| View Clients                         |         CE          |      MÉDIA       |   4    |
| Create monthlyFees                   |         EE          |      MÉDIA       |   4    |
| Update monthlyFees                   |         EE          |      MÉDIA       |   4    |
| Delete monthlyFees                   |         EE          |      MÉDIA       |   4    |
| View monthlyFees                     |         CE          |      MÉDIA       |   4    |
| Create Meansures                     |         EE          |      MÉDIA       |   4    |
| Update Meansures                     |         EE          |      MÉDIA       |   4    |
| Delete Meansures                     |         EE          |      MÉDIA       |   4    |
| View Meansures                       |         CE          |      MÉDIA       |   4    |
| **Contagem Estimativa não ajustada** |                     |                  |  130   |

### Contagem Detalhada (Cd)

    A contagem Detalhada (Cd) analisa todos às funções da dados (ALI’s e AIE’s) classificando com complexidades baixa, média e alta. Também analisa todos as transações classificando sua complexidade em baixa, média e alta conforme tabela de contribuições.

| **Funções** | **Baixa** | **Média** | **Alta** |
| :---------- | :-------: | :-------: | :------: |
| ALI         |     6     |     0     |    0     |
| AIE         |     0     |     0     |    0     |
| EE          |    16     |     0     |    0     |
| CE          |     6     |     0     |    0     |
| SE          |     0     |     0     |    0     |

    ALI E AIE : 6 ALI \* 7 PF = 42
    EE: 16 EE \* 3 PF = 48
    CE: 6 CE \* 3 PF = 18
    DFP = 102 PF
