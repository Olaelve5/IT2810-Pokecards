import React from 'react';
import classes from '../styles/Header.module.css';

const Logo: React.FC = () => {
  return (
    <header className={classes.header}>
      <img src={'https://images.pokemontcg.io/ex6/logo.png'} alt="Logo" className={classes.logo} />
      <h1 className={classes.title}>Pokecards</h1>
    </header>
  );
};

export default Logo;
