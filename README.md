# Gerenciador de Livros

## 📃 Descrição

Este é um projeto front-end cujo objetivo foi criar uma página web para gerenciamento de livros, com diferentes níveis de acesso para usuários e administradores, além de um sistema de gerenciamento de usuários.

## 🛠 Tecnologias

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

## 🧰 Recursos

- `react-hook-form`: é uma biblioteca React que utiliza React Hooks para gerenciar o estado dos campos de formulários. Neste projeto esta biblioteca esta sendo utilizada para lidar com a validação dos campos e controlar o envio do formulário.
- `zod`: é uma biblioteca de validação de esquemas em TypeScript. Nesta aplicação ela está sendo utilizada para definir o esquema de validação dos dados do formulário.
- `react-query`: é uma biblioteca React que serve para o gerenciamento de estado assíncrono. Seu uso neste projeto é lidar com a mutação de dados quando o formulário é enviado (criação de um novo livro ou usuário), serve também para atualizar automaticamente os dados dos livros após a mutação ser concluída com sucesso atualizando o cache no navegador.
- `react-router-dom`: é uma biblioteca muito útil para criar aplicações React com múltiplas páginas ou rotas. Foi usado neste projeto para permitir a navegação entre partes diferentes da aplicação sem a necessidade de recarregar a página novamente.
- `shadcniu`: é uma biblioteca de componentes de interface do usuário (UI) para aplicações React, que combina a simplicidade e a flexibilidade de componentes estilizados com o poder e a personalização do Tailwind CSS.

## Funcionamento

- [✔] O usuário pode se cadastrar inserindo seu nome, e-mail e senha para ter acesso ao conteúdo dos livros.
- [✔] Todos os usuários cadastrados serão capazes de fazer login e logout na aplicação.
- [✔] Os administradores podem criar um novo livro através de um formulário inserindo o título e a descrição do novo livro.

## Regras de Negócio

- [✔] Todos os novos usuários que se cadastrarem terão o acesso "comum" a aplicação.
- [✔] Usuários que possuirem acesso a aplicação terão seus dados salvos no localStorage que irá definir o seu nível de acesso.
- [✔] O usuário comum pode apenas acessar o conteúdo dos livros.
- [✔] Todos os administradores serão capazes de acessar o conteúdos dos livros, criar novos livros, deletar livros existentes e editar o conteúdo dos livros.
- [✔] O Administrador Inicial será o único capaz de definir novos administradores ou torná-los usuários comuns novamente.

## Instalação

1. Escolha um diretório na sua máquina, acesse-o pelo terminal e execute o seguinte comando para clonar este repositório:

```

git clone https://github.com/WilkerGuimaraes/book-manager.git

```

2. Acesse este projeto através do seu editor de código e execute o seguinte comando para instalar todas as dependências:

```

npm install

```

3. Execute o seguinte comando para executar o servidor do `json-server`

```

npm run server

```

4. E por fim, execute o seguinte comando para executar o front-end:

```

npm run dev

```

Assim que o projeto estiver rodando, acesse o seu `http://localhost:5173/`
