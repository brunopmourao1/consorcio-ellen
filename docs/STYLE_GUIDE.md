# Guia de Estilo Técnico: Consórcio Ellen

Este guia documenta os tokens de design realmente usados em `src/styles/tokens.css`, para garantir consistência visual.

## 1. Design Tokens (Variáveis CSS)

### 1.1 Cores (Paleta Boutique Financeira)
```css
:root {
  /* Cores Principais */
  --color-primary: #000000;               /* Preto Soberano */
  --color-on-primary: #FFFFFF;
  --color-primary-container: #0D1C32;     /* Navy — cor de destaque principal (headlines, fundos escuros) */

  /* Acentos */
  --color-accent: #E9C176;                /* Dourado Editorial */
  --color-accent-dim: #5D4201;

  /* Superfícies */
  --color-background: #FCF9F8;            /* Off-white estilo Vellum */
  --color-surface: #FCF9F8;
  --color-surface-container: #F0EDED;
  --color-surface-container-low: #F6F3F2;
  --color-surface-container-high: #EAE7E7;
  --color-surface-container-highest: #E5E2E1;

  /* Textos */
  --color-text-primary: #1B1B1B;          /* Carvão */
  --color-text-secondary: #44474D;
  --color-text-muted: #75777E;

  /* Feedback */
  --color-error: #BA1A1A;
}
```

> A paleta de referência de negócio é **Navy `#0D1C32`, Dourado `#E9C176`, Off-white `#FCF9F8`, Preto `#000000`** — os nomes das variáveis (`--color-primary`, `--color-primary-container`, etc.) seguem a convenção de tokens do Material Design gerada pelo Stitch, não a hierarquia visual literal (ex: `--color-primary-container`, não `--color-primary`, é o Navy usado como destaque).

Variáveis complementares (usadas em `Contact.css`, `Blog.css`, `Solutions.css`):
```css
--color-on-primary-fixed-variant: #39475F;
--color-tertiary-fixed-dim: #E9C176;
--color-on-primary-container: #39475F;
--color-secondary-container: #E5E2E1;
--color-on-secondary-container: #1B1B1B;
--color-on-tertiary-fixed: #5D4201;
--color-on-surface-variant: #44474D;
--color-tertiary-fixed: #FFE9B7;
```

### 1.2 Arredondamento e Espaçamento
```css
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 8px;
--radius-full: 9999px;

--spacing-xs: 4px;
--spacing-sm: 8px;
--spacing-md: 16px;
--spacing-lg: 24px;
--spacing-xl: 32px;
--spacing-3xl: 64px;
```

### 1.3 Tipografia (Hierarquia)
- **Títulos (Serifa)**: `Newsreader` (Google Fonts, `ital,opsz,wght` variável).
  - Uso: Headlines, nomes de seções, itálico editorial (`.serif-italic`).
- **Corpo e UI (Sans)**: `Manrope` (Google Fonts, `wght@200..800`).
  - Uso: Parágrafos, labels de formulários, botões, navegação.
- Ambas carregadas no `index.html` com `rel="preconnect"` pros domínios do Google Fonts (melhora performance de carregamento).

## 2. Regras de Interface (The "Boutique" Rules)

### 2.1 Separação de Seções (The No-Line Rule)
- Proibido: `border-bottom: 1px solid` para separar seções.
- Permitido: alternar o `background-color` entre `var(--color-background)` e `var(--color-surface-container)` (ou variantes) entre seções consecutivas.
- Sombras: apenas "atmosféricas" (blur alto, opacidade baixa) — ex: `box-shadow: 0 10px 30px rgba(27, 27, 27, 0.06);`.

### 2.2 Arredondamento (Roundness)
- Padrão de cards/imagens: `--radius-sm` (2px) — visual afiado, não arredondado.
- Botões: raio pequeno, consistente com o restante (ver `.btn-primary`, `.btn-heavy-cta`).

### 2.3 Micro-animações (Componente `FadeIn`)
- Efeito: fade-in + slide de 20px (direção configurável: `up`, `down`, `left`, `right`).
- Curva: `cubic-bezier(0.2, 0, 0, 1)`.
- Duração padrão: `800ms`.
- Disparo: `IntersectionObserver` (threshold `0.1`) — anima na primeira vez que o elemento entra na viewport, depois para de observar.
- Stagger: elementos irmãos recebem `delay` cumulativo (ex: `idx * 150`) pra entrada escalonada.

## 3. Grid, Layout e Responsividade
- **Containers**: `.container`, `.container-7xl` — largura máxima consolidada (ver `global.css`); evitar recriar classes de container duplicadas por página.
- **Gutter**: `32px` no desktop / reduzido em mobile conforme breakpoints de cada página.
- **Breakpoints em uso**: `1024px` (tablet/laptop menor), `768px` (tablet/mobile grande), `480px` (mobile pequeno).
- **Grids com altura desigual**: ao colocar dois cards lado a lado numa mesma linha de grid, sempre garantir `height: 100%` no card (além de `min-height`) — senão o card com menos conteúdo não acompanha a altura do vizinho (bug já corrigido em `Solutions.css` e `Specialist.css`).
- **Touch devices**: usar `@media (hover: none)` pra remover efeitos `grayscale`/hover que dependem de mouse, já que não existe hover real em touch.

## 4. Convenções de Imagens
- Fotos reais (não ilustrações/stock genérico) — mantém a identidade "boutique financeira editorial".
- Efeito padrão: `filter: grayscale(100%)`, removendo no hover (desktop) ou via `@media (hover: none)` (mobile).
- Imagens novas devem ir em `src/assets/images/` e ser importadas via ES module — o `vite-plugin-image-optimizer` cuida da compressão no build automaticamente.
