# Plano de Ação — Consórcio Ellen
**Projeto:** `ellen_app` — React + Vite  
**Referência no servidor MCP:** Projeto ID `14988207328583115709`  
**Última atualização:** 2026-07-23  

---

## Status Geral

| Categoria | Total de itens | Concluídos | Pendentes |
|---|---|---|---|
| Bugs Críticos | 4 | 4 | 0 |
| Bugs Funcionais | 4 | 4 | 0 |
| Inconsistências de Design | 6 | 5 | 1 |
| Responsividade | 10 | 10 | 0 |
| Hospedagem & Contato | 2 | 2 | 0 |
| **Total** | **26** | **25** | **1** |

**Resumo da atualização de 2026-07-23:**
- Site já está publicado e no ar na Vercel (HC-01 concluído — confirmado pelo usuário; os commits de fix de case-sensitivity de imagens são evidência do pipeline de build Linux da Vercel).
- BR-05 e BR-08, marcados como pendentes na última revisão do documento, na verdade já estavam implementados no código (mismatch entre doc e código — corrigido aqui).
- BQ-04 resolvido: links "Ler Artigo" (Blog) e cards da seção "Pensamento Editorial" (Home) que apontavam para `/blog/:id` inexistente foram desativados (evitava 404). Decisão do usuário: opção simples, sem criar páginas de artigo por ora.
- BF-03 resolvido: botão "Baixar Prospecto de Soluções" removido (não existe PDF ainda).
- BD-03 resolvido: `.hero-container-standard` consolidado em `.container-7xl` (Home.jsx, Home.css, global.css).
- BD-04 resolvido: `background-color: var(--color-background)` adicionado explicitamente a `.editorial-thought-preview`.
- BD-06 resolvido: favicon substituído pelo padrão roxo do Stitch/Vite por um monograma "CE" em navy/dourado (`public/favicon.svg`).
- **Novo item concluído fora do plano original:** otimização de imagens no build via `vite-plugin-image-optimizer` + `sharp` — PNGs brutos de `src/assets/images/` (~17MB) reduzidos em ~66% no `dist/` final, sem alterar os arquivos-fonte.
- **Único item pendente:** BD-05 (newsletter do Blog sem backend — falta decidir entre EmailJS ou Mailchimp/Brevo).
- **Ação separada, fora do escopo de código:** BQ-03/HC-02 tem o código do EmailJS pronto, mas os placeholders `SEU_SERVICE_ID` / `SEU_TEMPLATE_ID` / `SUA_PUBLIC_KEY` em `Contact.jsx` ainda aguardam as credenciais reais da conta da Ellen — sem isso, o formulário de contato não envia e-mails de verdade em produção.

Legenda: ⬜ Pendente · 🔄 Em progresso · ✅ Concluído

---

## Parte 1 — Auditoria de Qualidade

### Bugs Críticos

#### BQ-01 ✅ Variáveis CSS não definidas em `tokens.css`
**Prioridade:** Urgente  
**Arquivos afetados:** `Contact.css`, `Blog.css`, `Solutions.css`  
**Impacto:** Cores fallback incorretas — labels, radio buttons, badges e textos secundários ficam sem cor definida silenciosamente.

Variáveis usadas mas ausentes de `tokens.css`:

| Variável | Usada em | Valor sugerido |
|---|---|---|
| `--color-on-primary-container` | Contact.css, Blog.css | `#39475F` (mesmo que `--color-on-primary-fixed-variant`) |
| `--color-secondary-container` | Contact.css | `#E5E2E1` (mesmo que `--color-surface-container-highest`) |
| `--color-on-secondary-container` | Contact.css | `#1B1B1B` (mesmo que `--color-text-primary`) |
| `--color-on-tertiary-fixed` | Contact.css | `#5D4201` (mesmo que `--color-accent-dim`) |
| `--color-on-surface-variant` | Blog.css, Contact.css, Solutions.css | `#44474D` (mesmo que `--color-text-secondary`) |
| `--color-tertiary-fixed` | Blog.css | `#FFE9B7` |

