import React from 'react';
import FadeIn from '../../components/ui/FadeIn';
import lanceImg from '../../assets/images/Lance.png';
import blogImg1 from '../../assets/images/blog-1.png';
import blogImg2 from '../../assets/images/blog-2.png';
import blogImg3 from '../../assets/images/blog-3.png';
import './Blog.css';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'A Matemática por trás do Consórcio Estratégico',
      category: 'Educação Financeira',
      readTime: '12 min',
      date: 'Maio 2026',
      image: lanceImg,
      excerpt: 'Entenda como a alocação de lances e a escolha de grupos saudáveis transformam o consórcio em um investimento focado em inteligência patrimonial.'
    },
    {
      id: 2,
      title: 'Consórcio vs. Financiamento: O custo de oportunidade',
      category: 'Análise Técnica',
      readTime: '8 min',
      date: 'Abril 2026',
      image: blogImg1,
      excerpt: 'Um comparativo detalhado sobre como a ausência de juros compostos pode acelerar sua alavancagem patrimonial de forma segura.'
    },
    {
      id: 3,
      title: 'Estruturação de Frotas para o Agronegócio',
      category: 'Estratégia Especial',
      readTime: '10 min',
      date: 'Março 2026',
      image: blogImg2,
      excerpt: 'Como grandes produtores estão utilizando o consórcio para renovação tecnológica sem comprometer a liquidez dos seus ativos.'
    },
    {
      id: 4,
      title: 'O Luxo da Paciência Planejada no Mercado Imobiliário',
      category: 'Lifestyle & Investimento',
      readTime: '6 min',
      date: 'Fevereiro 2026',
      image: blogImg3,
      excerpt: 'Por que o tempo é o seu maior aliado quando se trata de adquirir propriedades de alto padrão com eficiência financeira absoluta.'
    }
  ];

  const featured = posts[0];
  const mainGrid = posts.slice(1);

  return (
    <div className="blog-page">
      <main className="container blog-main-content">

        {/* Section Header */}
        <header className="blog-section-header">
          <FadeIn direction="up">
            <span className="blog-tag">Análise de Especialista</span>
            <h1 className="blog-headline">Pensamento <span className="serif-italic">Editorial</span></h1>
            <p className="blog-summary">
              Perspectivas profundas sobre gestão de ativos, estratégias de alavancagem e o cenário macroeconômico global para o investidor do <strong>Consórcio Ellen</strong>.
            </p>
          </FadeIn>
        </header>

        {/* Featured Article: Bento Layout */}
        <section className="featured-article-grid">
          <div className="featured-main">
            <FadeIn delay={200}>
              <div className="featured-card">
                <div className="image-wrapper">
                  <img src={featured.image} alt={featured.title} className="grayscale-hover" />
                  <div className="image-overlay"></div>
                </div>
                <div className="featured-content">
                  <div className="content-meta">
                    <span className="badge-featured">Destaque</span>
                    <span className="meta-info">{featured.readTime} de leitura</span>
                  </div>
                  <h2 className="featured-title">{featured.title}</h2>
                  <p className="featured-excerpt">{featured.excerpt}</p>
                </div>
              </div>
            </FadeIn>
          </div>

          <aside className="featured-aside">
            <FadeIn delay={400} direction="left">
              <div className="aside-box">
                <h3 className="aside-title">Tópicos Recentes</h3>
                <ul className="aside-list">
                  <li className="aside-item">
                    <span className="item-tag">Imobiliário</span>
                    <h4>Yield vs. Valorização: O dilema de 2026.</h4>
                  </li>
                  <li className="aside-item">
                    <span className="item-tag">Sucessão</span>
                    <h4>Holding vs. Doação: Protegendo legados.</h4>
                  </li>
                  <li className="aside-item">
                    <span className="item-tag">Global</span>
                    <h4>Impacto do Selic nas taxas de consórcio atuais.</h4>
                  </li>
                </ul>

                <div className="quote-box">
                  <p className="quote-text">"A inteligência financeira não está em evitar o risco, mas em precificá-lo com absoluta maestria."</p>
                  <span className="quote-author">— Editorial Boutique</span>
                </div>
              </div>
            </FadeIn>
          </aside>
        </section>

        {/* Article Grid */}
        <section className="article-grid">
          {mainGrid.map((post, idx) => (
            <FadeIn key={post.id} delay={idx * 150} direction="up">
              <article className="grid-article-card">
                <div className="article-image-container">
                  <img src={post.image} alt={post.title} className="grid-image" />
                </div>
                <div className="article-metadata">
                  <span className="article-category">{post.category}</span>
                  <span className="article-duration">{post.readTime}</span>
                </div>
                <h3 className="article-title">{post.title}</h3>
                <p className="article-excerpt">{post.excerpt}</p>
              </article>
            </FadeIn>
          ))}
        </section>

        {/* Newsletter Section */}
        <section className="blog-newsletter">
          <FadeIn direction="up">
            <div className="newsletter-container">
              <div className="newsletter-text">
                <h3 className="newsletter-title">Acesso Exclusivo</h3>
                <p className="newsletter-desc">Receba nossas análises semanais diretamente em seu e-mail privado. Conteúdo restrito para clientes do <strong>Consórcio Ellen</strong>.</p>
              </div>
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  className="newsletter-input"
                  placeholder="Endereço de e-mail institucional"
                  required
                />
                <button type="submit" className="newsletter-submit">Inscrever</button>
              </form>
            </div>
          </FadeIn>
        </section>

      </main>
    </div>
  );
};

export default Blog;
