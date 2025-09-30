# Consulta Movie - README

Aplicação React que consome a **API pública The Movie Database (TMDb)** para exibir filmes populares e realizar buscas por título.

## Integrantes

- Geovanna Karin Silva Gabriel
- Rodrigo Augusto de Melo

## Tecnologias utilizadas

- **React 18** – Biblioteca para construção de interfaces reativas.
- **Vite** – Ferramenta de build e bundler rápido para projetos React.
- **Tailwind CSS** – Framework CSS para estilização responsiva.
- **Axios** – Cliente HTTP para consumir a API do TMDb.
- **React Router DOM** – Gerenciamento de rotas da aplicação.
- **Node.js / npm** – Ambiente de execução JavaScript e gerenciador de pacotes.

## Estrutura do projeto



src/
├─ components/
│  ├─ Header.jsx
│  └─ MovieCard.jsx
├─ pages/
│  ├─ Home.jsx
│  └─ Details.jsx
├─ services/
│  └─ api.js
├─ App.jsx
├─ main.jsx
└─ index.css


## Funcionalidades

- Exibe filmes populares na tela inicial.
- Permite buscar filmes por título.
- Exibe detalhes do filme ao clicar em "Ver detalhes".
- Centralização e estilização responsiva com Tailwind CSS.
- Tratamento de loading e erros de API.

## Passo a passo para configurar o projeto localmente

### 1. Instalar Node.js e npm
Baixe e instale a versão estável do Node.js (v18 ou superior).

Confirme a instalação:

```bash
node -v
npm -v

### 2. Criar o projeto com Vite 

npm create vite@latest tmdb-app -- --template react
cd tmdb-app

### 3. Instalar dependências principais
npm install react-router-dom axios
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

### 4. Configurar Tailwind CSS

content: ["./index.html", "./src/**/*.{js,jsx}"];

### 5. Criar estrutura de pastas e arquivos
src/components/Header.jsx
src/components/MovieCard.jsx
src/pages/Home.jsx
src/pages/Details.jsx
src/services/api.js
App.jsx e main.jsx

### 6. Configurar API TMDb
VITE_TMDB_API_KEY=0923ac32d20ebd91568b4141bf65e2f5

### 7. Rodar Localmente

npm install
npm run dev

### 8. Commit e push para GitHub

git init
git add .
git commit -m "Primeiro commit - TMDb App completo"
git branch -M main
git remote add origin https://github.com/RodrigoMeloads/Consulta-Movie.git
git push -u origin main

### 9. Deploy na Vercel

O projeto está publicado na Vercel.
🔗 Link funcional do deploy: **(https://consulta-movie-git-main-melo-rods-projects.vercel.app)**

## Observações

* A API Key da TMDb está configurada no arquivo `src/services/api.js`.
* A aplicação utiliza Tailwind CSS para estilização, mas você pode integrar **Material-UI ou Styled Components** para um design mais avançado.
* Caso a API esteja indisponível, mensagens de erro amigáveis serão exibidas.

## Licença

Este projeto é para fins acadêmicos.
