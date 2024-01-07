import { useRef } from 'react';
import './services.scss';
import { motion, useInView } from 'framer-motion';

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: '-100px' });

  return (
    <motion.div
      className='services'
      variants={variants}
      initial='initial'
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={'animate'}>
      <motion.div className='textContainer' variants={variants}>
        <p>
          An aspiring developer who possess a strong interest in emerging
          <br />
          technologies and software development trends.
        </p>
        <hr />
      </motion.div>
      <motion.div className='titleContainer' variants={variants}>
        <div className='title'>
          <img src='/people.webp' alt='' />
          <h1>
            Your {''}
            <motion.b whileHover={{ color: 'orange' }}>Future</motion.b>{' '}
            developer
          </h1>
        </div>
        <div className='title'>
          <h1>
            <motion.b whileHover={{ color: 'orange' }}>Software </motion.b>{' '}
            Engineer!
          </h1>
          <button>Let&apos;s Connect!</button>
        </div>
      </motion.div>
      <motion.div className='listContainer' variants={variants}>
        <motion.div
          className='box'
          whileHover={{ background: 'lightgray', color: 'black' }}>
          <h2>Web Development</h2>
          <p>
            I am a self-taught developer who is passionate about learning new
            technologies and building web applications.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className='box'
          whileHover={{ background: 'lightgray', color: 'black' }}>
          <h2>Cloud Technologies</h2>
          <p>
            I am enthusiastic about crafting innovative applications that
            harness the flexibility and scalability offered by modern cloud
            platforms.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className='box'
          whileHover={{ background: 'lightgray', color: 'black' }}>
          <h2>Blockchain</h2>
          <p>
            Fueling my curiosity, I am on a journey to unravel the potential of
            blockchain technology. As a self-taught developer
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className='box'
          whileHover={{ background: 'lightgray', color: 'black' }}>
          <h2>Enterprise Apps</h2>
          <p>
            As a self-taught developer, I am driven by the ambition to craft
            sophisticated apps that streamline business processes
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
