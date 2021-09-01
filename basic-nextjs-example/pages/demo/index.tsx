import Head from 'next/head'
import React from 'react'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ul>
          <li>
            <Link href="/staticapi" prefetch={false}>Static render page</Link>
          </li>
          <li>
            <Link href="/serverapi" prefetch={false}>Server side rendered page</Link>
          </li>
        </ul>
      </main>
    </div>
  )
}
