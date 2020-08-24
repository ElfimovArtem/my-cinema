import React from 'react';
import { Header } from './components/header';
import { ContentBlock } from './components/content-block';
import { Footer } from './components/footer';
import './styles.scss';

export const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <ContentBlock />
      <Footer />
    </div>
  );
};
