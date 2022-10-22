import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/hero.jpg"
          alt="Landing hero image"
          width={300}
          height={300}
        />
      </div>
      <h1>Hello!</h1>
      <p>Here you can find all my favorite recipes :)</p>
    </section>
  );
}

export default Hero;
