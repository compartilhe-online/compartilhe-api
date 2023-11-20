# compartilhe-api: Guidelines do Projeto

Bem-vindo ao projeto compartilhe-api, o backend que sustenta o Compartilhe-Web. Esta API é construída com o framework NestJS e segue a arquitetura two-tier. Abaixo estão as diretrizes importantes para o desenvolvimento e contribuição para o compartilhe-api.

## Sobre o Projeto

A compartilhe-api é a parte central do ecossistema Compartilhe, responsável por fornecer serviços para o Compartilhe-Web. Este backend facilita a comunicação entre os usuários, gerencia campanhas de doação e fornece dados necessários para a aplicação frontend.

## Pré-requisitos

Antes de começar a contribuir para o projeto, certifique-se de ter os seguintes requisitos instalados em sua máquina:

- Node.js
- npm (ou yarn)
- Git

## Configuração do Ambiente

1. Clone o repositório:

```bash
git clone https://github.com/compartilhe-online/compartilhe-api.git
cd compartilhe-api
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
```

3. Inicie a aplicação localmente:

```bash
npm run start:dev
# ou
yarn start:dev
```

A API estará disponível em [http://localhost:3000](http://localhost:3000).

## Estrutura do Projeto

A estrutura de pastas do projeto segue as melhores práticas recomendadas para projetos NestJS. Certifique-se de entender a organização do código antes de fazer contribuições.

```
compartilhe-api/
|-- src/
|   |-- campaigns/
|   |-- auth/
|   |-- users/
|   |-- users-metadata/
|   |-- app.module.ts
|   |-- main.ts
|-- .gitignore
|-- package.json
|-- README.md
```

## Diretrizes de Contribuição

1. **Branching Model:**
   - Utilize o modelo de branching trunk-based.
   - Commits devem ser feitos diretamente na branch `main`.

2. **Padrões de Codificação:**
   - Siga as práticas e convenções do NestJS.
   - Mantenha a estrutura modular do código.

3. **Comentários e Documentação:**
   - Documente funções e rotas complexas.
   - Mantenha os comentários relevantes e atualizados.

4. **Testes:**
   - Escreva testes unitários para novas funcionalidades.
   - Certifique-se de que todos os testes existentes passem antes de enviar uma solicitação de pull.

5. **Solicitações de Pull (PRs):**
   - Descreva claramente as alterações feitas na solicitação de pull.
   - Referencie problemas relacionados usando #<número do problema>.

6. **Versionamento Semântico:**
   - Siga as convenções de [Versionamento Semântico](https://semver.org/).

7. **Boas Práticas de Git:**
   - Commits devem ser claros e concisos.
   - Evite commits grandes e monolíticos.

## Contato

Se você tiver dúvidas ou sugestões, sinta-se à vontade para entrar em contato com a equipe de desenvolvimento:

- Email: dev@compartilhe.online

Obrigado por contribuir para o compartilhe-api!