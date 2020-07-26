# QUARENDEMIA BACK-END

## Sumário

1. [Informações Gerais]()
2. [Requisitos Funcionais]()
3. [Documentação](##Documentação)
4. [Tecnologias]()
5. [Tutoriais e Documentação]()
6. [License](#license)

## Informações Gerais

Quarendemia visa cadastrar os usuários de academias locais bem como atualizar as informações necessárias de pagamentos.

## Usagem

- Criar arquivo .env na raiz do projeto e preencher as informações contidas em .env.example;
- Criar arquivo ormconfig.json na raiz do projeto e preencher as informações contidas em ormconfig.example.json;
- Caso utilize docker para criar a imagem do banco de dados, abaixo tem um código necessário.

```bash
yarn
yarn start
```

```bash
docker run --name NOME_DA_IMAGEM -e POSTGRES_PASSWORD=SUA_SENHA -p 5432:5432 -d postgres
```

*Substitua NOME_DA_IMAGEM por o nome de sua preferência para a imagem*

*Substitua SUA_SENHA por uma senha confiável de sua preferência*

## Requisitos Funcionais

Os requisitos funcionais detalhados estão na página wiki [Requisitos Funcionais](docs/docVisao.md).

## Documentação

Aqui está os documentos produzidos:

1. [Documento de Visão](docs/docVisao.md)
2. [Modelo Conceitual](docs/modConceitual.md)
3. [Dicionário de Dados](docs/dicionarioDados.md)
4. [Modelo Relacional](docs/modRelacional.md)
5. [Lista de User Stories](docs/listaUserStories.md)
6. [Termo de Abertura](docs/termAbertura.md)

## Tecnologias

O projeto vai ser usado as seguintes tecnologias:

- [ECMAScript](https://developer.mozilla.org/pt-BR/docs/Aprender/JavaScript) - ECMAScript é uma especificação de linguagem de programação baseada em scripts, padronizada pela Ecma International na especificação ECMA-262 e ISO/IEC 16262
- [Nodejs - v12.18.1 LTS](https://nodejs.org/pt-br/) - Com um tempo de execução JavaScript assíncrono orientado a eventos, o Node.js foi projetado para criar aplicativos de rede escaláveis.
- [React - v16.13.1](https://pt-br.reactjs.org/) - faz com que a criação de UIs interativas seja uma tarefa fácil.
- [VSCode lasted Version]() - Editor de Código!

## Tutoriais e Documentação

- [ECMAScript](https://developer.mozilla.org/pt-BR/docs/Aprender/JavaScript)
- [Nodejs](https://nodejs.org/en/docs/)
- [React](https://pt-br.reactjs.org/tutorial/tutorial.html)

## License

- MIT License
