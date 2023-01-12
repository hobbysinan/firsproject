import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import Link from 'next/link'
import Insta from "../components/Insta";
import { Inter } from '@next/font/google'
import styles from '../styles/v2.css'

const inter = Inter({ subsets: ['latin'] })

export default function ogPage() {
  return (
    <>
      <Head>
        <title>Boost Followers</title>
        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
<div className="adv-3"> 
<h3 className="title">Improved Captions</h3> 
<div className="desc"> 
<p>After hashtags, captions are the most important cog in an Instagram post. Your captions need to be engaging, creative and should prompt the followers for a response. This can result in a lot of comments which is great for engagement numbers.</p>
</div> 
</div>
 
  </>

    
  )
}
