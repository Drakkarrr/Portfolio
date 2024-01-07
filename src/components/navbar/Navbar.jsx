import Sidebar from '../sidebar/Sidebar';
import './navbar.scss';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Sidebar />
      <div className='wrapper'>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{ fontSize: '1.3rem' }}>
          DRAKKAR
        </motion.span>
        <div className='social'>
          <a
            href='https://www.facebook.com/profile.php?id=100010980994040'
            target='_blank'
            rel='noreferrer'>
            <img src='/facebook.png' alt='facebook icon' />
          </a>
          <a
            href='https://github.com/Drakkarrr'
            target='_blank'
            rel='noreferrer'>
            <img src='/github.png' alt='github icon' />
          </a>
          <a href='#'>
            <img src='/linkedin.png' alt='linkedin icon' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
