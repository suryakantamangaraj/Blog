import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function TechnologyIndex() {
  const { siteConfig } = useDocusaurusContext();

  const technologyLinks = [
    {
      title: 'The Power of 5G: Transforming Connectivity and Communication',
      link: '/blog/the-power-of-5g-transforming-connectivity-and-communication',
    },
    {
      title: 'The Ethics of AI: A Philosophical Perspective',
      link: '/blog/The-ethics-of-ai-a-philosophical-perspective',
    },
    {
      title: 'Quantum Computing: Revolutionizing Problem-Solving in the Digital Age',
      link: '/blog/quantum-computing-revolutionizing-problem-solving-in-the-digital-age',
    },
    
    // Add more links as needed
  ];

  return (
    <Layout
      title={`Technology | ${siteConfig.title}`}
      description="Explore technology articles and insights."
    >
      <header className={styles.heroBanner}>
        <div className="container">
          <h1 className="hero__title">Technology</h1>
          <p className="hero__subtitle">Explore technology articles and insights.</p>
        </div>
      </header>
      <main>
        <section className={styles.features}>
          <div className="container">
            {technologyLinks.map((link) => (
              <div key={link.title} className={styles.articleCard}>
                <h3 className={styles.articleTitle}>
                  <Link to={link.link}>{link.title}</Link>
                </h3>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default TechnologyIndex;
