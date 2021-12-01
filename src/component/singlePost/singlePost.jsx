import React,{useContext} from 'react'
import gambar from "../../image/gb-head.jpg"
import "./singlePost.css"
import { ContentContext } from '../../context/ContentContext'
import Moment from 'react-moment'
import { useMutation } from '@apollo/client'
import { DELETE_CONTENT,GET_CONTENT,UPDATE_CONTENT } from '../../graphql/queries'
import Button from '@restart/ui/esm/Button'
import { useNavigate } from 'react-router-dom';

const SinglePost=()=> {
    const {content,setContent,setOnEdit}=useContext(ContentContext);
    console.log(content)
    const date = new Date();
    const [deleteDataById,{data:deleteData}]=useMutation(DELETE_CONTENT);
    const[editDataById,{data:ediData}]=useMutation(UPDATE_CONTENT);
    let navigate = useNavigate();

    const hapusContent=(id)=>{
      deleteDataById({
        variables:{
          id:id,
        },
        refetchQueries: [
          {
            query: GET_CONTENT,
          },
        ],
      })
      navigate("/");
    }
    const updateContent=(id,title,stories)=>{      
      setContent({
        id:id,
        title:title,
        stories:stories,
      })
      setOnEdit(true)
      navigate("/write");
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
            <Button className="buttonEdit" onClick={()=>updateContent(content.id,content.title,content.stories)}>Edit</Button>
            <Button className="buttonDelete" onClick={()=>hapusContent(content.id)}>Delete</Button>
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