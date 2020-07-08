### UNIVERSIDADE FEDERAL DO RIO GRANDE DO NORTE

### CENTRO DE ENSINO SUPERIOR DO SERIDÓ

### DEPARTAMENTO DE COMPUTAÇÃO E TECNOLOGIA

### CURSO DE BACHARELADO EM SISTEMAS DE INFORMAÇÃO

**Douglas Pacelli Maia Baltazar**
**Everton Ankelys Fernandes Bezerra**
**Fernando José dos Santos**
**José Rubens de Oliveira Júnior**

# Quarendemia: Projeto Arquitetural

# Descrição

Este documento descreve a arquitetura proposta, descrevendo os padrões arquiteturais usados, requisitos não funcionais, decisões arquiteturais e descrição da tecnologias utilizadas.

# Histórico de revisões

# Visão Geral

![Diagrama MVC](https://github.com/evertonfrnds/quarendemia-back-end/blob/master/docs/diagramasIMGS/diagramaMVC.jpg?raw=true)

# Requisitos Não Funcionais

| RNF                    | Descrição                                                                                                                        |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Conexão com a internet | O Sistema deve manter uma conexão ativa com a Internet. Assim não terá perda nos dados que estão sendo manipulados pelo Sistema. |
| Sistema operacional    | O Sistema é portado para Sistemas Operacionais especificos, então deve se comportar perfeitamente neles.                         |
| Navegador              | O Sistema deve ter um comportamento responsivo nos navegadores sejam Mobile ou Desktop. Já que o acesso se dará via Navegadores. |

# Mecanismos arquiteturais

| Mecanismo de Análise | Mecanismo de Design                                | Mecanismo de Implementação                   |
| -------------------- | -------------------------------------------------- | -------------------------------------------- |
| Front-End            | Interface de comunicação com o usuário do portal.  | React JS                                     |
| Build                | Programação da IDE para validação do código fonte. | Visual Studio Team System Foundation Server. |
| Deploy               | Configuração da IDE de deploy.                     | Visual Studio Team System Foundation Server. |
| Testes               | Aplicação para execução dos testes no back-end      | Jest                                         |
| Rotas e server       | Modulo para subir o server e classificar rotas     | Express                                      |
| ORM                  | Modulo de tradução do JS para query em BD          | TypeORM                                      |

## Tecnologias

1. React JS: Bibloteca JS para criação de aplicações SPA;
2. Visual Studio Code: IDE para de denvolvimento;
3. Jest: Framework para execução de testes em projetos JS;
4. Espress: Modulo para criação de server http em JS;
5. TypeORM: ORM para projetos javascript ou typescript;

# Decisões de Design

#### Fundamentação:

Diante das especificações do Projeto, decidimos aplicar a arquiteura Model-View-Controller(MVC), ela se torna melhor diante do pouco tempo de implementação e o desenvolvimento paralelo fica mais eficiente. Arquiteturas em n camadas e microserviços descartamos pois o projeto é de pequeno porte e não faz sentido aplicar.

# Validação com Casos de Teste

# Componentes

![Diagrama Componentes](https://github.com/evertonfrnds/quarendemia-back-end/blob/master/docs/diagramasIMGS/diaComponentes.jpg?raw=true)

| Componente          | Descrição                                                            |
| ------------------- | -------------------------------------------------------------------- |
| Página do Sistema   | Gera todas as informações ao usuário sobre os dados do sistema.      |
| Login               | Responsável por realizar o login do usuário.                         |
| Cadastro de usuário | Responsável por cadastrar um novo usuário no sistema.                |
| Alteração de Senha  | Altera a senha de um usuário que esqueceu sua senha.                 |
| Clientes            | Altera ou cadastra todas as informações de um cliente                |
| Mensalidade         | Altera ou cadastra todas as informações de um cliente                |
| Planos              | Altera ou cadastra todas as informações da mensalidade de um cliente |
| Medidas             | Altera ou cadastra todas as informações de medidas de um cliente     |

# Implantação

![Diagrama Implantação](https://github.com/evertonfrnds/quarendemia-back-end/blob/master/docs/diagramasIMGS/diaImplantacao.jpg?raw=true)

# Referências

https://docs.google.com/document/d/1i80vPaInPi5lSpI7rk4QExnO86iEmrsHBfmYRy6RDSM/edit
http://www.linhadecodigo.com.br/artigo/3343/como-documentar-a-arquitetura-de-software.aspx#ixzz5AE2cXUmI
https://www.youtube.com/watch?v=p1sY4XzaMyM
https://www.youtube.com/watch?v=2VUPhYY_YLE
