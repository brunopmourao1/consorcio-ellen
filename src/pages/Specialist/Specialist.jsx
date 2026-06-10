import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../../components/ui/FadeIn';
import ellenImg from '../../assets/images/Ellen-3.png';
import './Specialist.css';

const Specialist = () => {
  return (
    <div className="specialist-page">
      <main className="specialist-main">
        {/* Hero Section: Editorial Intro */}
        <section className="specialist-hero">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-content">
                <FadeIn direction="up">
                  <span className="section-tag">Sobre a Fundadora</span>
                  <h1 className="hero-headline">
                    Autoridade e <br /> <span className="serif-italic">Excelência</span> no Mercado.
                  </h1>
                  <p className="hero-description">
                    Formada pelo Insper, com mais de 14 anos de atuação estratégica no mercado financeiro brasileiro, transformando patrimônio em legados sólidos.
                  </p>
                </FadeIn>
              </div>
              <div className="hero-image-wrapper">
                <FadeIn delay={300} direction="left">
                  <div className="portrait-container">
                    <img
                      src={ellenImg}
                      alt="Ellen Stevão Portrait"
                      className="portrait-image"
                    />
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials Ticker/Bar */}
        <section className="credentials-ticker">
          <div className="container">
            <FadeIn delay={500}>
              <div className="ticker-flex">
                <div className="ticker-item">
                  <span className="ticker-brand">Insper</span>
                  <span className="ticker-label">Graduação</span>
                </div>
                <div className="ticker-item">
                  <span className="ticker-value">ABAC | ANBIMA </span>
                  <span className="ticker-label">Certificação</span>
                </div>
                <div className="ticker-item">
                  <span className="ticker-value">FEBRABAN</span>
                  <span className="ticker-label">Regulamentação</span>
                </div>
                <div className="ticker-item">
                  <span className="ticker-value">BACEN</span>
                  <span className="ticker-label">Autorização</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Biography Section: Asymmetric Editorial */}
        <section className="biography-section">
          <div className="container">
            <div className="bio-asymmetric-grid">
              <div className="bio-narrative">
                <FadeIn>
                  <h2 className="bio-headline">Uma jornada moldada pela <br />precisão técnica.</h2>
                  <div className="bio-copy">
                    <p>
                      Minha trajetória no mercado financeiro começou há mais de uma década, movida pelo desejo de desmistificar a gestão de ativos e oferecer às famílias brasileiras o mesmo nível de sofisticação encontrado em Family Offices internacionais.
                    </p>
                    <p>
                      Graduada em Economia pelo <strong>Insper</strong>, consolidei minha base técnica atuando diretamente na estruturação de operações complexas de crédito e consórcios imobiliários de alto valor. Acredito que o patrimônio não é apenas um número, mas a materialização do esforço e da visão de uma vida inteira.
                    </p>
                    <p>
                      Hoje, como especialista autorizada pelo Banco Central e certificada pela ABAC, lidero o <strong>Consórcio Ellen</strong>, focado em soluções inteligentes de alavancagem patrimonial e blindagem financeira.
                    </p>
                  </div>
                </FadeIn>
              </div>
              <div className="bio-manifesto-cards">
                <FadeIn delay={200} direction="up">
                  <div className="manifesto-card dark">
                    <span className="material-symbols-outlined icon">account_balance</span>
                    <h3 className="card-title">Patrimônio Consciente</h3>
                    <p className="card-text">
                      Foco total na preservação de capital através de estratégias regulamentadas e instrumentos financeiros de alta performance, garantindo soberania financeira.
                    </p>
                  </div>
                </FadeIn>
                <FadeIn delay={400} direction="up">
                  <div className="manifesto-card surface">
                    <span className="material-symbols-outlined icon">verified</span>
                    <h3 className="card-title">Rigor Técnico</h3>
                    <p className="card-text">
                      Atuação pautada pelo estrito cumprimento das normas da FEBRABAN e BACEN, oferecendo segurança jurídica e transparência absoluta.
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Trajetória e Visão Estratégica (Manifesto Section) */}
        <section className="manifesto-section">
          <div className="container">
            <FadeIn>
              <div className="manifesto-header">
                <span className="manifesto-tag">Manifesto</span>
                <h2 className="manifesto-headline">Trajetória e <span className="serif-italic">Visão Estratégica</span></h2>
              </div>
              <div className="manifesto-grid">
                <div className="manifesto-item">
                  <div className="accent-line"></div>
                  <h4>Asset Management</h4>
                  <p>Gestão focada na diversificação inteligente. Não olhamos apenas para o rendimento, mas para a liquidez e para o custo de oportunidade.</p>
                </div>
                <div className="manifesto-item">
                  <div className="accent-line"></div>
                  <h4>Equity Building</h4>
                  <p>Utilizamos instrumentos de crédito estruturado para potencializar a aquisição de ativos sem descapitalizar o cliente.</p>
                </div>
                <div className="manifesto-item">
                  <div className="accent-line"></div>
                  <h4>Succession Planning</h4>
                  <p>Proteção sucessória eficiente, garantindo que a transição de riqueza seja livre de entraves burocráticos.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-banner">
          <div className="container text-center">
            <FadeIn direction="up">
              <h2 className="cta-headline">Pronto para elevar o patamar da sua <span className="serif-italic">estratégia financeira</span>?</h2>
              <p className="cta-subheadline">
                Agende uma consultoria estratégica personalizada no <strong>Consórcio Ellen</strong> e descubra soluções boutique para sua gestão patrimonial.
              </p>
              <div className="cta-buttons">
                <Link to="/contato" className="btn-primary">Falar com a Especialista</Link>
                <Link to="/solucoes" className="btn-secondary">Conhecer Soluções</Link>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Specialist;
