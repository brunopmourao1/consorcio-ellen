# Arquitetura do Sistema: Consórcio Ellen

## 1. Stack Tecnológica
- **Linguagem**: JavaScript (ES6+).
- **Framework**: [React 19](https://reactjs.org/) via [Vite 8](https://vitejs.dev/).
- **Roteamento**: `react-router-dom` v7.
- **CMS do Blog**: [Sanity.io](https://sanity.io) (headless), consumido via `@sanity/client` + GROQ.
- **Formulário de Contato**: [EmailJS](https://emailjs.com) (`@emailjs/browser`), client-side puro (sem backend próprio).
- **SEO**: `react-helmet-async` para title/description/Open Graph por página.
- **Estilização**: Vanilla CSS por página/componente + `src/styles/tokens.css` (design tokens centralizados) e `src/styles/global.css` (reset e regras globais).
- **Ícones**: Lucide React + Material Symbols (Google Fonts) via classes utilitárias.
- **Otimização de imagens**: `vite-plugin-image-optimizer` (+ `sharp`) no build — comprime os PNGs de `src/assets/images/` automaticamente, sem alterar os arquivos-fonte.

## 2. Estrutura de Pastas (atual)
```text
ellen/
├── docs/                       # Documentação do projeto
├── public/                     # Ativos estáticos servidos como estão
│   ├── favicon.svg
│   ├── icons.svg
│   ├── og-image.png            # Imagem de compartilhamento (Open Graph)
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/images/          # Fotos e imagens fonte (processadas no build)
│   ├── components/
│   │   ├── layout/             # Navigation.jsx, Footer.jsx
│   │   ├── ui/                 # FadeIn.jsx, ServiceCard.jsx, SEO.jsx
│   │   └── utils/              # ScrollToTop.jsx
│   ├── lib/
│   │   └── sanityClient.js     # Cliente Sanity (@sanity/client) + urlFor (@sanity/image-url)
│   ├── pages/
│   │   ├── Home/
│   │   ├── Specialist/         # rota /especialista
│   │   ├── Solutions/          # rota /solucoes
│   │   ├── Blog/               # rota /blog — lista posts via Sanity (GROQ)
│   │   ├── BlogPost/           # rota /blog/:slug — post individual (Portable Text)
│   │   ├── Contact/            # rota /contato
│   │   └── Legal/              # rotas /termos e /privacidade
│   ├── styles/
│   │   ├── tokens.css          # Design tokens (cores, radius, spacing)
│   │   └── global.css          # Reset e regras globais
│   ├── App.jsx                 # Roteamento central (react-router-dom)
│   └── main.jsx                # Entry point (envolve App com HelmetProvider)
├── vercel.json                 # Rewrite catch-all para SPA (evita 404 no F5)
├── vite.config.js              # Plugins Vite (React + otimização de imagens)
└── index.html
```

`src/hooks/` e `src/utils/` existem mas estão vazios — não foram usados; as animações vivem direto em `FadeIn.jsx` (ver seção 4).

## 3. Estratégia de Navegação (Routing)
- `react-router-dom` (`BrowserRouter`) para navegação entre páginas.
- Rota dinâmica `/blog/:slug` para posts individuais, buscando o conteúdo do Sanity pelo slug.
- `ScrollToTop.jsx` garante que toda troca de rota reinicia a página no topo.
- `vercel.json` com rewrite `"/(.*)" → "/index.html"` — sem isso, acessar uma rota interna direto (ou dar F5 nela) retorna 404 na Vercel, já que não existe arquivo físico nesses caminhos.

## 4. Fluxo de Dados e Estado
- **Formulários**: Estado local via `useState` (Contact.jsx).
- **Conteúdo do Blog**: Buscado em tempo de execução do Sanity via `sanityClient.fetch(GROQ_QUERY)` dentro de `useEffect`, sem build estático/SSG.
- **Animações**: `FadeIn.jsx` usa `IntersectionObserver` diretamente (não é um hook separado) para disparar fade-in + slide quando o elemento entra na viewport.
- **SEO por página**: cada página renderiza `<SEO title=... description=... path=... />`, que usa `react-helmet-async` pra injetar `<title>`, `<meta description>`, canonical e Open Graph/Twitter tags únicos por rota.

## 5. Integração com Sanity CMS (Blog)
- Projeto Sanity irmão em `C:\projetos\ellen-studio` (fora deste repositório) — é o Studio (editor de conteúdo), publicado em `https://consorcio-ellen.sanity.studio`.
- `projectId`/`dataset` ficam hardcoded em `src/lib/sanityClient.js` — não são segredos, ficam visíveis em qualquer request do navegador de qualquer forma.
- CORS do Sanity liberado para `localhost:3333`, `localhost:5173` e o domínio de produção da Vercel.

## 6. Estratégia de Assets (Imagens)
- Fotos reais em `src/assets/images/` (importadas via ES modules, processadas pelo Vite no build).
- `vite-plugin-image-optimizer` comprime automaticamente PNG/JPG no build (~65% de redução média), sem exigir passo manual.
- Imagens do Blog vêm do Sanity (`urlFor()` gera a URL otimizada via CDN de imagens do Sanity).
