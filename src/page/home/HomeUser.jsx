import React from 'react'
import Header from '../../component/header/Header'
import NavbarUser from '../../component/navbar/NavbarUser'
import PostsUser from '../../component/posts/PostsUser'
import {useQuery} from "@apollo/client"
import { GET_CONTENT } from '../../graphql/queries'

export default function HomeUser() {
    const {data,loading,refetch}=useQuery(GET_CONTENT);
    if(loading){
      return(
        <>
        <NavbarUser/>
        <div className="home">
            <Header/>
            loading
        </div>
      </>
      )
    }
    return (
        <>
          <NavbarUser/>
          <div className="home">
              <Header/>
              <PostsUser
              data={data?.myBlog_konten}
              />
          </div>
        </>
    )
}
