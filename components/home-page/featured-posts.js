import { Fragment } from 'react';
import PostGrid from '../posts/post-grid';
import classes from './featured-posts.module.css';

function FeaturedPosts(props) {
  return (
    <Fragment>
      <section className={classes.latest}>
        <h2>Featured Posts</h2>
        <PostGrid posts={props.posts} />
      </section>
    </Fragment>
  );
}

export default FeaturedPosts;