**Correção:** Adicionar as 6 variáveis em `src/styles/tokens.css`.

---

#### BQ-02 ✅ Home sem `padding-top` para compensar navbar fixa
**Prioridade:** Urgente  
**Arquivo:** `src/pages/Home/Home.css`  
**Impacto:** A navbar fixa (90px) cobre o topo do Hero se o fundo da navbar mudar ou o componente for alterado. Funciona só por coincidência de cores.

**Correção:** Adicionar `padding-top: 90px` à classe `.home-page-v6`.

---

#### BQ-03 ✅ Formulário de contato não envia dados a lugar nenhum
**Prioridade:** Urgente  
**Arquivo:** `src/pages/Contact/Contact.jsx` — função `handleSubmit` na linha 15  
**Impacto:** Nenhuma mensagem chega à Ellen. Dados do visitante desaparecem.

**Correção:** Integrar com **EmailJS** (solução client-side, gratuita até 200 emails/mês):
1. Criar conta em emailjs.com
2. Conectar conta Gmail da Ellen
3. Criar template de email
4. Substituir `handleSubmit` pela chamada `emailjs.send()`
5. Adicionar feedback visual (loading, sucesso, erro) no botão de envio

---

#### BQ-04 ⬜ Links do Blog apontam para rotas inexistentes
**Prioridade:** Urgente  
**Arquivos:** `src/pages/Blog/Blog.jsx:127`, `src/App.jsx`  
**Impacto:** Clicar em "Ler Artigo" leva a página em branco (rota `/blog/:id` não existe).

**Opções de correção:**
- **Opção A (simples):** Remover o `Link` e tornar o card não-clicável por ora
- **Opção B (completo):** Criar componente `BlogPost` e adicionar rota `/blog/:id` no `App.jsx`

---

### Bugs Funcionais

#### BF-01 ✅ `ServiceCard` usa `<a>` em vez de `<Link>` (recarrega a página)
**Prioridade:** Alta  
**Arquivo:** `src/components/ui/ServiceCard.jsx:9`  
**Impacto:** Toda vez que o usuário clica em "Ver Detalhes" nos cards da Home, a página recarrega completamente, perdendo o estado da SPA.

**Correção:** Substituir `<a href={link}>` por `<Link to={link}>` e importar `Link` do react-router-dom.

---

#### BF-02 ✅ Botões CTA sem ação na página Especialista
**Prioridade:** Alta  
**Arquivo:** `src/pages/Specialist/Specialist.jsx:149-151`  
**Impacto:** "Falar com a Especialista" e "Conhecer Soluções" são `<button>` sem `onClick` — clicar não faz nada.

**Correção:**
```jsx
// De:
<button className="btn-primary">Falar com a Especialista</button>
<button className="btn-secondary">Conhecer Soluções</button>

// Para:
<Link to="/contato" className="btn-primary">Falar com a Especialista</Link>
<Link to="/solucoes" className="btn-secondary">Conhecer Soluções</Link>
```

---

#### BF-03 ⬜ "Baixar Prospecto" sem função na página Soluções
**Prioridade:** Média  
**Arquivo:** `src/pages/Solutions/Solutions.jsx:195`  
**Impacto:** Botão morto — não baixa nada, não redireciona a lugar algum.

**Opções de correção:**
- **Opção A:** Remover o botão temporariamente
- **Opção B:** Criar um PDF de prospecto e vincular com `<a href="/prospecto.pdf" download>`

---

#### BF-04 ✅ Copyright com ano fixo no Footer
**Prioridade:** Baixa  
**Arquivo:** `src/components/layout/Footer.jsx:48`

**Correção:**
```jsx
// De:
<span>© 2024 Consórcio Ellen</span>

// Para:
<span>© {new Date().getFullYear()} Consórcio Ellen</span>
```

---

### Inconsistências de Design

