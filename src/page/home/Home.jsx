import React,{useEffect} from 'react'
import Header from '../../component/header/Header'
import Navbar from '../../component/navbar/Navbar'
import Posts from '../../component/posts/Posts'
import {useQuery} from "@apollo/client"
import { GET_CONTENT } from '../../graphql/queries';
import { useCookies } from "react-cookie";
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate=useNavigate()
  const [cookie] = useCookies(["admin"]);
  useEffect(() => {
    if(cookie.admin == null || cookie.admin == "") {
      navigate("/login")
    }
  }, []);
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
