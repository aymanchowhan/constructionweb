import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Header from './Header'
import Contact from './Contact'

function Layout({ children, title = 'My website', hideHeader = false }) {
    const [changeHeaderColor, setChangeHeaderColor] = useState(false)
    useEffect(() => {
        // Function to handle scroll event
        const handleScroll = () => {
          // Check if user has scrolled down
          if (window.scrollY > 100) {
            setChangeHeaderColor(true);
          } else {
            setChangeHeaderColor(false);
          }
        };
    
        // Add event listener
        window.addEventListener('scroll', handleScroll);
    
        // Cleanup event listener on component unmount
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
      

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="My Portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className='fixed left-0 right-0 top-0 text-white'>
                {
                    !hideHeader &&
                    <Header changeHeaderColor={changeHeaderColor} />
                }
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Contact />
            </footer>
        </>
    )
}

export default Layout