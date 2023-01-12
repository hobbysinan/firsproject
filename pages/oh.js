import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import Link from 'next/link'
import Insta from "../components/Insta";
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function ogPage() {
  return (
    <>
      <Head>
        <title>Boost Followers</title>
        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
<h3>Know your audience</h3>
<p>There are several things that you need to understand your audience. You need to make sure that you post content that is relevant to them. You also need to keep in mind that audiences like to be engaged as well, so keep your options open about user-generated content.</p>
 
<h3>Improved Captions</h3>

 <p>After hashtags, captions are the most important cog in an Instagram post. Your captions need to be engaging, creative and should prompt the followers for a response. This can result in a lot of comments which is great for engagement numbers.</p>
 
  </>

    
  )
}
