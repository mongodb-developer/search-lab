import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

const resources = [
  {
    title: "MongoDB Search",
    description: "Full-text search built into MongoDB.",
    links: [
      { label: "Overview", href: "https://www.mongodb.com/docs/search/" },
      { label: "Quick Start", href: "https://www.mongodb.com/docs/search/tutorial/" },
    ],
  },
  {
    title: "MongoDB Vector Search",
    description: "Semantic search with vector embeddings.",
    links: [
      { label: "Overview", href: "https://www.mongodb.com/docs/vector-search/" },
      { label: "Quick Start", href: "https://www.mongodb.com/docs/vector-search/tutorials/quick-start/" },
    ],
  },
  {
    title: "Hybrid Search",
    description: "Combine full-text and vector search results.",
    links: [
      { label: "Overview", href: "https://www.mongodb.com/docs/vector-search/hybrid-search/hybrid-search-overview/" },
      { label: "$rankFusion", href: "https://www.mongodb.com/docs/manual/reference/operator/aggregation/rankFusion/" },
      { label: "$scoreFusion", href: "https://www.mongodb.com/docs/manual/reference/operator/aggregation/scoreFusion/" },
    ],
  },
  {
    title: "MongoDB Agent Skills",
    description: "Official agent skills for search workflows.",
    links: [
      { label: "Search and AI", href: "https://github.com/mongodb/agent-skills/tree/main/skills/mongodb-search-and-ai" },
      { label: "Natural Language Querying", href: "https://github.com/mongodb/agent-skills/tree/main/skills/mongodb-natural-language-querying" },
    ],
  },
];

export default function Home() {
  return (
    <Layout title="MongoDB Search Lab" description="MongoDB Search Lab has moved to Instruqt">
      <header className={clsx('hero hero--primary')}>
        <div className="container text--center">
          <h1 className="hero__title">MongoDB Search Lab</h1>
          <p className="hero__subtitle">
            This lab has moved to a new interactive environment.
          </p>
          <div className="margin-top--lg">
            <Link
              className="button button--secondary button--lg"
              href="https://mdb.link/instruqt-search-lab"
            >
              mdb.link/instruqt-search-lab
            </Link>
          </div>
        </div>
      </header>

      <main className="container margin-top--xl margin-bottom--xl">
        <h2 className="text--center margin-bottom--lg">Further Resources</h2>
        <div className="row">
          {resources.map((group) => (
            <div key={group.title} className="col col--6 margin-bottom--lg">
              <div className="card card--full-height shadow--md">
                <div className="card__header">
                  <h3>{group.title}</h3>
                </div>
                <div className="card__body">
                  <p>{group.description}</p>
                  <ul className="clean-list padding-left--none">
                    {group.links.map((link) => (
                      <li key={link.href} className="margin-bottom--sm">
                        <Link href={link.href}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