#### BD-01 ✅ Imagens locais existem mas URLs externas são usadas em produção
**Prioridade:** Alta  
**Impacto:** URLs do Google (`lh3.googleusercontent.com`) podem expirar, quebrando TODAS as imagens do site sem aviso.

Imagens locais disponíveis em `/src/assets/images/`:

| Arquivo local | Usado onde |
|---|---|
| `ellen-stevao.png` | Home (hero), Specialist (hero e biografia) |
| `real-estate.png` | Solutions (bento imobiliário) |
| `car.png` | Solutions (bento veículos) |
| `fleet.png` | Solutions (bento frotas) |
| `wealth.png` | Solutions (bento ativos) |
| `blog-1.png` | Blog (artigo 1) |
| `blog-2.png` | Blog (artigo 2) |
| `blog-3.png` | Blog (artigo 3) |

**Correção:** Importar os assets locais e substituir todas as URLs externas.

---

#### BD-02 ✅ Classe `.container` duplicada em dois arquivos CSS
**Prioridade:** Baixa  
**Arquivos:** `src/pages/Specialist/Specialist.css:11` e `src/pages/Solutions/Solutions.css:7`  
**Impacto:** Redundância com risco de conflito futuro se os valores divergirem.

**Correção:** Mover a definição única para `src/styles/global.css` e remover das duas páginas.

---

#### BD-03 ⬜ Duas classes de container idênticas na Home
**Prioridade:** Baixa  
**Arquivo:** `src/pages/Home/Home.css`  
**Impacto:** `.hero-container-standard` e `.container-7xl` têm exatamente o mesmo CSS mas nomes diferentes. Confusão de manutenção.

**Correção:** Usar apenas `.container-7xl` em toda a Home e remover `.hero-container-standard`.

---

#### BD-04 ⬜ Seção "Pensamento Editorial" (Home) sem background definido
**Prioridade:** Baixa  
**Arquivo:** `src/pages/Home/Home.css:287`  
**Impacto:** A seção `.editorial-thought-preview` herda `#FCF9F8` do body, mas não tem declaração explícita. Se o global mudar, o ritmo visual da alternância de superfícies quebra.

**Correção:** Adicionar `background-color: var(--color-background)` explicitamente à classe.

---

#### BD-05 ⬜ Newsletter do Blog sem backend
**Prioridade:** Média  
**Arquivo:** `src/pages/Blog/Blog.jsx:144`  
**Impacto:** O formulário de newsletter apenas bloqueia o submit — não salva o email em lugar nenhum.

**Opções de correção:**
- **Opção A:** Integrar com Mailchimp ou Brevo (gratuitos para listas pequenas)
- **Opção B:** Usar mesmo EmailJS do contato para receber o email de inscrição

---

#### BD-06 ⬜ Favicon é o padrão do Vite
**Prioridade:** Baixa  
**Arquivo:** `/public/favicon.svg`  
**Impacto:** O favicon exibido na aba do browser não representa a marca Consórcio Ellen.

**Correção:** Criar um favicon personalizado (initials "CE" em navy com dourado, ou logotipo) e substituir `/public/favicon.svg`.

---

## Parte 2 — Auditoria de Responsividade

### Contexto
O projeto deve funcionar com **precisão em desktop e mobile**. O React detecta o tamanho de tela via CSS media queries (abordagem padrão), sem necessidade de detecção por User-Agent no JavaScript. A adaptação é automática via CSS responsivo.

Breakpoints em uso no projeto:

| Breakpoint | Propósito |
|---|---|
| `min: 1025px` | Desktop padrão — layout base |
| `max: 1024px` | Tablet e laptops menores |
| `max: 768px` | Tablet portrait e mobile grande |
| `max: 480px` | *(não existe ainda)* Mobile padrão |
| `max: 375px` | *(não existe ainda)* Mobile pequeno (iPhone SE) |

---

### Problemas de Responsividade

