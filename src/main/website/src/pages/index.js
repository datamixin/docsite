import React from 'react';
import Layout from '@theme/Layout';
import Intro from "@site/src/components/intro";
import { translate } from "@docusaurus/Translate";
import Modeling from "@site/src/components/modeling";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${translate({
        id: "index.description",
        message: "Transform your data into intelligent model",
      })}"`}>
      <main>
        <Intro />
        <Modeling />
      </main>
    </Layout>
  );
}
