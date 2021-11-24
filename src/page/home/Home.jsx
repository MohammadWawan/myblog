import React from 'react'
import Header from '../../component/header/Header'
import Navbar from '../../component/navbar/Navbar'
import Posts from '../../component/posts/Posts'
export default function Home() {
    return (
        <>
          <Navbar/>
          <div className="home">
              <Header/>
              <Posts/>
          </div>
        </>
    )
}
