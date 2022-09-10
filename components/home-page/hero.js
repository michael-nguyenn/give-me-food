import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/michael.jpeg"
          alt="An image showing Michael"
          width={450}
          height={600}
        />
      </div>
      <h1>Hi! I'm Michael</h1>
      <p>I blog about web development :)</p>
    </section>
  );
}

export default Hero;
