import React from 'react';
import classes from '../styles/Logo.module.css';

const Logo: React.FC = () => {
  return (
    <header className={classes.header}>
      <img src={'https://images.pokemontcg.io/ex6/logo.png'} alt="Logo" className={classes.logo} />
    </header>
  );
};

export default Logo;
