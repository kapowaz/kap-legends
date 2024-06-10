import type { ReactNode } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import KAPLogoVertical from '@site/static/img/kap-logo-vertical.svg';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx('container', styles.container)}>
        <KAPLogoVertical
          role="img"
          height={222}
          width={216}
          title="KAP Legend System logo"
          className={styles.heroLogo}
        />

        <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
          A modern and versatile set of legends for custom mechanical keyboard keycaps, designed by{' '}
          <a href="https://kapowaz.industries">kapowaz industries</a>.
        </p>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Home"
      description="KAP Legend System — a modern and versatile set of legends for custom mechanical keyboard keycaps"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
