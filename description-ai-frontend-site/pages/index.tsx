import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Generator from '../components/generator'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>AI Generated Marketing Descriptions</title>
        <meta name="description" content="Generate descriptions for your products using AI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Generator />
    </div>
  )
}

export default Home
