import React from 'react';
import styles from './page.module.css';
/* Import the components for the Homepage */

import Footer from '../components/Footer';
import Header from '../components/Header';
import Mainhome from '../components/Mainhome';

 /* ///////////////////////////////////// */

function Home() {
  return (
    <div id={styles.home}>
      <Header />
      <Mainhome />  
      <Footer />
    </div>
  );
};

export default Home