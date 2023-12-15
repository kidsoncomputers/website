import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'About',
    Svg: require('@site/static/img/about.svg').default,
    description: (
      <>
        Kids on Computers (KoC) is an all­-volunteer organization registered in Colorado since 2009
        as a 501(c)(3) non­profit organization. We set up computer labs in low-income schools using
        both donated and new hardware.
      </>
    ),
  },
  {
    title: 'Donate',
    Svg: require('@site/static/img/donation.svg').default,
    description: (
      <>
        Kids on Computers seeks donations and help in a variety of forms. To advance our mission we
        accept monetary donations as well as bulk computer/laptop donations. Cash donations – of any amount
        – are always useful and...

      </>
    ),
  },
  {
    title: 'Our Labs',
    Svg: require('@site/static/img/school.svg').default,
    description: (
      <>
        One of the most rewarding parts of being a KoC volunteer is seeing a lab come to fruition.  The
        local communities (parents, teachers, and students) are all very appreciative and excited to have
        access to computer technology. Volunteer with us to help bring these labs to life!
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
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

function KoCMap() {
  return (
    <div className={clsx('col col--8')}>
      <div className={styles.kocmapContainer}>
        <iframe className={styles.kocmapIframe}
          loading="lazy"
          src="https://www.google.com/maps/d/embed?mid=1n_5zIuBe7Qv3NqQ0ABVcYZ0NABs&amp;hl=en"
          ></iframe>
        </div>
    </div>
  );

}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div className="row">
          <div className={clsx('col col--2')}></div>
          <KoCMap />
          <div className={clsx('col col--2')}></div>
        </div>
      </div>
    </section>
);
}
