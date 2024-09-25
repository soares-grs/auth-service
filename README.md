## Setup do projeto

```bash
$ npm install
```

## Compilar e rodar o projeto

```bash
# desenvolvimento
$ npm run start

# modo watch
$ npm run start:dev

# modo produção
$ npm run start:prod
```

## Rodar testes

```bash
# testes unitários
$ npm run test

# testes e2e 
$ npm run test:e2e

# cobertura de teste
$ npm run test:cov
```

## Observações
Neste projeto, a senha foi armazenada como uma string em texto simples para simplificar o código e facilitar a compreensão do exemplo. Em uma aplicação real, não se deve armazenar senhas dessa forma. O ideal seria usar uma biblioteca como `bcrypt` para gerar um hash seguro com salt, protegendo as senhas. Optei por essa abordagem simplificada apenas para fins educativos e de clareza no código.