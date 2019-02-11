# adonis-graphql-apollo

Projeto de estudo com base no link https://scotch.io/tutorials/build-a-graphql-server-with-apollo-server-and-adonisjs.

Alterações foram feitas para que este projeto diferentemente do link acima, rode localmente via docker facilmente.

### Rodar projeto

Rode para instalar os containers e levantar tudo que necessário para o projeto:

```bash
cp .env.example .env # caso você não tenha um .env
. start.sh # ou . restart.sh
```

### MySQL

Acesse os comandos do mysql assim:

```bash
docker-compose run client
```

### PHPMyAdmin

Acesse-o no seu navegador http://localhost com os seguintes dados de acesso:

	Servidor: mysql
	Utilizador: root
	Palavra-passe: <vazio>

## Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

### Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.

#### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```
