# API-RESTAURANT

Uma API REST desenvolvida em Node.js para gerenciamento de restaurantes, com foco em escalabilidade, boas práticas de desenvolvimento (SOLID) e segurança. O sistema permite gerenciar pedidos, produtos e autenticar usuários através de JSON Web Token (JWT).

## 🚀 Visão Geral

A **API-RESTAURANT** foi desenvolvida para oferecer uma solução completa para a gestão de restaurantes. Ela permite que os usuários realizem operações como cadastro, atualização, exclusão e consulta de pedidos e produtos, além de oferecer autenticação segura para acesso ao sistema.

## 📋 Recursos

- **Autenticação JWT:** Controle de acesso seguro aos endpoints da API.
- **CRUD de Produtos e Pedidos:** Criação, leitura, atualização e remoção de itens e pedidos.
- **Banco de Dados Relacional:** Utiliza PostgreSQL integrado via Prisma ORM para gestão dos dados.
- **Boas Práticas de Desenvolvimento:** Implementação dos princípios SOLID para garantir um código limpo, modular e escalável.
- **Documentação da API:** Documentação dos endpoints e fluxo da aplicação (utilize Swagger ou ferramenta similar para consulta).

## 🛠 Tecnologias Utilizadas

- **Node.js** com **Express** – Motor da API e framework web
- **TypeScript** – Linguagem tipada para maior robustez do código
- **PostgreSQL** – Banco de dados relacional
- **Prisma ORM** – Mapeamento objeto-relacional para interação com o banco de dados
- **JSON Web Token (JWT)** – Autenticação e autorização
- **SOLID** – Conjunto de princípios para desenvolvimento de software
- **Docker** (opcional) – Contêiner para facilitar a implantação do ambiente

## ⚙️ Pré-requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm ou yarn](https://www.npmjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- (Opcional) [Docker](https://www.docker.com/) se desejar utilizar contêineres

## 🔧 Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/GuilhermeMCL/API-RESTAURANT.git
   cd API-RESTAURANT
