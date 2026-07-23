import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../../components/ui/FadeIn';
import ServiceCard from '../../components/ui/ServiceCard';
import ellenHero from '../../assets/images/Ellen-1.png';
import ellenPreview from '../../assets/images/Ellen-2.png';
import blogImg1 from '../../assets/images/blog-1.png';
import blogImg2 from '../../assets/images/blog-2.png';
import blogImg3 from '../../assets/images/blog-3.png';
import './Home.css';

const Home = () => {
  const solutions = [
    {
      title: 'Imobiliário',
      description: 'Aquisição, construção e alavancagem através de imóveis residenciais e comerciais.',
      icon: 'home_work',
      link: '/solucoes'
    },
    {
      title: 'Frotas/Agronegócio',
      description: 'Renovação de maquinário e expansão de frotas com planejamento de fluxo de caixa.',
      icon: 'agriculture',
      link: '/solucoes'
    },
    {
      title: 'Veículos Premium',
      description: 'Estratégias específicas para o mercado de luxo e automóveis de alto valor.',
      icon: 'directions_car',
      link: '/solucoes'
    },
    {
      title: 'Estruturação de Ativos',
      description: 'Proteção patrimonial e sucessão através de cotas estruturadas de consórcio.',
      icon: 'account_balance',
      link: '/solucoes'
    }
  ];

  return (
    <div className="home-page-v6">
      <main>

        {/* 1. HERO SECTION: Reconstrução Limpa Lado-a-Lado */}
        <section className="hero-section-clean">
          <div className="container-7xl">
            <div className="hero-grid-main">

              <div className="hero-text-block">
                <FadeIn direction="up">
                  <h1 className="hero-headline-luxe">
                    Consultoria estratégica em consórcios para quem busca investir com <span className="highlight-serif">inteligência e segurança.</span>
                  </h1>
                  <Link to="/solucoes" className="hero-cta-btn-black">
                    CONHECER SOLUÇÕES
                  </Link>
                </FadeIn>
              </div>

              <div className="hero-image-block">
                <FadeIn delay={300} direction="left">
                  <div className="hero-portrait-frame">
                    <img
                      src={ellenHero}
                      alt="Ellen Stevão"
                      className="hero-main-img"
                    />
                    <div className="hero-img-overlay-soft"></div>
                    <div className="hero-floating-badge-v6">
                      <p className="badge-text-serif">Experiência Insper.</p>
                    </div>
                  </div>
                </FadeIn>
              </div>

            </div>
          </div>
        </section>

        {/* Outras seções continuam com a mesma estrutura editorial */}
        <section className="methodology-section">
          <div className="container-7xl">
            <FadeIn>
              <div className="methodology-flex">
                <div className="methodology-header">
                  <span className="methodology-tag">Metodologia Exclusiva</span>
                  <h2 className="methodology-title">Inteligência Financeira para Alavancagem Patrimonial</h2>
                </div>
                <div className="methodology-copy">
                  <p>
                    Consultoria independente com mais de 14 anos de experiência e formação em Gestão Financeira pelo <strong>Insper</strong>. Projetamos a melhor estratégia de contemplação para o seu perfil, sem as taxas abusivas do mercado tradicional.
                  </p>
                  <div className="methodology-footer">
                    <div className="accent-line"></div>
                    <span className="footer-label">Excelência Técnica</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* A Especialista Preview */}
        <section className="specialist-preview">
          <div className="container-7xl">
            <div className="preview-split">
              <div className="preview-image-box">
                <FadeIn direction="right">
                  <img
                    src={ellenPreview}
                    alt="Especialista"
                    className="preview-image grayscale-hover"
                  />
                </FadeIn>
              </div>
              <div className="preview-content-box">
                <FadeIn direction="left">
                  <h3 className="section-subtitle-italic">A Especialista</h3>
                  <p className="preview-text">
                    Ellen Stevão combina o rigor técnico do mercado financeiro com uma visão humanizada de planejamento. Sua jornada no Insper moldou uma abordagem onde cada número conta uma história de crescimento sustentável.
                  </p>
                  <Link to="/especialista" className="preview-link-cta">
                    Ler Biografia Completa
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Soluções Grid */}
        <section className="solutions-brief">
          <div className="container-7xl text-center">
            <FadeIn>
              <h2 className="section-headline-serif">Estratégias Sob Medida</h2>
              <p className="section-subheadline-v5">Soluções estruturadas para diferentes horizontes de investimento no <strong>Consórcio Ellen</strong>.</p>
            </FadeIn>

            <div className="solutions-bento-grid">
              {solutions.map((svc, idx) => (
                <FadeIn key={svc.title} delay={idx * 150}>
                  <ServiceCard {...svc} />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Pensamento Editorial */}
        <section className="editorial-thought-preview">
          <div className="container-7xl">
            <div className="editorial-header">
              <div className="header-text">
                <h2 className="section-headline-serif">Pensamento Editorial</h2>
                <p className="section-subheadline-v5">Insights sobre o mercado de consórcios e macroeconomia.</p>
              </div>
              <Link to="/blog" className="editorial-link-alt md-only">Ver Blog Completo</Link>
            </div>

            <div className="home-editorial-grid">
              <article className="editorial-card-item">
                <div className="card-media">
                  <img src={blogImg1} alt="Selic" className="editorial-img" />
                </div>
                <span className="item-tag-v5">Mercado</span>
                <div className="item-title-link">
                  <h3>O impacto da Selic no custo de oportunidade do consórcio</h3>
                </div>
                <p className="item-excerpt">Uma análise técnica sobre como os juros influenciam a decisão de investir através de grupos de consórcio...</p>
              </article>

              <article className="editorial-card-item">
                <div className="card-media">
                  <img src={blogImg2} alt="Lances" className="editorial-img" />
                </div>
                <span className="item-tag-v5">Estratégia</span>
                <div className="item-title-link">
                  <h3>Lance Livre vs. Lance Fixo: Qual o melhor caminho?</h3>
                </div>
                <p className="item-excerpt">Entenda a matemática por trás das modalidades de lance e como acelerar sua contemplação com segurança.</p>
              </article>

              <article className="editorial-card-item">
                <div className="card-media">
                  <img src={blogImg3} alt="Sucessão" className="editorial-img" />
                </div>
                <span className="item-tag-v5">Patrimônio</span>
                <div className="item-title-link">
                  <h3>Consórcio como ferramenta de sucessão familiar</h3>
                </div>
                <p className="item-excerpt">Descubra como estruturar a transferência de ativos de forma inteligente utilizando as cotas de consórcio imobiliário.</p>
              </article>
            </div>
          </div>
        </section>

        {/* Pilares */}
        <section className="fundamentals-editorial">
          <div className="container-7xl">
            <div className="pillars-editoral-grid">
              <div className="pillar-editorial-item">
                <h3 className="pillar-title-italic">O que nos move</h3>
                <p className="pillar-desc">
                  A democratização da inteligência financeira de alto nível, permitindo que indivíduos construam patrimônio de forma soberana e estratégica.
                </p>
              </div>
              <div className="pillar-editorial-item">
                <h3 className="pillar-title-italic">Onde queremos chegar</h3>
                <p className="pillar-desc">
                  Ser a referência máxima em boutique de consórcios, reconhecida pela excelência técnica e pelo compromisso inegociável com o cliente.
                </p>
              </div>
              <div className="pillar-editorial-item">
                <h3 className="pillar-title-italic">Nossos Pilares</h3>
                <ul className="pillar-list-v2">
                  <li><span className="bullet"></span> Independência</li>
                  <li><span className="bullet"></span> Rigor Técnico</li>
                  <li><span className="bullet"></span> Transparência Radical</li>
                  <li><span className="bullet"></span> Educação Financeira</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Home;
