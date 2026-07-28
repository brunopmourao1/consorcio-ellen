import React from 'react';
import { useLocation } from 'react-router-dom';
import FadeIn from '../../components/ui/FadeIn';
import SEO from '../../components/ui/SEO';
import './Legal.css';

const Legal = () => {
  const { pathname } = useLocation();
  const isPrivacidade = pathname === '/privacidade';

  return (
    <div className="legal-page">
      <SEO
        title={isPrivacidade ? 'Política de Privacidade' : 'Termos de Uso'}
        description="Termos de uso e política de privacidade do Consórcio Ellen, com as diretrizes de transparência e segurança jurídica para clientes e parceiros."
        path={pathname}
      />
      <div className="legal-container">
        <FadeIn direction="up">
          <header className="legal-header">
            <span className="legal-tag">Documentação Institucional</span>
            <h1 className="legal-headline">Termos de Uso e Política de Privacidade</h1>
            <p className="legal-intro">
              Última atualização: 14 de Maio de 2024. Este documento estabelece as diretrizes de transparência e segurança jurídica para nossos clientes e parceiros.
            </p>
          </header>

          <div className="prose-section">
            {/* 1. TERMOS DE USO */}
            <article>
              <h2 id="termos">1. Termos de Uso</h2>
              <p>
                Ao acessar o site de <strong>Ellen Stevão - Consórcio</strong>, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum destes termos, está proibido de usar ou acessar este site.
              </p>
              
              <h3>1.1 Uso de Licença</h3>
              <p>
                É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Ellen Stevão, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:
              </p>
              <ul>
                <li>Modificar ou copiar os materiais de consultoria financeira;</li>
                <li>Usar os materiais para qualquer finalidade comercial ou para exibição pública;</li>
                <li>Tentar descompilar ou realizar engenharia reversa de qualquer software contido no site;</li>
                <li>Remover quaisquer direitos autorais ou outras notações de propriedade dos materiais;</li>
                <li>Transferir os materiais para outra pessoa ou 'espelhar' os materiais em qualquer outro servidor.</li>
              </ul>

              <h3>1.2 Isenção de Responsabilidade</h3>
              <p>
                Os materiais no site da Ellen Stevão são fornecidos 'como estão'. Ellen Stevão não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
              </p>
            </article>

            {/* 2. POLÍTICA DE PRIVACIDADE */}
            <article>
              <h2 id="privacidade">2. Política de Privacidade</h2>
              <p>
                A sua privacidade é importante para nós. É política de Ellen Stevão respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Ellen Stevão, e outros sites que possuímos e operamos.
              </p>

              <div className="tonal-box">
                <h3>Compromisso com Dados Pessoais</h3>
                <p>
                  Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço de consultoria de consórcio personalizado. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
                </p>
              </div>

              <h3>Coleta de Informações</h3>
              <p>
                Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
              </p>
              <p>
                Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei ou autorização do Banco Central do Brasil no contexto de operações de consórcio.
              </p>

              <h3>Cookies e Rastreamento</h3>
              <p>
                O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
              </p>
            </article>

            {/* 3. CONFORMIDADE REGULATÓRIA */}
            <article className="compliance-box">
              <h2 id="compliance">3. Conformidade Regulatória</h2>
              <p>
                Ellen Stevão atua em estrita conformidade com as normas estabelecidas pelo <strong>Banco Central do Brasil</strong>. As operações de consórcio descritas ou facilitadas através desta plataforma seguem as diretrizes da Lei nº 11.795/2008.
              </p>
              
              <div className="compliance-footer">
                <span className="material-symbols-outlined compliance-icon">gavel</span>
                <div className="compliance-meta">
                  <strong>Foro de Eleição</strong>
                  <p>Para dirimir quaisquer controvérsias oriundas do presente Termo, as partes elegem o foro da comarca de domicílio da sede da consultoria.</p>
                </div>
              </div>
            </article>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Legal;