#### BR-01 ✅ Paddings verticais nunca reduzem no mobile (todas as páginas)
**Prioridade:** Urgente  
**Impacto:** Espaços em branco gigantes entre seções em telas pequenas (120px = ~45% da altura de um iPhone SE).

Seções afetadas por página:

**Home:**
- `.methodology-section` — 120px → mobile: 64px
- `.specialist-preview` — 120px → mobile: 64px
- `.solutions-brief` — 120px → mobile: 64px
- `.editorial-thought-preview` — 120px → mobile: 64px
- `.fundamentals-editorial` — 120px → mobile: 64px

**Specialist:**
- `.specialist-hero` — 100px/120px → mobile: 60px
- `.credentials-ticker` — margin-bottom 120px → mobile: 64px
- `.biography-section` — padding-bottom 160px → mobile: 80px
- `.manifesto-section` — 120px → mobile: 64px
- `.cta-banner` — 120px → mobile: 64px

**Solutions:**
- `.solutions-hero` — 100px/80px → mobile: 60px
- `.solutions-bento` — padding-bottom 120px → mobile: 64px
- `.solutions-narrative` — padding-bottom 120px → mobile: 64px

**Blog:**
- `.blog-section-header` — margin-bottom 80px → mobile: 48px
- `.featured-article-grid` — margin-bottom 120px → mobile: 64px
- `.article-grid` — margin-bottom 120px → mobile: 64px

---

#### BR-02 ✅ Badge flutuante do Hero quebra no mobile
**Prioridade:** Alta  
**Arquivo:** `src/pages/Home/Home.css:111`

```css
/* Problema: */
.hero-floating-badge-v6 {
  position: absolute;
  bottom: -24px;
  left: -24px; /* sai 24px para fora do viewport no mobile */
}
```

**Correção:** No mobile, remover os offsets negativos e reposicionar o badge dentro da imagem ou abaixo dela.

---

#### BR-03 ✅ Efeito grayscale quebrado em dispositivos touch
**Prioridade:** Alta  
**Impacto:** Em mobile não existe `hover` — imagens com `filter: grayscale(100%)` ficam **permanentemente cinzas**, perdendo a foto real da Ellen e das categorias.

Elementos afetados:

| Arquivo | Elemento | Resultado no mobile |
|---|---|---|
| `Home.css` | `.preview-image.grayscale-hover` | Foto da Especialista sempre cinza |
| `Specialist.css` | `.portrait-image` | Retrato da Ellen sempre cinza |
| `Solutions.css` | `.hero-image-container img` | Imagem do hero sempre cinza |
| `Solutions.css` | `.item-footer-image img` | Imagens dos bento sempre cinzas |
| `Blog.css` | `.featured-card img` | Foto destaque sempre cinza |

**Correção:** Usar a media query `(hover: none)` para remover grayscale em dispositivos touch:
```css
@media (hover: none) {
  .grayscale-hover, .portrait-image, ... {
    filter: grayscale(0%);
  }
}
```

---

#### BR-04 ✅ Padding interno dos cards não reduz no mobile
**Prioridade:** Alta  
**Arquivos:** `Solutions.css`, `Blog.css`

| Elemento | Padding atual | Problema | Mobile ideal |
|---|---|---|---|
| `.bento-item` | `48px` | Em 375px sobra 279px para conteúdo | `24px` |
| `.narrative-box` | `80px → 48px` (1024px) | Sem regra para 768px | `24px` |
| `.newsletter-container` | `48px` | Sem regra mobile | `32px` |

---

#### BR-05 ⬜ Container padding estreito em telas muito pequenas
**Prioridade:** Média  
**Impacto:** Em 375px com `padding: 0 32px`, sobram apenas 311px de conteúdo — muito justo para grids e fontes grandes.

**Correção:** Adicionar em `global.css`:
```css
@media (max-width: 480px) {
  .container, .container-7xl, .hero-container-standard {
    padding: 0 20px;
  }
}
```

---

#### BR-06 ✅ Tamanho de fonte dos heroes excessivo em mobile pequeno
**Prioridade:** Média  
**Arquivos:** `Specialist.css:44`, `Blog.css:28`

