import type { NextPage } from 'next';
import Head from 'next/head';
import useSystemThemeDetector from '../hooks/use-system-theme-detector';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const systemTheme = useSystemThemeDetector()
  const isThemeLight = systemTheme === 'light';

  return (
    <div 
      className={styles.container} 
      style={{ 
        color: isThemeLight ? 'black' : 'white', 
        backgroundColor: isThemeLight ? 'white' : 'black' 
      }}
    >
      <Head>
        <title>Use System Theme Detector</title>
        <meta name="description" content="Use System Theme Detector Test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Your System Theme Is Now Set To <a>{systemTheme === 'light'  ? 'Light' : 'Dark'}</a>
        </h1>

        <p className={styles.description}>
          Try To Change Your System Theme
        </p>
      </main>
    </div>
  )
}

export default Home
