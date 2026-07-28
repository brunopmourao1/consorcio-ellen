# PRD: Consórcio Ellen - Consultoria Estratégica

> **Status (Julho 2026):** produto no ar em produção (`consorcio-ellen.vercel.app`). Todas as seções abaixo estão implementadas; ver `docs/PLANO_DE_ACAO.md` para o histórico de bugs/ajustes e `docs/DEPLOYMENT.md` para a infraestrutura real.

## 1. Visão Geral do Produto
O projeto "Consórcio Ellen" é uma plataforma de consultoria financeira premium para Ellen Stevão. O objetivo é posicionar o consórcio não apenas como um meio de compra, mas como uma ferramenta de **alavancagem patrimonial** e **inteligência financeira**, focando em um público de alta renda e investidores.

## 2. Objetivos de Negócio
- Consolidar a autoridade de Ellen Stevão (Especialista Insper).
- Converter leads qualificados por meio de um atendimento consultivo de alta viabilidade técnica.
- Educar o mercado sobre consórcios estratégicos via blog editorial.

## 3. Requisitos de Experiência e Design (UX/UI)
- **Estética Boutique**: Design limpo, corporativo e com fontes serifadas elegantes.
- **Sem Bordas Sólidas**: Todas as divisões de seção devem ser feitas por tons de fundo ou sombras sutis (Regra Stitch).
- **Responsividade Total**: Experiência idêntica e otimizada entre Desktop e Mobile.
- **Animações Velvet**: Transições suaves de fade-in para reforçar a sensação de luxo.

## 4. Estrutura de Conteúdo (Sitemap)
1. **Home**: Visão geral, Proposta de Valor, Pilares e Fundamentos.
2. **A Especialista**: Trajetória, Credenciais (FEBRABAN, ABAC, BACEN, Insper).
3. **Soluções Estratégicas**:
    - Imobiliário e Alavancagem.
    - Frotas, Pesados e Agronegócio.
    - Veículos Premium e Lifestyle.
    - Estruturação de Ativos e Soluções Especiais.
4. **Blog**: Artigos educativos sobre matemática financeira do consórcio. Conteúdo gerenciado via **Sanity CMS** (headless) por uma pessoa responsável pelo blog, através de um Studio próprio (`consorcio-ellen.sanity.studio`) — o dev não escreve mais os posts diretamente no código.
5. **Contato**: Formulário consultivo detalhado (Objetivo, Momento de Decisão).
6. **Jurídico**: Termos de Uso e Política de Privacidade (Páginas P&B limpas).

## 5. Requisitos Técnicos
- **Framework**: Vite + React.
- **Estilização**: Vanilla CSS (CSS puro/moderno).
- **Gerenciamento de Estado**: React Hooks nativos (useState/useEffect).
- **CMS do Blog**: Sanity.io (headless), consumido em runtime via GROQ.
- **Formulário de Contato**: EmailJS (client-side, sem backend próprio).
- **SEO**: title/description/Open Graph únicos por página via `react-helmet-async`, `sitemap.xml` e `robots.txt`.
- **Governança**: Fidelidade absoluta aos ativos gerados no servidor StitchMCP, exceto onde customizações locais foram registradas (ver `docs/ARCHITECTURE.md`).

## 6. LGPD e Segurança
- Todos os dados coletados no formulário de contato devem ser processados em conformidade com a LGPD.
- Disclaimer obrigatório no rodapé sobre parcerias com administradoras autorizadas pelo BACEN.
