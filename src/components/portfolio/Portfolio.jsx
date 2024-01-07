import { useRef } from 'react';
import './portfolio.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const items = [
  {
    id: 1,
    title: 'D-prompt-AI',
    img: 'https://github.com/Drakkarrr/D-prompt-AI/raw/main/public/ui-screenshot/landing-page.png',
    link: 'https://drakkar-prompt-ai.vercel.app/',
    desc: 'An Open source Generative AI web-based app, an unprecedented platform that harnesses the boundless potential of artificial intelligence to ignite your creative spark!',
  },
  {
    id: 2,
    title: 'Izteem gamehub',
    img: 'https://github.com/Drakkarrr/react.js-portfolio/blob/main/public/izteem.png?raw=true',
    link: 'https://izteem-gamehub.vercel.app/',
    desc: 'A simple game marketplace platform built with react and TypeScript for UI and rawg API.',
  },
  {
    id: 3,
    title: 'Bookscrape',
    img: 'https://github.com/Drakkarrr/booking.com-clone/raw/main/screenshots/landing.png',
    link: 'https://booking-clone-beta.vercel.app/',
    desc: 'A web-based flight booking app and Booking.com clone that scrapes its real-time data to provide flights.',
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className='container'>
        <div className='wrapper'>
          <div className='imageContainer' ref={ref}>
            <img style={{ objectFit: 'fill' }} src={item.img} alt='' />
          </div>
          <motion.div className='textContainer' style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={() => console.log(item.link)}>
              <a
                className='link'
                href={item.link}
                target='_blank'
                rel='noreferrer'>
                Visit Site
              </a>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className='portfolio' ref={ref}>
      <div className='progress'>
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className='progressBar'></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
