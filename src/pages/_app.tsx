import '../styles/global.scss';

import { Header } from '../components/Header';
import { Player } from '../components/Player';
import styles from '../styles/app.module.scss';
import React from 'react';
import { PlayerContextProvider } from '../contexts/PlayerContext';
import { ThemeContextProvider } from '../contexts/ThemeContext';

function MyApp({ Component, pageProps }) {
  return(
    <PlayerContextProvider>
      <div className={styles.wrapper}>
        <ThemeContextProvider>
          <main>
            <Header />
            <Component {...pageProps} />
          </main>
        </ThemeContextProvider>
        <Player />
      </div>
    </PlayerContextProvider>
  );
}

export default MyApp
