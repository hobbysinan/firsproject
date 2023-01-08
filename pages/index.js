import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import Link from 'next/link'
import ContactForm from "../components/contactForm";
import SpotifyFooter from "../components/SpotifyFooter";
import scroll from "../components/scroll";
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
<span id="root">
  <section className="section-all">
    {/* 1-Role Main */}
    <main className="main" role="main">
      <div className="wrapper">
        <article className="article">
          <div className="content">
            <div className="login-box">
              <div className="header">
                <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" alt="Instagram" />
              </div>{/* Header end */}
              <div className="form-wrap">
               
              </div> {/* Form-wrap end */}
            </div> {/* Login-box end */}
            <div className="login-box"> </div>
            <p className="text">Don't have an account?<a href="#">Sign up</a></p>
          </div> {/* Signup-box end */}
          </>

    
  )
}
