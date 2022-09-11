import { Fragment } from 'react';
import classes from './featured-posts.module.css';

function FeaturedPosts() {
  return (
    <Fragment>
      <section className={classes.latest}>
        <h2>Featured Posts</h2>
      </section>
    </Fragment>
  );
}

export default FeaturedPosts;
