# Consulta Movie - README

Aplicação React que consome a **API pública The Movie Database (TMDb)** para exibir filmes populares e realizar buscas por título.

## Tecnologias utilizadas

* React 18
* Vite
* Tailwind CSS
* Axios
* React Router DOM
* Node.js / npm

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

* Exibe **filmes populares** na tela inicial.
* Permite **buscar filmes por título**.
* Exibe **detalhes do filme** ao clicar em "Ver detalhes".
* Centralização e estilização responsiva com **Tailwind CSS**.
* Tratamento de **loading** e **erros de API**.

## Como executar localmente

1. Clone o repositório:

```
git clone https://github.com/SEU-USUARIO/TMDB-App.git
```

2. Acesse a pasta do projeto:

```
cd TMDB-App
```

3. Instale as dependências:

```
npm install
```

4. Rode o servidor de desenvolvimento:

```
npm run dev
```

5. Abra o navegador 

## Deploy na Vercel

O projeto está publicado na Vercel.
🔗 Link funcional do deploy: **(https://consulta-movie-git-main-melo-rods-projects.vercel.app)**

## Observações

* A API Key da TMDb está configurada no arquivo `src/services/api.js`.
* A aplicação utiliza Tailwind CSS para estilização, mas você pode integrar **Material-UI ou Styled Components** para um design mais avançado.
* Caso a API esteja indisponível, mensagens de erro amigáveis serão exibidas.

## Licença

Este projeto é para fins acadêmicos.
