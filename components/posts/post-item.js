import classes from './post-item.module.css';
import Link from 'next/link';
import Image from 'next/image';

function PostItem() {
  return (
    <li className={classes.post}>
      <Link>
        <a>
          <div className={classes.image}>
            <Image />
            <div className={classes.content}>
              <h3>TITLE</h3>
              <time>Sept 11th 2022</time>
              <p>The content</p>
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default PostItem;
