import { Fragment } from 'react';
import Head from 'next/head';

import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';
import { getFeaturedPosts } from '../lib/posts-utils';

const HomePage = ({ posts }) => {
  return (
    <Fragment>
      <Head>
        <title>Michael&#38;s Blog</title>
        <meta
          name="description"
          content="I post about all my favorite recipes!"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
};

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 60,
  };
}

export default HomePage;

// 1) Hero ==> Present ourselves

// 2) Featured Posts
