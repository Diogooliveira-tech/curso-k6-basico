# Introdução aos testes de performance com k6

<h1 align="left">
    <img src=".github/logo-stiker.svg" width="250px">
</h1>

# User API

## 🔖 Requisitos funcionais

### Cadastro

- [X] Deve retornar os id ao cadastrar um novo usuário
- [X] Deve retornar 201 ao cadastrar um novo usuário
- [X] Deve retornar 400 ao tentar cadastrar sem email e senha
- [X] Deve retornar 400 se o email for duplicado

| campos   | descrição                             | tipo     | obrigatório |
| :-----   | :------------------------------------ | :------- | :---------- |
| email    | usuário identificador único           | email    | sim         |
| password | senha do usuário                      | texto    | sim         |

## 🔖 Requisitos não funcionais

### Cadastro

- [ ] O cadastro com sucesso deve ocorrer em até 2 segundos
- [ ] Cadastros sem sucesso devem ocorrer em até 2 segundos
- [ ] Deve poder cadastrar até 100 usuários simultâneos
- [ ] A margem de erro no cadastro deve ser de pelo menos 1%

## 🚀 Tecnologias

- [Node.js] - plataforma de desenvolvimento
- [Express] - framework onde a API foi construída
- [MongoDB] - Banco de dados (Não relacional)
- [k6] - ferramenta para teste de carga, performance, stress etc...

## 👨🏻‍💻 Como executar o projeto

[Node.js](https://nodejs.org/) v16 ou superior para executar.

Para liberar o gerenciador de pacotes Yarn:

```
corepack enable
```

Execute os comandos abaixo para instalar das dependências do projeto:

```sh
cd curso-k6-basico/api
yarn install
yarn dev
```

## Como executar os testes

Acessar no terminal a pasta "api" e rodar o comando yarn dev para subir aplicação

Acessar no terminal a pasta de "tests" e rodar o comando de acordo com o teste a ser executado por exemplo:
```sh
   k6 run hello.js
   k6 run signup.js
   k6 run signup-smoke.js
   k6 run signup-load.js
   k6 run --vus 10 --duration 30s signup.js
   k6 run --vus 10 --duration 30s hello.js
   k6 run signup-stress.js   
```


## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
### Adicionais

```sh
- Aulas no youtube: https://www.youtube.com/@papitorocks
- Play list: (https://www.youtube.com/playlist?list=PLn2i8I7W73irNVpzHDU2oKWCKLa2VPWEx)
- Repositório para plugin de report: https://github.com/benc-uk/k6-reporter
```
