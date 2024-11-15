import React from 'react'
import Banner from '../components/Banner.jsx'
import BlogCards from '../components/BlogCards.jsx'
import BlogPage from '../components/BlogPage.jsx'
import Footer from '../components/Footer.jsx'

const Home = () => {
  return (
    <div>
     <Banner/>
      <div>
        <BlogPage/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Home
