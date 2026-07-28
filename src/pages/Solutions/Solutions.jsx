import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../../components/ui/FadeIn';
import SEO from '../../components/ui/SEO';
import realEstateImg from '../../assets/images/real-estate.png';
import fleetImg from '../../assets/images/trator.png';
import fleetImg2 from '../../assets/images/Aeronave.png';
import fleetImg3 from '../../assets/images/trator-2.jpg';
import fleetImg4 from '../../assets/images/avião agricula.png';
import carImg from '../../assets/images/carro.png';
import wealthImg from '../../assets/images/xadrez.png';
import './Solutions.css';

const Solutions = () => {
  return (
    <div className="solutions-page">
      <SEO
        title="Soluções Estratégicas"
        description="Soluções em consórcio para imóveis, veículos, frotas, agronegócio e estruturação de ativos. Estratégias sob medida para cada perfil de investidor."
        path="/solucoes"
      />
      <main className="solutions-main-content">

        {/* 1. HERO SECTION */}
        <section className="solutions-hero">
          <div className="container">
            <div className="solutions-editorial-grid">
              <div className="hero-text-col">
                <FadeIn direction="up">
                  <h1 className="hero-title">
                    Soluções <span className="serif-italic">Estratégicas</span>
                  </h1>
                  <p className="hero-subtitle">
                    Estruturamos o consórcio como um instrumento de gestão de capital, focando em eficiência, previsibilidade e crescimento patrimonial no <strong>Consórcio Ellen</strong>.
                  </p>
                </FadeIn>
              </div>
              <div className="hero-image-col">
                <FadeIn delay={300} direction="left">
                  <div className="hero-image-container">
                    <img
                      src={wealthImg}
                      alt="Gestão de ativos"
                      className="grayscale-hover"
                    />
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* 2. SOLUTIONS BENTO GRID */}
        <section className="solutions-bento">
          <div className="container">
            <div className="bento-grid">

              {/* Section 1: Imobiliário */}
              <FadeIn direction="up">
                <div className="bento-item bento-light">
                  <div className="bento-content">
                    <div className="item-header">
                      <span className="material-symbols-outlined icon">apartment</span>
                      <span className="item-tag">Estratégia 01</span>
                    </div>
                    <h2 className="item-title">Imobiliário e Alavancagem Patrimonial</h2>
                    <p className="item-desc">
                      Maximização de recursos para expansão imobiliária planejada, transformando passivos em ativos geradores de renda.
                    </p>
                    <ul className="item-features">
                      <li>Urbano & Rural</li>
                      <li>Residencial e Comercial</li>
                      <li>Na planta ou pronto</li>
                      <li>Reforma e Construção</li>
                      <li>Quitação de financiamento</li>
                      <li>Utilização de FGTS</li>
                    </ul>
                  </div>
                  <div className="item-footer-image">
                    <img
                      src={realEstateImg}
                      alt="Imóveis"
                      className="grayscale-fade"
                    />
                  </div>
                </div>
              </FadeIn>

              {/* Section 2: Frotas & Agro */}
              <FadeIn direction="up" delay={200}>
                <div className="bento-item bento-dark">
                  <div className="bento-content">
                    <div className="item-header">
                      <span className="material-symbols-outlined icon">agriculture</span>
                      <span className="item-tag">Estratégia 02</span>
                    </div>
                    <h2 className="item-title">Frotas, Pesados e Agronegócio</h2>
                    <p className="item-desc">
                      Soluções para o core business. Renovação de frota e mecanização com custo financeiro reduzido e fluxo de caixa preservado.
                    </p>
                    <ul className="item-features-check">
                      <li><span className="material-symbols-outlined">check_circle</span> Automóveis (leve e pesados)</li>
                      <li><span className="material-symbols-outlined">check_circle</span> Náuticos e Aeronáuticos</li>
                      <li><span className="material-symbols-outlined">check_circle</span> Máquinas e Equipamentos</li>
                      <li><span className="material-symbols-outlined">check_circle</span> Off-Road</li>
                    </ul>
                  </div>
                  <div className="item-footer-dual-image">
                    <img src={fleetImg} alt="Frota" />
                    <img src={fleetImg2} alt="Aeronáutico" />
                    <img src={fleetImg3} alt="Maquinário agrícola" />
                    <img src={fleetImg4} alt="Agronegócio" />
                  </div>
                </div>
              </FadeIn>

              {/* Section 3: Premium Lifestyle */}
              <FadeIn direction="up" delay={300} className="bento-wide">
                <div className="bento-item bento-high">
                  <div className="bento-horizontal-flex">
                    <div className="content-side">
                      <div className="item-header">
                        <span className="material-symbols-outlined icon">directions_car</span>
                        <span className="item-tag">Estratégia 03</span>
                      </div>
                      <h2 className="item-title">Automóveis | Troca de chave</h2>
                      <p className="item-desc">
                        Acesso ao mercado de luxo através de planejamento inteligente. Substituição programada de ativos com preservação de liquidez.
                      </p>
                      <div className="feature-badges">
                        <div className="badge">
                          <span className="badge-value">Importados</span>
                          <span className="badge-label">Automóveis</span>
                        </div>
                        <div className="badge-divider"></div>
                        <div className="badge">
                          <span className="badge-value">Náuticos</span>
                          <span className="badge-label">Off-Road</span>
                        </div>
                      </div>
                    </div>
                    <div className="image-side">
                      <img src={carImg} alt="Veículo premium" />
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Section 4: Estruturação de Ativos */}
              <FadeIn direction="up" delay={400} className="bento-wide">
                <div className="bento-item bento-white bento-bordered">
                  <div className="bento-asymmetric-grid">
                    <div className="main-text">
                      <div className="item-header">
                        <span className="material-symbols-outlined icon">flight</span>
                        <span className="item-tag">Estratégia 04</span>
                      </div>
                      <h2 className="item-title-large">Serviços</h2>
                      <ul className="item-features">
                        <li>Procedimento cirúrgicos e estéticos</li>
                        <li>Festas e Eventos</li>
                        <li>Consultoria e Acessoria</li>
                        <li>Eletrodomésticos e Eletrônicos</li>
                      </ul>
                      <Link to="/contato" className="interactive-link">
                        Solicitar Análise Especial
                        <span className="material-symbols-outlined">arrow_right_alt</span>
                      </Link>
                    </div>
                    <div className="options-grid">
                      <div className="option-card">
                        <span className="option-title">Aeronaves</span>
                        <span className="option-desc">Cotas compartilhadas (plano horas de vôos).</span>
                        <span className="option-desc">Modelos de Aeronaves: Executivas, Turboélices, Agrícolas e Experimental.</span>
                      </div>
                      <div className="option-card">
                        <span className="option-title">Industrial</span>
                        <span className="option-desc"> Equipamentos - Energia Solar, Motores.</span>
                        <span className="option-desc">Máquinas - Agrícola, Industrial. </span>
                      </div>
                      <div className="option-card">
                        <span className="option-title">Náuticos</span>
                        <span className="option-desc">Jetski, Lanchas e Yachts.</span>
                      </div>
                      <div className="option-card dark-accent">
                        <span className="option-title highlight">Consultoria</span>
                        <span className="option-desc">Planejamento Financeiro.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

            </div>
          </div>
        </section>

        {/* 3. CTA NARRATIVE */}
        <section className="solutions-narrative">
          <div className="container">
            <FadeIn delay={200}>
              <div className="narrative-box">
                <h2 className="narrative-headline">A precisão de um <span className="serif-italic">Banco Privado</span>, a eficiência do consórcio.</h2>
                <p className="narrative-text">
                  Nossa abordagem remove a subjetividade e foca em métricas reais de retorno sobre patrimônio. Agende uma reunião técnica para entender como estas ferramentas se aplicam ao seu balanço.
                </p>
                <div className="narrative-actions">
                  <Link to="/contato" className="btn-primary">Agendar Reunião Estratégica</Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Solutions;
