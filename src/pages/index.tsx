import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import MyMarkdownFile from '../../docs/index.md';
import Layout from '@theme/Layout';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    // <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
      <MyMarkdownFile />
      </div>
    //</header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Documentation the ATLAS Open Data project.">
      <HomepageHeader />
      <main>
      </main>
    </Layout>
  );
}
