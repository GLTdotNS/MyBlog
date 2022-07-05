import React from 'react'

import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import StickySocialMediaBar from "../Sticky/stickySocialMediaBar"
import GitHub from "../Blog/BlogPageComponents/GitHub"

const Layout = ({children}) => {
  return (
    <div 
    className='layout'>
      
      <header>
        <Navbar/>
      </header>
      <StickySocialMediaBar/>
  
      <main className='main-container row'
      >
       
       {children}
 
      <Footer/> 

      </main>
 
    </div>
  )
}

export default Layout
