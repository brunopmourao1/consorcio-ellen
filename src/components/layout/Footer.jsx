import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-premium">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col-branding">
            <span className="footer-logo">Consórcio Ellen</span>
            <p className="footer-desc">
              Consultoria financeira especializada em gestão de ativos e blindagem patrimonial através de soluções inteligentes de crédito.
            </p>
          </div>
          <div className="footer-col-nav">
            <h5 className="footer-heading">Navegação</h5>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/especialista">A Especialista</Link></li>
              <li><Link to="/solucoes">Soluções de Crédito</Link></li>
              <li><Link to="/contato">Contato</Link></li>
            </ul>
          </div>
          <div className="footer-col-social">
            <h5 className="footer-heading">Social & Contato</h5>
            <div className="footer-contact-info">
              <a href="mailto:contato@consorcioellen.com.br" className="contact-item">
                <span className="material-symbols-outlined icon">mail</span>
                ellenstevao@icloud.com
              </a>
              <a href="https://wa.me/5511993189717" target="_blank" rel="noopener noreferrer" className="contact-item">
                <span className="material-symbols-outlined icon">phone_iphone</span>
                +55 (16) 98846-4283
              </a>
              <a href="https://www.instagram.com/consorcioellen" target="_blank" rel="noopener noreferrer" className="contact-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                @consorcioellen
              </a>
            </div>
          </div>
        </div>
        <div className="footer-legal-bar">
          <span>© {new Date().getFullYear()} Consórcio Ellen - Consultoria. Autorizado pelo Banco Central do Brasil.</span>
          <div className="legal-links">
            <Link to="/termos">Termos de Uso</Link>
            <Link to="/privacidade">Política de Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
