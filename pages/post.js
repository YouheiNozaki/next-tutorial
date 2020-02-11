import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/MyLayout';

const Content = () => {
  const router = useRouter();
  return (
    <React.Fragment>
      <h1>{router.query.title}</h1>
      <p>This is the blog post content.</p>
    </React.Fragment>
  );
};

const Page = () => (
  <Layout>
    <Content />
  </Layout>
);

export default Page;
