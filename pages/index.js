import { Fragment } from 'react';

import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';

const DUMMY_DATA = [
  {
    slug: 'test-michael',
    title: 'This is a Test',
    image: 'next-js.webp',
    excerpt: 'This is a test data to make sure I did things properly',
    date: '2022-09-11',
  },
  {
    slug: 'test-michael-2',
    title: 'This is a Test',
    image: 'next-js.webp',
    excerpt: 'This is a test data to make sure I did things properly',
    date: '2022-09-11',
  },
  {
    slug: 'test-michael-3',
    title: 'This is a Test',
    image: 'next-js.webp',
    excerpt: 'This is a test data to make sure I did things properly',
    date: '2022-09-11',
  },
];

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_DATA} />
    </Fragment>
  );
};

export default HomePage;

// 1) Hero ==> Present ourselves

// 2) Featured Posts
