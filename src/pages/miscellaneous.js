import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function MiscellaneousIndex() {
  const { siteConfig } = useDocusaurusContext();

  const miscellaneousLinks = [
    {
      title: 'Blog Title 1',
      link: '/miscellaneous/blog-1',
    },
    {
      title: 'Blog Title 2',
      link: '/miscellaneous/blog-2',
    },
    // Add more links as needed
  ];

  return (
    <Layout
      title={`Miscellaneous | ${siteConfig.title}`}
      description="Explore miscellaneous articles and insights."
    >
      <header className={styles.heroBanner}>
        <div className="container">
          <h1 className="hero__title">Miscellaneous</h1>
          <p className="hero__subtitle">Explore miscellaneous articles and insights.</p>
        </div>
      </header>
      <main>
        <section className={styles.features}>
          <div className="container">
            {miscellaneousLinks.map((link) => (
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

export default MiscellaneousIndex;
