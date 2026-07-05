# Pokédex IA

## Sobre o projeto

Esta aplicação foi desenvolvida como parte de um processo seletivo da Levva.

O projeto consiste em uma Pokédex desenvolvida em React e FastAPI, utilizando a PokeAPI como fonte de dados. Além das funcionalidades tradicionais de consulta aos Pokémon, foi implementada uma integração com um modelo de linguagem (LLM) através do OpenRouter, permitindo que o usuário faça perguntas contextualizadas sobre o Pokémon selecionado.

O objetivo foi construir uma aplicação organizada, com separação de responsabilidades entre frontend e backend, priorizando uma boa experiência de uso e um código de fácil manutenção.

---

# Funcionalidades

- Listagem dos Pokémon organizados por geração.
- Busca por nome.
- Visualização dos detalhes de cada Pokémon em um modal.
- Reprodução do cry oficial do Pokémon.
- Chat contextualizado com Inteligência Artificial utilizando OpenRouter.
- Histórico da conversa durante a sessão do modal.

---

# Tecnologias utilizadas

## Frontend

- React
- Vite
- Axios

## Backend

- FastAPI
- Python
- uv
- Requests

## APIs

- PokeAPI
- OpenRouter (LLM)

---

# Estrutura do projeto

```
/
├── backend/
│   ├── app/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── prompts.py
│   │   ├── schemas.py
│   │   └── main.py
│   └── pyproject.toml
│
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── services/
    │   ├── utils/
    │   └── App.jsx
    └── public/
```

---

# Decisões técnicas

Durante o desenvolvimento, algumas decisões foram tomadas para manter o projeto simples e organizado:

- O frontend nunca consome diretamente a PokeAPI. Todas as requisições passam pelo backend, permitindo controlar os dados enviados ao cliente.
- O backend retorna apenas os campos necessários para a interface, reduzindo o acoplamento com a estrutura da PokeAPI.
- O prompt utilizado pela LLM foi mantido no mesmo arquivo da função ao invés de criar um arquivo dedicado para prompts, pois só há um.
- O chat mantém um histórico da conversa durante a utilização do modal, proporcionando uma interação mais natural.
- A comunicação entre frontend e backend foi centralizada em um serviço (`api.js`), facilitando futuras expansões.

---

# Pré-requisitos

O projeto foi desenvolvido e testado com:

- Python 3.14 ou superior 
- Node.js 24 ou superior
- npm
- uv

---

# Configuração da API

A integração com a LLM utiliza uma chave da OpenRouter.

Crie um arquivo `.env` dentro da pasta `backend` contendo:

```env
OPENROUTER_API_KEY=SUA_CHAVE_AQUI
```

---

# Como executar

## Backend

Entre na pasta do backend:

```bash
cd backend
```

Crie o ambiente virtual (apenas na primeira execução):

```bash
uv venv
```

Ative o ambiente virtual.

Windows:

```bash
.\.venv\Scripts\activate
```

Linux/macOS:

```bash
source .venv/bin/activate
```

Instale as dependências:

```bash
uv sync
```

Inicie a aplicação:

```bash
fastapi dev app/main.py
```

O backend estará disponível em:

```
http://localhost:8000
```

---

## Frontend

Abra um novo terminal e entre na pasta do frontend:

```bash
cd frontend
```

Instale as dependências:

```bash
npm install
```

Inicie a aplicação:

```bash
npm run dev
```

O frontend estará disponível em:

```
http://localhost:5173
```

---

# Utilização

1. Abra a aplicação no navegador.
2. Selecione uma geração utilizando as abas superiores.
3. Clique em um Pokémon para visualizar seus detalhes.
4. Utilize o campo de perguntas para conversar com a IA sobre o Pokémon selecionado.

---

# Autor

Projeto desenvolvido por Pedro Maia como parte de um processo seletivo para Levva.
