# Marketplace API

## AnotaAi Backend Challenge

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Nest](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)

Solução do desafio de backend do AnotaAi

## Índice

- [Instalação](#instalação)
- [Tecnologias](#tecnologias-utilizadas)
- [O que consiste o desafio?](#no-que-consiste-o-desafio)

## Diagrama:

![Diagrama](./src/diagram/diagram.png)

## Instalação:

1. Clone este repositório:

```bash
git clone https://github.com/matheus-santos-da-silva/anotaai-backend-challenge.git
```

2. Instale as dependências

```bash
yarn install
```

3. Mude o arquivo _.env.example_ para _**.env**_ e preencha as variáveis de ambiente com as suas credenciais

```yaml
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/restaurant-marketplace
AWS_REGION=us-east-1
AWS_ACCESS_KEY=${AWS_ACCESS_KEY}
AWS_SECRET_KEY=${AWS_SECRET_KEY}
AWS_SNS_TOPIC_ARN=${AWS_SNS_TOPIC_ARN}
```

4. Rode o docker-compose e inicie a aplicação

```bash
docker compose up -d

yarn run start:dev
```

5. Acesse a documentação

```bash
http://localhost:3000/api-docs
```

## No que consiste o desafio:

O desafio consistiu em desenvolver uma API utilizando Node.js para um sistema de gerenciamento de catálogo de produtos
em uma aplicação de marketplace. A API foi desenvolvida com base em várias histórias de usuários, que foram convertidas em rotas específicas para a aplicação.

Seria um CRUD de Categorias e Produtos, e toda vez que cada uma das entidades fossem criadas ou atualizadas enviaria para um tópico da aws onde teria um consumidor que consumiria esses dados e transformaria em um JSON como o catálogo do proprietário e salvaria em um BucketS3.

Link para o desafio: https://github.com/githubanotaai/new-test-backend-nodejs

## Tecnologias Utilizadas:

- NodeJS
- Typescript
- NestJS
- TypeORM
- PostgreSQL
- Docker
- Aws SQS
- Aws SNS
- Aws BucketS3
- Aws Lambda Function
