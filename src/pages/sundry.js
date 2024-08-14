import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function SundryIndex() {
  const { siteConfig } = useDocusaurusContext();

  const sundryLinks = [
    {
      title: 'Why you shouldn’t be afraid to share your idea with others',
      link: '/blog/Why-you-should-not-be-afraid-to-share-your-idea-with-others',
    },
    {
      title: 'The Evolution of Digital Gardens: A Journey from Personal Knowledge Management to Public Curation',
      link: '/blog/The-evolution-of-digital-gardens',
    },
    // Add more links as needed
  ];

  return (
    <Layout
      title={`Sundry | ${siteConfig.title}`}
      description="Explore miscellaneous articles and insights."
    >
      <header className={styles.heroBanner}>
        <div className="container">
          <h1 className="hero__title">Sundry</h1>
          <p className="hero__subtitle">Explore miscellaneous articles and insights.</p>
        </div>
      </header>
      <main>
        <section className={styles.features}>
          <div className="container">
            {sundryLinks.map((link) => (
              <div key={link.title} className="row">
                <div className="col col--12">
                  <h3><Link to={link.link}>{link.title}</Link></h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default SundryIndex;
