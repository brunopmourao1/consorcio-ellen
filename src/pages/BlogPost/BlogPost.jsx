import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PortableText } from '@portabletext/react';
import FadeIn from '../../components/ui/FadeIn';
import SEO from '../../components/ui/SEO';
import { sanityClient, urlFor } from '../../lib/sanityClient';
import './BlogPost.css';

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  title,
  category,
  readTime,
  publishedAt,
  mainImage,
  excerpt,
  body
}`;

const portableTextComponents = {
  types: {
    image: ({ value }) => (
      <img
        src={urlFor(value).width(1000).url()}
        alt={value.alt || ''}
        className="post-body-image"
      />
    ),
  },
};

const BlogPost = () => {
  const { slug } = useParams();
  const [data, setData] = useState({ slug: null, post: null, notFound: false });

  useEffect(() => {
    let cancelled = false;
    sanityClient
      .fetch(POST_QUERY, { slug })
      .then((result) => {
        if (cancelled) return;
        setData({ slug, post: result, notFound: !result });
      })
      .catch(() => {
        if (cancelled) return;
        setData({ slug, post: null, notFound: true });
      });
    return () => {
      cancelled = true;
    };
  }, [slug]);

  const loading = data.slug !== slug;
  const { post, notFound } = data;

  if (notFound) {
    return (
      <div className="blog-post-page">
        <main className="container blog-post-main">
          <p className="blog-post-not-found">Artigo não encontrado.</p>
          <Link to="/blog" className="blog-post-back-link">← Voltar ao Blog</Link>
        </main>
      </div>
    );
  }

  if (loading || !post) {
    return (
      <div className="blog-post-page">
        <main className="container blog-post-main">
          <p>Carregando artigo…</p>
        </main>
      </div>
    );
  }

  return (
    <div className="blog-post-page">
      <SEO
        title={post.title}
        description={post.excerpt}
        path={`/blog/${slug}`}
        image={urlFor(post.mainImage).width(1200).height(630).url()}
      />
      <main className="container blog-post-main">
        <FadeIn direction="up">
          <Link to="/blog" className="blog-post-back-link">← Voltar ao Blog</Link>

          <div className="blog-post-meta">
            <span className="blog-post-category">{post.category}</span>
            <span className="blog-post-readtime">{post.readTime} min de leitura</span>
          </div>

          <h1 className="blog-post-title">{post.title}</h1>
          <p className="blog-post-excerpt">{post.excerpt}</p>

          <div className="blog-post-hero-image">
            <img src={urlFor(post.mainImage).width(1400).url()} alt={post.title} />
          </div>

          <article className="blog-post-body">
            <PortableText value={post.body} components={portableTextComponents} />
          </article>
        </FadeIn>
      </main>
    </div>
  );
};

export default BlogPost;
