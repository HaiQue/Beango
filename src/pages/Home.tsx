import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
const Home: React.FC = () => {
  return (
    <>
      <div className='hero-container'>
        <h1>COFFEE ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <Link to='/products'>
          <button className='btn btn-primary'>Try it</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