```css
/* Problema: clamp usa 3.5rem como mínimo — 56px em 320px de tela */
.hero-headline { font-size: clamp(3.5rem, 8vw, 6rem); }
.blog-headline { font-size: clamp(3.5rem, 8vw, 6rem); }
```

**Correção:** Reduzir o valor mínimo do clamp para mobile:
```css
@media (max-width: 768px) {
  .hero-headline { font-size: clamp(2.5rem, 8vw, 4rem); }
  .blog-headline { font-size: clamp(2.5rem, 8vw, 4rem); }
}
```

---

#### BR-07 ✅ Área de toque de links pequenos abaixo do mínimo recomendado
**Prioridade:** Média  
**Impacto:** Apple HIG e Material Design recomendam área mínima de toque de **44x44px**. Links pequenos são difíceis de acionar com o dedo.

Links com área de toque insuficiente:

| Elemento | Font-size atual | Problema |
|---|---|---|
| `.service-link-v2` ("Ver Detalhes") | `0.625rem` (~10px) | Muito pequeno |
| `.preview-link-cta` ("Ler Biografia") | `0.75rem` + ícone | Pequeno |
| `.editorial-link-alt` ("Ver Blog") | `0.75rem` | Pequeno |
| `.article-link` ("Ler Artigo") | `0.75rem` | Pequeno |

**Correção:** Em mobile, adicionar `padding: 12px 0` nos links pequenos para expandir a área de toque sem alterar o visual.

---

#### BR-08 ⬜ `letter-spacing: -0.06em` do Hero da Home agressivo no mobile
**Prioridade:** Baixa  
**Arquivo:** `src/pages/Home/Home.css:50`  
**Impacto:** Em fontes grandes (56px+) com tracking muito negativo, as letras se tocam em telas de baixa resolução — dificulta leitura.

**Correção:**
```css
@media (max-width: 768px) {
  .hero-headline-luxe {
    letter-spacing: -0.03em;
  }
}
```

---

#### BR-09 ⬜ `.container` duplicado em CSS separados
**Prioridade:** Baixa  
*(Ver BD-02 — mesmo item, duplo impacto)*

---

#### BR-10 ✅ Breakpoints adicionais necessários para 480px e 320px
**Prioridade:** Média  
**Impacto:** O projeto tem breakpoints em 1024px e 768px, mas nada abaixo. Telas menores (iPhone SE: 375px, Galaxy S: 360px) não têm ajustes específicos.

**Correção:** Criar bloco `@media (max-width: 480px)` em cada CSS das páginas principais com ajustes de fonte, padding e layout específicos para mobile pequeno.

---

## Parte 3 — Hospedagem e Recebimento de Contatos

### HC-01 ⬜ Definir plataforma de hospedagem
**Prioridade:** Alta (necessário antes de publicar)

**Recomendação: Vercel**
- Gratuito para projetos pequenos/pessoais
- Conecta ao repositório GitHub — deploy automático a cada `git push`
- HTTPS automático e CDN global incluídos
- Suporte nativo para projetos Vite/React
- Domínio customizado gratuito (ex: `consorcioellen.com.br`)

**Passos:**
1. Criar repositório no GitHub com o projeto
2. Criar conta em vercel.com
3. Importar repositório
4. Configurar domínio customizado (opcional)
5. Deploy automático configurado

**Alternativa:** Netlify (mesma qualidade, mesma facilidade)

---

### HC-02 ✅ Integrar formulário de contato com envio real de email
**Prioridade:** Alta (necessário antes de publicar)

**Recomendação: EmailJS**
- Client-side — sem necessidade de backend ou servidor
- Gratuito até 200 emails/mês
- O email chega formatado no Gmail da Ellen

**Passos:**
1. Criar conta em emailjs.com
2. Conectar conta Gmail
3. Criar template de email com os campos do formulário
4. Instalar: `npm install @emailjs/browser`
5. Substituir `handleSubmit` em `Contact.jsx` pela integração
6. Adicionar feedback visual (spinner + mensagem de sucesso/erro)

