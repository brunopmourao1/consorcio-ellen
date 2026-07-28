import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import FadeIn from '../../components/ui/FadeIn';
import officeImg from '../../assets/images/wealth.png';
import './Contact.css';

// ─────────────────────────────────────────────────────────────
// CONFIGURAÇÃO EMAILJS
// 1. Crie uma conta gratuita em https://www.emailjs.com
// 2. Adicione um Email Service (Gmail) e copie o Service ID
// 3. Crie um Email Template com as variáveis abaixo e copie o Template ID
// 4. Copie sua Public Key em Account > API Keys
// 5. Substitua os três valores abaixo pelas suas credenciais reais
// ─────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'service_hk27tzn';
const EMAILJS_TEMPLATE_ID = 'template_wnv5e3s';
const EMAILJS_PUBLIC_KEY  = 'ucy3NWA2bcFdSfOgz';

// Variáveis esperadas no template do EmailJS:
// {{from_name}}  → Nome do contato
// {{from_email}} → Email do contato
// {{phone}}      → WhatsApp do contato
// {{objective}}  → Objetivo principal
// {{timeframe}}  → Expectativa de implementação

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    objective: 'Estruturação Patrimonial',
    timeframe: 'Curto prazo (3–6 meses)',
  });

  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const templateParams = {
      from_name:  formData.name,
      from_email: formData.email,
      phone:      formData.phone,
      objective:  formData.objective,
      timeframe:  formData.timeframe,
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        objective: 'Estruturação Patrimonial',
        timeframe: 'Curto prazo (3–6 meses)',
      });
    } catch (err) {
      console.error('Erro ao enviar:', err);
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="contact-page">
      <main className="container contact-main-layout">
        <div className="contact-editorial-grid">

          {/* Narrative Column */}
          <section className="contact-narrative">
            <FadeIn direction="up">
              <h1 className="narrative-title">
                Vamos estruturar a sua próxima decisão patrimonial com <span className="serif-italic">inteligência financeira</span>.
              </h1>
              <p className="narrative-intro">
                Preencha os dados ao lado para uma análise técnica de viabilidade. O contato será conduzido de forma consultiva e personalizada pela equipe do <strong>Consórcio Ellen</strong>.
              </p>

              <div className="trust-badges-list">
                <div className="trust-item">
                  <div className="trust-icon-box">
                    <span className="material-symbols-outlined">encrypted</span>
                  </div>
                  <div className="trust-text">
                    <h3>Sigilo Institucional</h3>
                    <p>Suas informações são tratadas com o mais alto rigor de confidencialidade bancária.</p>
                  </div>
                </div>
                <div className="trust-item">
                  <div className="trust-icon-box">
                    <span className="material-symbols-outlined">account_balance</span>
                  </div>
                  <div className="trust-text">
                    <h3>Consultoria Técnica</h3>
                    <p>Não somos apenas corretores; somos estrategistas patrimoniais focados em viabilidade.</p>
                  </div>
                </div>
              </div>

              <div className="narrative-decorative-image">
                <img
                  src={officeImg}
                  alt="Mesa de escritório executivo"
                  className="editorial-image"
                />
                <div className="image-vignette"></div>
              </div>
            </FadeIn>
          </section>

          {/* Form Column */}
          <section className="contact-form-section">
            <FadeIn delay={200} direction="left">
              <div className="form-bento-card">

                {/* Estado: Sucesso */}
                {status === 'success' && (
                  <div className="form-feedback success">
                    <span className="material-symbols-outlined feedback-icon">check_circle</span>
                    <h3>Solicitação recebida.</h3>
                    <p>Nossa equipe entrará em contato em breve para conduzir a análise técnica de viabilidade.</p>
                    <button className="btn-reset" onClick={() => setStatus('idle')}>
                      Enviar nova solicitação
                    </button>
                  </div>
                )}

                {/* Estado: Erro */}
                {status === 'error' && (
                  <div className="form-feedback error">
                    <span className="material-symbols-outlined feedback-icon">error</span>
                    <h3>Falha no envio.</h3>
                    <p>Ocorreu um erro. Tente novamente ou entre em contato via WhatsApp.</p>
                    <button className="btn-reset" onClick={() => setStatus('idle')}>
                      Tentar novamente
                    </button>
                  </div>
                )}

                {/* Estado: Formulário */}
                {(status === 'idle' || status === 'loading') && (
                  <form className="consultative-form" onSubmit={handleSubmit}>

                    <div className="form-group-full">
                      <label className="form-label">Nome Completo</label>
                      <input
                        type="text"
                        name="name"
                        className="form-input"
                        placeholder="Como devemos chamá-lo(a)?"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        disabled={status === 'loading'}
                      />
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">E-mail Profissional</label>
                        <input
                          type="email"
                          name="email"
                          className="form-input"
                          placeholder="exemplo@empresa.com"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          disabled={status === 'loading'}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">WhatsApp</label>
                        <input
                          type="tel"
                          name="phone"
                          className="form-input"
                          placeholder="(00) 00000-0000"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          disabled={status === 'loading'}
                        />
                      </div>
                    </div>

                    <div className="form-radio-group">
                      <label className="form-label">Qual o seu objetivo principal?</label>
                      <div className="radio-options">
                        {['Imóvel', 'Veículo', 'Estruturação Patrimonial', 'Pessoa Jurídica'].map(opt => (
                          <label className="radio-label" key={opt}>
                            <input
                              type="radio"
                              name="objective"
                              className="hidden-radio"
                              value={opt}
                              checked={formData.objective === opt}
                              onChange={handleChange}
                              disabled={status === 'loading'}
                            />
                            <span className="radio-button">{opt}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="form-radio-group">
                      <label className="form-label">Expectativa de implementação</label>
                      <div className="radio-options">
                        {['Imediato', 'Curto prazo (3–6 meses)', 'Planejamento (6+ meses)'].map(opt => (
                          <label className="radio-label" key={opt}>
                            <input
                              type="radio"
                              name="timeframe"
                              className="hidden-radio"
                              value={opt}
                              checked={formData.timeframe === opt}
                              onChange={handleChange}
                              disabled={status === 'loading'}
                            />
                            <span className="radio-button accent">{opt}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="form-footer">
                      <button
                        type="submit"
                        className={`btn-heavy-cta ${status === 'loading' ? 'loading' : ''}`}
                        disabled={status === 'loading'}
                      >
                        {status === 'loading' ? (
                          <>
                            <span className="btn-spinner"></span>
                            Enviando...
                          </>
                        ) : (
                          <>
                            Solicitar Análise Estratégica
                            <span className="material-symbols-outlined">trending_flat</span>
                          </>
                        )}
                      </button>

                      <div className="lgpd-notice">
                        <span className="material-symbols-outlined icon">verified_user</span>
                        <p>
                          Ao enviar, você concorda com o processamento de seus dados para fins de consultoria técnica, em conformidade com a Lei Geral de Proteção de Dados (LGPD). Seus dados não serão compartilhados com terceiros sem sua autorização expressa pelo <strong>Consórcio Ellen</strong>.
                        </p>
                      </div>
                    </div>

                  </form>
                )}

              </div>
            </FadeIn>
          </section>

        </div>
      </main>
    </div>
  );
};

export default Contact;
