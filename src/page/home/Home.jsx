import React from 'react'
import Header from '../../component/header/Header'
import Navbar from '../../component/navbar/Navbar'
import Posts from '../../component/posts/Posts'
import {gql,useMutation,useQuery} from "@apollo/client"

const GET_CONTENT = gql`
query MyQuery($_eq: Int_comparison_exp = {}) {
    myBlog_content(where: {id: $_eq}) {
      id
      title
      stories
      created_at
      updated_at
    }
  }
`;

export default function Home() {
    const {data,loading,refetch}=useQuery(GET_CONTENT,{
        variables:{_eq:{}},
        notifyOnNetworkStatusChange:true,
    });
    
    return (
        <>
          <Navbar/>
          <div className="home">
              <Header/>
              <Posts
              data={data?.myBlog_content}
              />
          </div>
        </>
    )
}
