import React from 'react';
import headerBg from '../../assets/header-bg.jpg';
import './header-styles.scss'

export const Header = () => (
  <header className="header">
    <img className="header__background" src={headerBg} alt="header-bg" />
    <h1 className="header__title">My Cinema</h1>
  </header>
);
