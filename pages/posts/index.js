import { Fragment } from 'react';
import AllPosts from '../../components/posts/all-posts';

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

const AllPostsPage = () => {
  return (
    <Fragment>
      <AllPosts posts={DUMMY_DATA} />
    </Fragment>
  );
};

export default AllPostsPage;
