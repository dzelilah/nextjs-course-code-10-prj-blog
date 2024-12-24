import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/cv-p.jpg'
          alt='An image showing Dzely'
          width={300}
          height={400}
        />
      </div>
      <h1>Hi, I'm Dzely</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        React.
      </p>
    </section>
  );
}

export default Hero;
