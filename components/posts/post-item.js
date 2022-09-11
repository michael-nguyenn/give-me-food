import classes from './post-item.module.css';
import Link from 'next/link';
import Image from 'next/image';

function PostItem(props) {
  const { title, excerpt, image, date, slug } = props.post;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long', // 1 ==> 'January'
    year: 'numeric',
  });

  return (
    <li className={classes.post}>
      <Link>
        <a>
          <div className={classes.image}>
            <Image src={image} alt="{title}" width={300} height={200} />
            <div className={classes.content}>
              <h3>{title}</h3>
              <time>{formattedDate}</time>
              <p>{excerpt}</p>
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default PostItem;
