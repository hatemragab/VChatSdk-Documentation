import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">{siteConfig.title}</h1>

                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/intro">
                        Vchat Tutorial - 5min ⏱️
                    </Link>
                </div>

                <img
                    src="https://user-images.githubusercontent.com/37384769/138588123-8919321f-132e-4913-9e81-6c0d6a915d8f.jpeg"
                    width="300"/>

                <img
                    src="https://user-images.githubusercontent.com/37384769/138588161-836214c0-0d54-480a-8030-3679430656b5.jpeg"
                    width="300"/>
                <img
                    src="https://user-images.githubusercontent.com/37384769/138588227-31de6adc-fb1e-49b5-baa0-5fe554d3e841.jpeg"
                    width="300"/>
                <img
                    src="https://user-images.githubusercontent.com/37384769/138588252-5e7cfd5c-3955-48ca-b8d2-78352abb9d87.jpeg"
                    width="300"/>
                <img
                    src="https://user-images.githubusercontent.com/37384769/138944580-462a8a1a-7227-4e23-ba93-7d467617222b.png"
                    width="300"/>
                <img
                    src="https://user-images.githubusercontent.com/37384769/138944646-00d54e78-de93-4ea6-a288-84f675143780.png"
                    width="300"/>


            </div>
        </header>
    );
}

export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <HomepageHeader/>
            <main>
                <HomepageFeatures/>
            </main>
        </Layout>
    );
}
