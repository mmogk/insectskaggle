import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'



export default function Home() {
  
  const refreshPage = () => window.location.href = window.location.href;
     
return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
        
        <meta http-equiv='cache-control' content='no-cache'></meta>
        <meta http-equiv='pragma' content='no-cache'></meta>
      </Head>

      <main className={styles.main} id="sizing">
      {/* <button onclick = "refreshPage()">
            Reload page
        </button> */}
        <button>
          <Link href="/bugresult">GET MY NEW LITTLE GUY</Link>
        </button>
        <div className={styles.antWrapper}>
          <Image className={styles.ants} src="/ants.png" alt="ants" width={100} height={100}/>
        </div>
        <div className={styles.bg}>lol</div>
      </main>
    </div>
  )
}
