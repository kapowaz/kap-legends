import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem =
  | {
      title: string;
      Svg: React.ComponentType<React.ComponentProps<'svg'>>;
      image?: never;
      alt?: never;
      description: ReactNode;
    }
  | {
      title: string;
      Svg?: never;
      image: string;
      alt: string;
      description: ReactNode;
    };

const FeatureList: FeatureItem[] = [
  {
    title: 'Modern Legends',
    image: '/img/kap-legends-example.png',
    alt: 'A rendered image showing several of the keycap legends from KAP Legend System',
    description: (
      <>
        Over 600 crisp, sharp legends featuring a modern typeface and minimalist icons, available in
        combined icon and text, icon and text-only variants.
      </>
    ),
  },
  {
    title: 'Premium Quality',
    image: '/img/kap-cutaway-small.png',
    alt: 'A cutaway illustration showing the different injection moulded parts of a KAP Legend System keycap',
    description: (
      <>
        Manufactured using the hybrid doubleshot process which produces sharp and durable legends,
        supporting dyesublimated multicolor legends.
      </>
    ),
  },
  {
    title: 'International Support',
    image: '/img/kap-international-example.png',
    alt: 'A rendered image showing several keycaps with international sublegends from KAP Legend System',
    description: (
      <>
        Support for languages including Danish, French, Finnish, German, Japanese JIS, Korean,
        Norwegian, Spanish, Swedish and Ukraine Cyrillic.
      </>
    ),
  },
];

function Feature({ title, Svg, image, alt, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Svg ? (
          <Svg className={styles.featureSvg} role="img" />
        ) : (
          <img src={image} className={styles.featureSvg} alt={alt} />
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
