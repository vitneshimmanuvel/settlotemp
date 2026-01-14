import './Articles.css';

const Articles = () => {
  const articles = [
    {
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=250&fit=crop',
      title: 'Settlo Becomes Official Progress Sitefinity Partner',
      date: 'December 2024',
      category: 'Partnership'
    },
    {
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop',
      title: 'How AI-Powered Smart CRM Is Redefining Customer Relationships',
      date: 'December 2024',
      category: 'Technology'
    },
    {
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop',
      title: 'Best Practices for Securing Your Web Applications in 2025',
      date: 'November 2024',
      category: 'Security'
    }
  ];

  return (
    <section className="articles section">
      <div className="container">
        <h2 className="section-title">Latest Articles</h2>
        <p className="section-subtitle">
          Stay updated with our latest news, insights, and technology trends.
        </p>

        <div className="articles-grid">
          {articles.map((article, index) => (
            <article key={index} className="article-card">
              <div className="article-image">
                <img src={article.image} alt={article.title} />
              </div>
              <div className="article-content">
                <div className="article-meta">
                  <span className="article-category">{article.category}</span>
                  <span className="article-date">{article.date}</span>
                </div>
                <h3 className="article-title">{article.title}</h3>
                <a href="#" className="article-link">Read More →</a>
              </div>
            </article>
          ))}
        </div>

        <div className="articles-cta">
          <a href="#" className="btn btn-secondary btn-lg">
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default Articles;
