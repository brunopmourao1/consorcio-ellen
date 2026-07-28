# Consórcio Ellen

Site institucional de consultoria estratégica em consórcios para Ellen Stevão. React 19 + Vite 8, com blog gerenciado via Sanity CMS.

**Produção:** https://consorcio-ellen.vercel.app

## Stack

- React 19 + Vite 8 + React Router DOM 7
- Blog via [Sanity CMS](https://sanity.io) (headless) — projeto irmão em `../ellen-studio`
- Formulário de contato via [EmailJS](https://emailjs.com)
- SEO por página via `react-helmet-async`
- Deploy automático na [Vercel](https://vercel.com) a cada `git push` em `main`

Documentação completa em [`docs/`](docs/):
- [`docs/PRD.md`](docs/PRD.md) — visão de produto e requisitos
- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) — arquitetura técnica e estrutura de pastas
- [`docs/STYLE_GUIDE.md`](docs/STYLE_GUIDE.md) — design tokens e convenções visuais
- [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) — infraestrutura, custos e fluxo de deploy
- [`docs/PLANO_DE_ACAO.md`](docs/PLANO_DE_ACAO.md) — histórico de bugs, ajustes e pendências

## Rodando localmente

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # build de produção em dist/
npm run preview   # serve o build de produção localmente
```

## Blog (Sanity CMS)

O conteúdo do blog é editado em um Studio separado, não neste repositório:

```bash
cd ../ellen-studio
npx sanity dev     # Studio local em http://localhost:3333
npx sanity deploy  # publica em consorcio-ellen.sanity.studio
```

Só posts com status **Publish** (não rascunho) aparecem no site.
