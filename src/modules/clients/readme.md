## Para fins de exemplo, vou utilizar a entidade clientes, e como devemos escrever o código em inglês, será clients.

### Primeiro, dentro da pasta modules crie a pasta da entidade que você deseja programar, no caso, criei a pasta clients.

### Dentro da pasta criada, crie 3 pastas, infra, repositories e services.

- src > modules > clients > infra
- src > modules > clients > repositories
- src > modules > clients > services

### Comece criando a estrutura:

- src > modules > clients > infra > http > routes > clients.routes.ts

dica: copie e cole o código de users.routes.ts pois possui uma estrutura de CRUD para você ter uma estrutura pronta e só alterar. Altere o necessário para continuar.

dica 2: repare que o middleware que tem em usuários só será utilizado na rota de usuários pois é um middleware para ver se o usuário é admin, provavelmente você deverá trocar por ensureAuthenticated.

### Você verá que será necessário criar um controller, faça isso:

- src > modules > clients > infra > http > controllers > ClientsController.ts

dica: copie e cole o código de UserController.ts e altere onde tem user para client

### Você verá que será necessário criar pelo menos 4 services, para criar, alterar, listar e deletar clients, crie-os.

- src > modules > clients > services > CreateClientService.ts
- src > modules > clients > services > DeleteClientService.ts
- src > modules > clients > services > ListClientsService.ts
- src > modules > clients > services > UpdateClientService.ts

dica: copie e cole os services de users para se basear novamente

### Agora você verá que será necessário criar o repositório de clients, crie-o.

- src > modules > clients > repositories > IClientsRepository.ts

Agora defina os métodos necessários para a entidade que você escolheu implementar. Se for só um CRUD deixe os mesmos que eu deixei nesse tutorial.

### Você verá que será necessário criar DTOs e a entidade que você tá implementando, comece pelo DTOS.

- Crie a pasta dtos dentro de clients.
- dentro criar arquivo ICreateClientDTO.ts
- src > modules > clients > dtos > ICreateClientDTO.ts

dica: dentro desse arquivo coloque os dados que sua entidade tem, no caso coloquei só nome e telefone porque é um exemplo

### Agora será necessário criar a entidade, como estamos usando typeorm, a entidade será criada dentro do type orm, crie a seguinte estrutura:

- src > clients > infra > typeorm > entities > Client.ts

### Agora corrija os services

### Agora implemente o que você definiu em IClientRepository

- src > modules > clients > typeorm > repositories > ClientsRepository.ts

### Agora cadastre a rota que você criou em:

- src > shared > infra > http > routes > index.ts

### Agora cadastre a injeção de depedência que você criou em:

- src > shared > container > index.ts

### Agora volte pros controllers e corrija todo o arquivo

### Agora crie migrations para a entidade que você criou

- yarn typeorm migration:create -n CreateClients

- yarn typeorm migration:run
