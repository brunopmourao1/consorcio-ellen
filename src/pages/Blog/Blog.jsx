import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../../components/ui/FadeIn';
import { sanityClient, urlFor } from '../../lib/sanityClient';
import './Blog.css';

const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc){
  _id,
  title,
  "slug": slug.current,
  category,
  readTime,
  excerpt,
  mainImage,
  publishedAt,
  featured
}`;

const Blog = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    sanityClient.fetch(POSTS_QUERY).then(setPosts).catch(() => setPosts([]));
  }, []);

  if (posts === null) {
    return (
      <div className="blog-page">
        <main className="container blog-main-content">
          <p className="blog-summary">Carregando artigos…</p>
        </main>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="blog-page">
        <main className="container blog-main-content">
          <header className="blog-section-header">
            <h1 className="blog-headline">Pensamento <span className="serif-italic">Editorial</span></h1>
            <p className="blog-summary">Nenhum artigo publicado ainda. Volte em breve.</p>
          </header>
        </main>
      </div>
    );
  }

  const featured = posts.find((post) => post.featured) || posts[0];
  const mainGrid = posts.filter((post) => post._id !== featured._id);

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
              <Link to={`/blog/${featured.slug}`} className="featured-card">
                <div className="image-wrapper">
                  <img src={urlFor(featured.mainImage).width(1200).url()} alt={featured.title} className="grayscale-hover" />
                  <div className="image-overlay"></div>
                </div>
                <div className="featured-content">
                  <div className="content-meta">
                    <span className="badge-featured">Destaque</span>
                    <span className="meta-info">{featured.readTime} min de leitura</span>
                  </div>
                  <h2 className="featured-title">{featured.title}</h2>
                  <p className="featured-excerpt">{featured.excerpt}</p>
                </div>
              </Link>
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
            <FadeIn key={post._id} delay={idx * 150} direction="up">
              <Link to={`/blog/${post.slug}`} className="grid-article-card">
                <div className="article-image-container">
                  <img src={urlFor(post.mainImage).width(600).url()} alt={post.title} className="grid-image" />
                </div>
                <div className="article-metadata">
                  <span className="article-category">{post.category}</span>
                  <span className="article-duration">{post.readTime} min</span>
                </div>
                <h3 className="article-title">{post.title}</h3>
                <p className="article-excerpt">{post.excerpt}</p>
              </Link>
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