**Alternativa:** Formspree (ainda mais simples, apenas muda o `action` do form, sem código)

---

## Ordem de Execução Sugerida

### Sprint 1 — Correções Urgentes (antes de qualquer publicação)
1. BQ-01 — Variáveis CSS ausentes em `tokens.css`
2. BR-01 — Paddings verticais no mobile
3. BR-03 — Grayscale em dispositivos touch
4. BQ-03 — Integrar EmailJS no formulário de contato
5. BD-01 — Substituir imagens externas por imagens locais

### Sprint 2 — Funcionalidade e Navegação
6. BF-01 — `ServiceCard` com `<Link>` correto
7. BF-02 — Botões CTA da Especialista
8. BQ-02 — `padding-top` na Home
9. BR-02 — Badge flutuante no mobile
10. BR-04 — Padding interno dos cards no mobile

### Sprint 3 — Refinamento e Qualidade
11. BR-05 — Container padding em telas pequenas
12. BR-06 — Fontes dos heroes no mobile
13. BR-07 — Área de toque dos links pequenos
14. BR-08 — Letter-spacing no mobile
15. BR-10 — Breakpoints 480px e 320px
16. BF-04 — Copyright dinâmico no Footer

### Sprint 4 — Publicação e Pós-lançamento
17. HC-01 — Configurar Vercel e repositório GitHub
18. HC-02 — Confirmar funcionamento do EmailJS em produção
19. BQ-04 — Decidir sobre rotas de artigos individuais no Blog
20. BF-03 — Criar PDF do prospecto ou remover botão
21. BD-06 — Criar favicon personalizado
22. BD-05 — Decidir plataforma de newsletter (Mailchimp/Brevo)

---

## Alterações Locais Não Presentes no Servidor MCP

Estas customizações foram feitas no projeto local e **não existem nas telas do Stitch**:

| Item | Detalhe |
|---|---|
| Dados reais de contato no Footer | Email, WhatsApp e Instagram da Ellen |
| Navigation com hamburger mobile | Menu overlay full-screen animado |
| `ScrollToTop.jsx` | Rola ao topo ao trocar de rota |
| `FadeIn.jsx` | Animações de entrada com IntersectionObserver |
| `tokens.css` | Sistema de design tokens centralizado |
| Rotas `/privacidade` e `/termos` separadas | O MCP tem uma única tela Legal |
| `Legal.jsx` | Página completa implementada |

---

## Telas do Servidor MCP vs. Páginas do Projeto

| Tela MCP | Página React | Status |
|---|---|---|
| Home - Boutique Financeira (Desktop) | `/` — `Home.jsx` | Implementado |
| Home - Mobile | `/` — `Home.jsx` | Parcial (ver BR-01, BR-02) |
| A Especialista - Perfil Técnico (Desktop) | `/especialista` — `Specialist.jsx` | Implementado |
| A Especialista - Mobile | `/especialista` — `Specialist.jsx` | Parcial |
| Soluções - Gestão de Ativos (Desktop) | `/solucoes` — `Solutions.jsx` | Implementado |
| Soluções - Mobile | `/solucoes` — `Solutions.jsx` | Parcial |
| Blog - Pensamento Editorial (Desktop) | `/blog` — `Blog.jsx` | Implementado |
| Blog - Mobile | `/blog` — `Blog.jsx` | Parcial |
| Termos e Privacidade (Desktop) | `/termos` e `/privacidade` — `Legal.jsx` | Implementado |
| Termos e Privacidade - Mobile | idem | Bom |
| Contato - Estudo de Viabilidade (Desktop) | `/contato` — `Contact.jsx` | Implementado (sem envio real) |
| Contato - Mobile | `/contato` — `Contact.jsx` | Parcial |
| PRD: Consórcio Ellen | `docs/PRD.md` | Referência apenas |
