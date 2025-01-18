import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function PhilosophyIndex() {
  const { siteConfig } = useDocusaurusContext();

  const philosophyLinks = [
    {
      title: 'The Power of Humility - Embracing the Unknown',
      link: '/blog/The-power-of-humility-embracing-the-unlknown',
    },
    // Add more links as needed
  ];

  return (
    <Layout
      title={`Philosophy | ${siteConfig.title}`}
      description="Explore philosophy articles and insights."
    >
      <header className={styles.heroBanner}>
        <div className="container">
          <h1 className="hero__title">Philosophy</h1>
          <p className="hero__subtitle">Explore philosophy articles and insights.</p>
        </div>
      </header>
      <main>
        <section className={styles.features}>
          <div className="container">
            {philosophyLinks.map((link) => (
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

export default PhilosophyIndex;
