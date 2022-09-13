import { Fragment } from 'react';
import PostContent from '../../components/posts/post-detail/post-content';
import { getPostData, getPostsFiles } from '../../lib/posts-utils';
import Head from 'next/head';

const PostDetailPage = ({ post }) => {
  return (
    <Fragment>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostContent post={post} />
    </Fragment>
  );
};

export function getStaticPaths() {
  const postFilenames = getPostsFiles();

  //need slug names
  const slugs = postFilenames.map(fileName => fileName.replace(/\.md$/, ''));

  return {
    paths: slugs.map(slug => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export function getStaticProps(context) {
  //context has a params key, which is an object with the value of all dynamic values
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 300,
  };
}

export default PostDetailPage;
