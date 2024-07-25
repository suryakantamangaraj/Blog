import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';


const FeatureList = [
  {
    //title: 'Easy to Use',
    title: (
      <Link to="/technology">Technology</Link> // Add the Link component to the title
    ),
    Svg: require('@site/static/img/tech1.svg').default,
    //Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Unveiling the forefront of innovation, my blog delves into the realm of cutting-edge technologies, providing profound insights into the ever-evolving world of technology.
      </>
    ),
  },
  {
    //title: 'Focus on What Matters',
    title: (
      <Link to="/philosophy">Philosophy</Link> // Add the Link component to the title
    ),
    Svg: require('@site/static/img/philosophy.svg').default,
    //Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Embark on a journey of intellectual exploration as my blog navigates the intricate landscapes of philosophy. Delve into the realms of relativism and ethics, gaining profound perspectives that illuminate the human experience.
      </>
      /*
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
      */
    ),
  },
  {
    //title: 'Powered by React',
    title: (
      <Link to="/sundry">Sundry</Link> // Add the Link component to the title
    ),
    Svg: require('@site/static/img/growth_misc.svg').default,
    //Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
       Venture into a captivating tapestry of insights and experiences as my blog delves into diverse dimensions. Explore the art of growth, uncover the path of execution, and unearth valuable lessons from the entrepreneurial journey, all within a realm of endless curiosity.
      </>
    ),
  },
  /*
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  */
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

