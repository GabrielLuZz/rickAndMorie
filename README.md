# Rick and Morty Characters Explorer


## Português

### Visão geral
Este projeto é uma aplicação front-end criada com Create React App (React 18), que busca personagens da Rick and Morty API e os apresenta em uma grade de cards. A navegação entre páginas é feita através de ícones de seta, e o card muda de cor conforme o status do personagem (vivo ou não).

### Tecnologias
- React 18 (Create React App)
- Fetch API (requisições HTTP)
- CSS Modules para estilos por componente
- React Icons (ícones de navegação)
- Google Fonts (Nunito)

### Funcionalidades
- Listagem de personagens da Rick and Morty API com paginação.
- Navegação entre páginas usando setas (anterior e próxima).
- Card de personagem com:
  - Imagem
  - Nome truncado quando maior que 12 caracteres
  - Espécie
  - Cores de fundo/título variando conforme o status (Alive vs outros)

### Requisitos
- Node.js 14+ e npm

### Instalação e execução
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```
   Acesse http://localhost:3000 no navegador.

3. Build de produção:
   ```bash
   npm run build
   ```

4. Testes:
   ```bash
   npm test
   ```

### Scripts disponíveis
- `npm start` — inicia o ambiente de desenvolvimento
- `npm test` — roda os testes em modo watch
- `npm run build` — gera o build de produção
- `npm run eject` — expõe as configurações do Create React App (irreversível)

### Estrutura de pastas
```
rickAndMorie/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   ├── components/
│   │   ├── Characters/
│   │   │   ├── index.jsx
│   │   │   └── style.module.css
│   │   └── CharCard/
│   │       ├── index.jsx
│   │       └── style.module.css
│   └── ...
└── package.json
```

### Como funciona (breve explicação técnica)
- O estado `currentPage` começa em `https://rickandmortyapi.com/api/character/?page=1`.
- Um `useEffect` observa `currentPage` e faz `fetch` para obter `results` (lista de personagens) e `info` (links de paginação `prev`/`next`).
- Os personagens são enviados para o componente `Characters`, que renderiza uma lista de `CharCard`s.
- `CharCard` aplica truncamento do nome (> 12 caracteres) e cores condicionais de acordo com `status`.
- Ícones de seta (react-icons) chamam `previousPage` e `nextPage`, atualizando `currentPage` com `info.prev` e `info.next` quando disponíveis.

### Possíveis melhorias
- Campo de busca por nome, filtros por status/espécie.
- Indicadores de carregamento e mensagens de erro amigáveis.
- Scroll infinito ou paginação mais visível.
- Testes unitários de componentes e acessibilidade.
- Melhoria de acessibilidade (texto alternativo descritivo nas imagens, foco visível nas setas, etc.).

### Créditos
- API: https://rickandmortyapi.com/

---

## English

### Overview
This is a React front-end (Create React App, React 18) that fetches characters from the Rick and Morty API and displays them in a grid of cards. Pagination is handled via arrow icons, and card colors reflect the character status (alive vs others).

### Tech stack
- React 18 (Create React App)
- Fetch API for HTTP requests
- CSS Modules for component-scoped styling
- React Icons (navigation arrows)
- Google Fonts (Nunito)

### Features
- Character listing from the Rick and Morty API with pagination.
- Navigate between pages using left/right arrows.
- Character card with:
  - Image
  - Name truncated when longer than 12 characters
  - Species
  - Background/title colors based on status (Alive vs others)

### Requirements
- Node.js 14+ and npm

### Setup and run
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm start
   ```
   Open http://localhost:3000 in your browser.

3. Production build:
   ```bash
   npm run build
   ```

4. Tests:
   ```bash
   npm test
   ```

### Available scripts
- `npm start` — start development mode
- `npm test` — run tests in watch mode
- `npm run build` — create production build
- `npm run eject` — eject CRA config (irreversible)

### Folder structure
```
rickAndMorie/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   ├── components/
│   │   ├── Characters/
│   │   │   ├── index.jsx
│   │   │   └── style.module.css
│   │   └── CharCard/
│   │       ├── index.jsx
│   │       └── style.module.css
│   └── ...
└── package.json
```

### How it works (short technical summary)
- The `currentPage` state starts at `https://rickandmortyapi.com/api/character/?page=1`.
- A `useEffect` watches `currentPage` and performs a `fetch` to obtain `results` (characters) and `info` (pagination links `prev`/`next`).
- Characters are passed to the `Characters` component, which renders a list of `CharCard`s.
- `CharCard` truncates names longer than 12 characters and applies conditional colors according to `status`.
- Arrow icons (react-icons) call `previousPage` and `nextPage`, updating `currentPage` with `info.prev` and `info.next` when available.

### Future improvements
- Search by name and filters by status/species.
- Loading indicators and friendlier error messages.
- Infinite scroll or clearer pagination UI.
- Component unit tests and accessibility improvements.
- Better accessibility (descriptive image alt text, visible focus on arrows, etc.).

### Acknowledgments
- API: https://rickandmortyapi.com/
