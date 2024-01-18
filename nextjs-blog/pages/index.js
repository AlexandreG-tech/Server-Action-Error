import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  const fetchData = async () => {
    //const res = await fetch('/api/thirdweb'); // FAILS
    const res = await fetch('/api/action'); // WORKS
    const data = await res.json();
    console.log('Response : ', {data});
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
}