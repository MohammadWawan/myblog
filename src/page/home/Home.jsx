import React from 'react'
import Header from '../../component/header/Header'
import Navbar from '../../component/navbar/Navbar'
import Posts from '../../component/posts/Posts'
import {useQuery} from "@apollo/client"
import { GET_CONTENT } from '../../graphql/queries'

export default function Home() {
    const {data,loading,refetch}=useQuery(GET_CONTENT);
    if(loading){
      return(
        <>
        <Navbar/>
        <div className="home">
            <Header/>
            loading
        </div>
      </>
      )
    }
    return (
        <>
          <Navbar/>
          <div className="home">
              <Header/>
              <Posts
              data={data?.myBlog_konten}
              />
          </div>
        </>
    )
}
