# Estratégia de Deploy e Infraestrutura: Consórcio Ellen

Este documento descreve como o site está hospedado hoje, o fluxo de publicação e os custos envolvidos.

## 1. Stack de Nuvem (implementado)

- **Hospedagem Frontend**: [Vercel](https://vercel.com/) — plano Hobby (gratuito).
- **Repositório**: GitHub, `brunopmourao1/consorcio-ellen`, branch `main` sincronizada 1:1 com `origin/main`.
- **CMS do Blog**: [Sanity.io](https://sanity.io) — Studio publicado separadamente em `https://consorcio-ellen.sanity.studio` (projeto irmão `ellen-studio`, repositório próprio `brunopmourao1/ellen-studio`, sem deploy automático via Git).
- **E-mails de Contato**: [EmailJS](https://emailjs.com) — client-side, sem servidor próprio. Conta conectada ao Gmail/iCloud da Ellen (`ellenstevao@icloud.com`).
- **Domínio**: ainda em `consorcio-ellen.vercel.app` (subdomínio gratuito da Vercel). Domínio próprio (`.com.br`) ainda não registrado — ver seção 5.
- **SSL/Segurança**: HTTPS automático via Vercel.

> Nota: uma versão anterior deste documento previa usar Resend para e-mails — a implementação real usou **EmailJS**, mais simples de configurar sem backend.

## 2. Estimativa de Custos (Julho 2026)

| Item | Serviço | Custo Mensal | Observação |
| :--- | :--- | :--- | :--- |
| **Hospedagem (site)** | Vercel (Hobby) | Grátis | Suporta até 100GB de banda |
| **CMS (Blog)** | Sanity.io (Free tier) | Grátis | Suficiente para o volume atual de posts |
| **E-mails de contato** | EmailJS (Free) | Grátis | Até 200 e-mails/mês |
| **Certificado SSL** | Vercel | Grátis | Automático |
| **Domínio `.com.br`** | Registro.br | ~R$ 40/ano | Pendente — ver seção 5 |
| **TOTAL atual** | | **R$ 0,00/mês** | |

## 3. Como funciona o fluxo de trabalho (site)

1. Alterações são feitas localmente no código (`C:\projetos\ellen`).
2. `npm run build` valida que a build de produção passa (build local antes de cada deploy).
3. `git push` para `origin/main` no GitHub.
4. A Vercel detecta o push, builda automaticamente (`vite build`, incluindo otimização de imagens) e publica — geralmente em menos de 1 minuto.
5. Não há passo manual de upload — é sempre `git push` → publicado.

## 4. Como funciona o fluxo de trabalho (Blog / Sanity)

1. A pessoa responsável pelo conteúdo loga em `https://consorcio-ellen.sanity.studio` (conta Google autorizada no projeto Sanity).
2. Cria/edita um post e clica em **Publish** (rascunhos não aparecem no site).
3. O site (`Blog.jsx`, `BlogPost.jsx`) busca os posts publicados via GROQ em tempo real — não precisa de rebuild nem redeploy do site pra um novo post aparecer.
4. Alterações no **schema** do Studio (`ellen-studio`) exigem `npx sanity deploy` pra republicar o Studio, e não afetam o deploy do site.

## 5. Pendências de infraestrutura

- [ ] **Domínio `.com.br`**: a Vercel só vende domínios internacionais (`.com`, `.app`, etc.) diretamente — domínios `.com.br` precisam ser registrados no [Registro.br](https://registro.br/) e depois apontados pra Vercel como domínio customizado (Settings → Domains). Decisão em aberto do usuário: aguardando definir o registro antes de prosseguir com Google Search Console (ver seção 6).
- [ ] Avaliada e descartada por ora: migração pra hospedagem compartilhada (Locaweb) — mantém a Vercel pela praticidade do deploy automático; a Locaweb serviria só como registradora de domínio, se necessário.

## 6. SEO e Descoberta

- Title, description, canonical e Open Graph configurados por página via `react-helmet-async` (ver `ARCHITECTURE.md`).
- `public/sitemap.xml` e `public/robots.txt` publicados.
- **Pendente**: cadastro no Google Search Console (verificar propriedade + submeter sitemap) — o usuário decidiu esperar definir o domínio final antes de verificar, pra não ter que reverificar depois de uma troca de domínio.

## 7. Manutenção e Futuro
- **Escala**: se o tráfego crescer, a Vercel escala automaticamente (dentro dos limites do plano Hobby; upgrade pago só seria necessário em volume bem alto).
- **Imagens**: `vite-plugin-image-optimizer` já garante que fotos pesadas não deixem o site lento, sem esforço manual a cada novo asset.
