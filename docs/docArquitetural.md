# Visão Geral

![Diagrama MVC](https://github.com/evertonfrnds/quarendemia-back-end/blob/master/docs/diagramasIMGS/diagramaMVC.jpg?raw=true)


# Requisitos Não Funcionais

| RNF | Descrição |
| -- | ----------- |
| Conexão com a internet | O Sistema deve manter uma conexão ativa com a Internet. Assim não terá perda nos dados que estão sendo manipulados pelo Sistema. |
| Sistema operacional | O Sistema é portado para Sistemas Operacionais especificos, então deve se comportar perfeitamente neles. |
| Navegador | O Sistema deve ter um comportamento responsivo nos navegadores sejam Mobile ou Desktop. Já que o acesso se dará via Navegadores. | 

# Mecanismos arquiteturais

| Mecanismo de Análise | Mecanismo de Design | Mecanismo de Implementação |
|---|---|---|
| Front-End | Interface de comunicação com o usuário do portal. | React JS |
| Build | Programação da IDE para validação do código fonte. | Visual Studio Team System Foundation Server. |
| Deploy | Configuração da IDE de deploy. | Visual Studio Team System Foundation Server.  |
| Testes | Aplicação para eecução dos testes no back-end | Jest |
| Rotas e server | Modulo para subir o server e classificar rotas | Express |
| ORM | Modulo de tradução do JS para query em BD | TypeORM |

## Tecnologias 
1. React JS: Bibloteca JS para criação de aplicações SPA;
2. Visual Studio Code: IDE para de denvolvimento;
3. Jest: Framework para execução de testes em projetos JS;
4. Espress: Modulo para criação de server http em JS;
5. TypeORM: ORM para projetos javascript ou typescript;