/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    image: '/img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        VChatSDK was designed from the ground up to be easily installed and
        used to get your chat system up and running quickly with out write it from scratch.
      </>
    ),
  },
  {
    title: 'pub dev package',
    image: '/img/package.png',
    description: (
      <>
        VChatSDK lets you focus on your app, and we work to improve the
          package and push updates make sure to start it
      </>
    ),
  },
  {
    title: 'Powered by Node js',
    image: '/img/node.png',
    description: (
      <>
          VChatSDK written on node js using typescript and socket io cor real time connection
          and mongo db to save the user messages and chats
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
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
      </div>
    </section>
  );
}
