import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>b71nk3r</title>
      </Head>

      <main className={styles.main}>
        <img src="https://ipfs.infura.io/ipfs/Qmbprn33H92CWxMc36To44WWMcihGP7u4ANBfnwrpqy5es" />
      </main>

      <footer className={styles.footer}>Powered by your mom</footer>
    </div>
  );
}
