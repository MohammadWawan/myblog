import React,{useContext} from 'react'
import gambar from "../../image/gb-head.jpg"
import "./singlepost.css"
import { ContentContext } from '../../context/ContentContext'
import Moment from 'react-moment'
import { useMutation } from '@apollo/client'
import { DELETE_CONTENT,GET_CONTENT } from '../../graphql/queries'
import Button from '@restart/ui/esm/Button'

const SinglePost=()=> {
    const {content}=useContext(ContentContext);
    console.log(content)
    const date = new Date();
    const [deleteDataById,{data:deleteData}]=useMutation(DELETE_CONTENT);
    const hapusContent=async(id)=>{
      await deleteDataById({
        variables:{
          id:id,
        },
        refetchQueries: [
          {
            query: GET_CONTENT,
          },
        ],
      })
    }
    return (
        <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src={gambar}
          alt=""
        />
        <h1 className="singlePostTitle">
          {content.title}
          <div className="singlePostEdit">
            <Button className="buttonEdit" onClick={hapusContent}>Edit</Button>
            <Button className="buttonDelete">Delete</Button>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            <Moment format="MMMM Do YYYY">{date}</Moment>
          </span>
        </div>
        <p className="singlePostDesc">
        {content.stories}
        </p>
      </div>
    </div>
    )
}

export default SinglePost;